import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { Propietario } from '../Interfaces/propietario.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  private propietario_url =environment.urlapi+'/propietarios';
  
  constructor(private http:HttpClient) { }

  //CRUD
  getPropietarios(): Observable<Propietario[]> 
  {
    return this.http.get<Propietario[]>(this.propietario_url)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  addPropietario(propietario: Propietario):Observable<Propietario>
  {
    return this.http.post<Propietario>(this.propietario_url, propietario)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  eliminarPropietario(id: number)
  {
    return this.http.delete<Propietario>(this.propietario_url + '/' + id)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  actualizarPropietario(propietario: Propietario, id: number)
  {
    return this.http.put<Propietario>(this.propietario_url + '/' + id, propietario)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  mostrarUnico(id: number)
  {
    return this.http.get<Propietario>(this.propietario_url + '/' + id)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  //Error handling
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
