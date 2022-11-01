import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    let body = {
      email: email,
      password: password,
    }
    // Devolvemos la respuesta del Observable cuando la peticion http se ha completado,
    // el componente suscrito accederá al token de login
    return this.http.post('https://reqres.in/api/login', body)
  }

}
