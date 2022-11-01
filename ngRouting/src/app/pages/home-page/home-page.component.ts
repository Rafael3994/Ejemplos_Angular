import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IRandomContact } from 'src/app/models/randomUser';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  contactoSeleccionado: IRandomContact | undefined;
  token: string | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Comprobamos que esta en el sessionStorage
    this.token = sessionStorage.getItem('token');
    // Leemos el estado del historial de navegación
    if (history.state.data) {
      this.contactoSeleccionado = history.state.data;
    }

  }

  navegarAContacts(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        sexo: 'todos'
      }
    }
    this.router.navigate(['dashboard/contacts'], navigationExtras)
  }

}
