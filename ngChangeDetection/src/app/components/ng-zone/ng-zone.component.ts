import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-ng-zone',
  templateUrl: './ng-zone.component.html',
  styleUrls: ['./ng-zone.component.scss']
})
export class NgZoneComponent implements OnInit {

  progreso: number = 0 // Valor que va a ir de 0% a 100%
  texto: string = ''; // Dentro o Fuera de Angular Zone

  constructor(private _ngZone: NgZone) { }

  ngOnInit(): void {
  }

  /**
   * Método para incrementar de 0 a 100 el valor de progreso
   * @param terminar Callback que se ejecuta al teminar el incremento 
   */
  incrementarProgreso(terminar: () => void) {
    if (this.progreso < 100) {
      this.progreso += 1; // Incrementamos el progreso a 1
      console.log(`Progreso actual: ${this.progreso}%`);
      window.setTimeout(() => {
        this.incrementarProgreso(terminar); // Recursividad para seguir incrementando
      }, 10);
    } else {
      // Ya habría terminado de incrementarse y ejecutamos el callback
      terminar();
    }
  }

  /**
  * Método que aumenta el progreso 
  * DENTRO de NGZONE 
  * * Implica que los cambios se ven en el HTML
  */
  aumentarDentroNgZone() {
    this.texto = 'DENTRO';
    this.progreso = 0; // lo reseteamos para la ejecución desde 0%
    this.incrementarProgreso(() => console.log(`${this.texto} de Angular Zone: Incremento terminado`))
  }


  /**
 * Método que aumenta el progreso 
 * FUERA de NGZONE 
 * * Implica que los cambios NO SE VAN A VER en el HTML
 * * hasta que volvamos a meter el componente en el Angular Zone
 */
  aumentarFueraNgZone() {
    this.texto = 'DENTRO';
    this.progreso = 0; // lo reseteamos para la ejecución desde 0%
    // EJECUTAMOS FUERA DE ANGULAR ZONE
    this._ngZone.runOutsideAngular(() => {
      this.incrementarProgreso(() => {
        // CUANDO TERMINE DE INCREMENTAR
        // Es cuando pasamos a ejecutar en Angular Zone de nuevo
        // Volvemos a reacoplar el componente TS y HTML
        this._ngZone.run(
          () => console.log(`${this.texto} de Angular Zone: Incremento terminado`)
        );
      }
      );
    });
  }
}
