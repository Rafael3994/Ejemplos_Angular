import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { IRandomContact } from 'src/app/models/randomUser';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {

  id: any | undefined;
  contacto: IRandomContact | undefined;
  filtroPrevio: string =  'todos';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Vamos a leer los parametros
    this.route.params.subscribe(
      (params: any) => {
        if (params.id) {
          this.id = params.id
        }
      })

    // Vamos a leer también del State el contacto
    if (history.state.data) {
      this.contacto = history.state.data;
    }
    if (history.state.filtro) {
      this.contacto = history.state.data;
      this.filtroPrevio = history.state.filtro
    }
  }
}
