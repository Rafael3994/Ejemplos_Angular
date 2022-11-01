import { Injectable } from '@angular/core';
// Importaciones de RXJS
import { fromEvent, Observable, of } from 'rxjs';
import { PRODUCT_LIST } from '../mocks/products.mocks';
import { Product } from '../types/product.type';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }

  getUserData(): Observable<string | number> {
    return of('Hola', 'Martín', 30)
  }

  getAllProducts(): Observable<Product[]> {
    return of(PRODUCT_LIST);
  }

  getClicks(): Observable<Event> {
    return fromEvent(document, 'click');
  }

}
