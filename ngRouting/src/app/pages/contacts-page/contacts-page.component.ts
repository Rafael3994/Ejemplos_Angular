import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { IRandomContact, Results } from 'src/app/models/randomUser';
import { ContactService } from 'src/app/services/contact.service';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  filtroSexo: string = 'todos';
  listaRandomContacts: IRandomContact[] = [];
  loading: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute,
    private randomUserService: RandomUserService
  ) { }

  ngOnInit(): void {
    // Obtener los Query Params
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParam:', params.sexo);
      if (params.sexo) {
        this.filtroSexo = params.sexo;
        if (params.sexo === 'female' || params.sexo === 'male') {
          // Implementación para obtener la lista de contatos aleatoria con sexo
          this.randomUserService.obtenerRandomContacts(10, params.sexo).subscribe({
            next: (response: Results) => {
              response.results.forEach((randomContact: IRandomContact, index: number) => {
                this.listaRandomContacts.push(randomContact)
              })
              console.log(this.listaRandomContacts);
            },
            error: (error) => {
              console.error(error)
            },
            complete: () => {console.info('Petición de random contact terminada'); this.loading = false;}
          })
        } else {
          // Implementación para obtener la lista de contatos aleatoria
          this.randomUserService.obtenerRandomContacts(10).subscribe({
            next: (response: Results) => {
              response.results.forEach((randomContact: IRandomContact, index: number) => {
                this.listaRandomContacts.push(randomContact)
              })
              console.log(this.listaRandomContacts);
            },
            error: (error) => {
              console.error(error)
            },
            complete: () => {console.info('Petición de random contact terminada'); this.loading = false;}
          })
        }
      }

    })



  }

  // Ejemplo de paso de información entre componentes a través del ESTADO
  volverAHOME(contacto: IRandomContact) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto
      }
    }
    this.router.navigate(['/dashboard'], navigationExtras)
  }


}
