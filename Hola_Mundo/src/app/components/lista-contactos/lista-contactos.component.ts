import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy {

  // Creamos una lista de contactos
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  // Subscripción de Servicio
  subscription: Subscription | undefined

  // Inyectamos en el contructar el servicio de Contactos
  constructor(private contactoService: ContactoService) {

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    // Obtener la lista de contactos que nos brinda el servicio
    this.contactoService.obtenerContactos()
      .then((lista: IContacto[]) => this.listaContactos = lista)
      .catch((error) => console.log(`Algo salió mal, ${error}`))
      .finally(() => console.log('Peticion de la lista terminada'))
  }

  obtenerContacto(id: number) {
    this.subscription = this.contactoService.obtenerContactoPorID(id)
      ?.subscribe((contacto: IContacto) => this.contactoSeleccionado = contacto)
  }

}
