import { Pipe, PipeTransform } from '@angular/core';
import { IRandomContact } from '../models/randomUser';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(contacto: IRandomContact | undefined, ...args: unknown[]): string {
    return `${contacto?.name.title} ${contacto?.name.first} ${contacto?.name.last}`;
  }

}
