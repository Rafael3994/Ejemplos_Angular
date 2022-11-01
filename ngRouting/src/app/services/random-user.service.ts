import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IRandomContact, Results } from '../models/randomUser';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(`Ha ocurrido un error: ${error.error}`)
    } else {
      console.error(`Error en el backend: ${error.status}. El error es: ${error.error}`)
    }

    return throwError(() => new Error('Algo ha salido mal'))
  }

  obtenerRandomContact(): Observable<Results> {
    return this.http.get<Results>('https://randomuser.me/api').pipe(
      retry(2), // Nº de reintentos de peticiones
      catchError(this.handleError) // sacmos el error si algo falla
    );
  }

  obtenerRandomContacts(n: number, sexo?: string): Observable<Results> {
    let params: HttpParams = new HttpParams().set("results", n)
    if (sexo) {
      params = params.append('gender', sexo);
    }

    return this.http.get<Results>('https://randomuser.me/api', { params: params }).pipe(
      retry(2), // Nº de reintentos de peticiones
      catchError(this.handleError) // sacamos el error si algo falla
    );
  }
}
