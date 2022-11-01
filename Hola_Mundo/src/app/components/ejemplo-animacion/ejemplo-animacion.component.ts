import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-ejemplo-animacion',
  templateUrl: './ejemplo-animacion.component.html',
  styleUrls: ['./ejemplo-animacion.component.scss'],
  // Metadatos para la animación del componente
  animations: [
    trigger('animaciones', [
      state('active', style({
        transform: 'translate(10px, 20px)'
      })),
      state('inactive', style({
        transform: 'translate(40px, 50px)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive ', animate('1000ms ease-in'))
    ])
  ],
})
export class EjemploAnimacionComponent implements OnInit {

  state: string = 'inactive';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.state = 'active';
    }, 500);
  }



}
