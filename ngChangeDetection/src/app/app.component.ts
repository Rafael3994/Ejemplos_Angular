import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngChangeDetection';
  // Variable para el ejemplo de REATTACH
  live: boolean = true;
  // Valores para el ejemplo de Async Pipe
  items = [{numero: 0}];
  items$ = new BehaviorSubject(this.items) // Le pasamos un valor por defecto

  addItem(){
    const nuevoItem = Math.floor(Math.random() * 100) + 1;
    this.items.push(
      {numero: nuevoItem}
    );

    // Emitimos un nuevo valor de la lista de items
    this.items$.next(this.items);
    console.log(this.items$)
  }
}
