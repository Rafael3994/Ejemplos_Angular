import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HolaMundo';
  usuario = 'Rafael3994'

  // Esta funcion se ejecuta cuando en el hijo (Saludo Component) se pulse un botón
  recibirMensajeDelHijo(event: string){
    alert(event)
  }
}