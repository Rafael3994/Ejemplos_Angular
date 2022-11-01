import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnChanges, OnDestroy {

  // Input es para la comunicación de padre a hijo
  @Input() nombre: string = '';
  // Output es para la comunicación de hijo a padre através de un evento y su captura
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  myStyle: object = {
    color: 'blue',
    fontSize: '20px',
    fontWeight: 'bold',
  }

  constructor() { }
  // Ciclo de vida
  // * 1. ngOnChanges 
  // * 2. ngOnInit 
  // 3. ngDoCheck 
  // 4.ngAfterContentInit 
  // 5. ngAfterContentChecked 
  // 6. ngAfterViewInit
  // 7. ngAfterViewChecked 
  // 8. ngAfterContentChecked 
  // 9. ngAfterViewChecked
  // * 10. ngOnDestroy 


  // "ComponentDidMount"
  ngOnInit(): void {
    // Instrucciones previas a la renderización del componente
    console.log('ngOnInit del componente Saludo');
  }

  // "ComponentDidUpdate"
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges El componente recibe cambios', changes['nombre'].currentValue);
  }
  // "ComponentWillUnmount"
  ngOnDestroy(): void {
    console.log('ngOnDestroy El componente va a desaparecer');
  }


  // Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componente padre
  enviarMensajePadre(): void {
    this.mensajeEmitter.emit(`Hola, ${this.nombre} Alerta despachada desde un click de botón`)
  }

  // Evento para gestionar un evento de tipo click en el DOM
  // alertaSaludo(): void {
  //   alert(`Hola, ${this.nombre} Alerta despachada desde un click de botón`)
  // }

}
