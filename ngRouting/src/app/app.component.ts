import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Paso de información entre componentes
// 1. A través de @Input y @Outputs 
// 2. A través de inyección de constructores de componentes hijos @ViewChild, @ContentChild o @ContentChildren
// 3. A través de Servicios (Promesas y Observable, etc.) --> NGRX (Gestión del estado de la aplicación)
// 4. A través de parámetros entre rutas

export class AppComponent implements OnInit {
  title = 'ngRouting';
  token: string | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token')
  }
}