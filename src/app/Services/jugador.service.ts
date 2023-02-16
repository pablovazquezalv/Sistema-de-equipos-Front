import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { Jugador } from '../Interfaces/jugador.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  
  private jugadores_url =environment.urlapi+'/jugadores';
  

  constructor(private http:HttpClient) 
  {
    
  }

  getJugadores(): Observable<Jugador[]> 
{
  return this.http.get<Jugador[]>(this.jugadores_url)
  .pipe(
    retry(3),
    catchError(this.handleError)
  );
}

addJugador(jugador: Jugador):Observable<Jugador>
{
  return this.http.post<Jugador>(this.jugadores_url,jugador)
  .pipe(
    catchError(this.handleError)
  );
}

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
