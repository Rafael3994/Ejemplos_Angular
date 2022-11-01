import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { miObservable } from 'src/app/ejemplos/ejemplosRxJS';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Product } from 'src/app/types/product.type';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  shoppingList: Product[] = [];
  suscription: Subscription = new Subscription();
  constructor(private _shoppingService: ShoppingService) { }

  /**
   * * next => Atributo obligatorio de cualquier observer. Es la funcionalidad que recibe
   * * del observable al emitir nuevos valores
   * * error => La funcionalidad opcional que gestiona la notificación de error que puede lanzar el observable
   * * completed => La funcionalidad opcional ue gestiona la notificación de una ejecución completada
   */

  ngOnInit(): void {
    // Evitar: Solo usar next del obserer
    this.suscription = this._shoppingService.getAllProducts().subscribe({
      next: (list: Product[]) => {
        this.shoppingList = list;
        console.table(this.shoppingList)
      },
      error: ((error: any) => console.error(`Ha ocurrido un error al obtener la lista: ${error}`)),
      complete: (() => console.info(`Obtención de lista de productos completada`))
    })

    // Ejemplo de recepción de diferentes valores
    this.suscription.add(this._shoppingService.getUserData().subscribe({
      next: (valor: string | number) => console.log(`- ${valor}`),
      error: (error: any) => console.error(`Error: ${error}`),
      complete: () => console.info(`Hemos terminada`)
    }));

    // * Ejemplo de uso de un Observable personalizado 
    miObservable('Hola', 'Martín', 30).subscribe({
      next: (valor: (string | number)) => console.log(`- ${valor}`),
      error: ((error) => console.error(`Hubo un error ${error}`)),
      complete: () => console.info('Fin de emisión de observable personalizado')
    })

    // * Ejemplo de captura de CLICKS en el documento a través de un observable
    this._shoppingService.getClicks().subscribe({
      next: (valor: Event) => console.log(`Ha ocurrido un click en: ${valor.target}`),
      error: (error: any) => console.error(`Ha ocurrido un error: ${error}`),
      complete: () => console.log('Observable terminado que escucha clicks')
    })

  }

  ngOnDestroy(): void {
    // Desubscribimos cuando el componente desaparece
    this.suscription.unsubscribe();
  }
}
