import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.scss'],
  // changeDetection: ChangeDetectionStrategy.Default,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushComponent implements OnInit {

  /**
   * Valor que se va a incrementar cada segundo en archivo TS
   * y que dependiendo del a estrategia de Chanfe Detection sus cambios se
   * se van a poder ver en el HTML
   */
  segundos: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      // Icrementamos el valor de segundos
      this.segundos ++;
      // Lo mostramos por consola
      console.log('Segundos Transcurridos:', this.segundos);
      
    }, 1000)
  }

}
