import { importProvidersFrom, Injectable } from '@angular/core';

// Importamos los contactos de mocks
import { CONTACTOS } from '../mocks/contactos.mocks';
import { IContacto } from '../models/contacto.interface';

// Importamos Observable de rxjs
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTOS) // Nos devuelve un listado de contactos
  }

  obtenerContactoPorID(id: number): Observable<IContacto> | undefined {
    const contacto = CONTACTOS.find((contacto: IContacto) => contacto.id == id);

    // Creamos un observable
    let observable: Observable<IContacto> = new Observable(observer => {
      observer.next(contacto) // Emitir un calor a todo componente suscrito
      observer.complete() // No emitimos más valores
    })
    if (contacto) {
      return observable;
    } else {
      return undefined;
    }
  }
}
