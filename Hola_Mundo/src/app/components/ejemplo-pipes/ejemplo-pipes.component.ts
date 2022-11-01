import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contacto.interface';
import { IJugador } from 'src/app/models/juagador.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent implements OnInit {

  dob: Date = new Date(1991, 9, 14);
  cambioFormat: boolean = true;
  nombre: string = 'Rafael'
  numeroPI: number = 3.1415926535897
  precioCarrito: number = 100;
  persona: IContacto = {
    id: 0,
    nombre: 'Martín',
    apellidos: 'San José',
    email: 'martin@gmail.com',
    edad: 30
  }
  cantidad: number = 0.3512;
  textoLargo: string = 'fsadfafkla dfklasjfklasjf asfasldkfjsda';
  // Ejemplo para Pipe Calcular Puntuación
  jugador1: IJugador = {
    nombre: 'Martín',
    puntos: [10, 30, 40, 0]
  }
  jugador2: IJugador = {
    nombre: 'Pepe',
    puntos: [0, 80, 10, 5]
  }

  constructor() { }

  ngOnInit(): void {
  }

  get dateFormat() {
    return this.cambioFormat ? 'shortDate' : 'fullDate';
  }

  cambiarFomato() {
    this.cambioFormat = !this.cambioFormat
  }
}
