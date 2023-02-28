import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { Equipo } from '../Interfaces/equipo.interface';
import { environment } from 'src/environments/environment';
import { Jugador } from '../Interfaces/jugador.interface';

@Injectable({
  providedIn: 'root'
})
export class EquipoService 
{
  private equipo_url = environment.urlapi+'/equipos';
  
  constructor(private http:HttpClient) { }

  //CRUD
  getEquipos(): Observable<Equipo[]> 
  {
    return this.http.get<Equipo[]>(this.equipo_url)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  addEquipo(equipo: Equipo):Observable<Equipo>
  {
    return this.http.post<Equipo>(this.equipo_url, equipo)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  eliminarEquipo(id: number)
  {
    return this.http.delete<Equipo>(this.equipo_url + '/' + id)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  actualizarEquipo(equipo: Equipo, id: number)
  {
    return this.http.put<Equipo>(this.equipo_url + '/' + id, equipo)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  mostrarUnico(id: number)
  {
    return this.http.get<Equipo>(this.equipo_url + '/' + id)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  //Funciones Jugadores
  mostrarJugadoresEquipo(id: number)
  {
    return this.http.get<Jugador[]>(this.equipo_url + '/equipo/' + id)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  agregarJugadoresEquipo(jugadores: number[], id: number)
  {
    const data = {jugadores: jugadores};
    return this.http.put(this.equipo_url + '/jugadores/' + id, data)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  eliminarJugadoresEquipos(jugadores: number[], id: number)
  {
    const data = {jugadores: jugadores};
    return this.http.put(this.equipo_url + '/eliminarJugadores/' + id, data)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  //Error Handling
  private handleError(error: HttpErrorResponse)
  {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
