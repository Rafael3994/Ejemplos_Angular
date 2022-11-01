import { Component, OnInit } from '@angular/core';

export type Producto = {
  nombre: string,
  precio: number,
  descripcion: string,
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent implements OnInit {

  cargando: boolean = true;
  listaElementos: Producto[] = [
    { nombre: 'Leche', precio: 10, descripcion: 'Leche entera' },
    { nombre: 'Carne', precio: 14, descripcion: 'Carne de vaca' },
    { nombre: 'Verdura', precio: 5, descripcion: 'Espinacas' },
  ]

  opcion: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  cambiarCargando() {
    this.cargando = !this.cargando
  }

  escogerOpcion(opcionEscogida: number){
    this.opcion = opcionEscogida; // El valor cambia, implica un cambio en los elementos renderizados
  }

}
