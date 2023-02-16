import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { Estado } from '../Interfaces/estado.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private estados_url =environment.urlapi+'/estados';
  

  constructor(private http:HttpClient) 
  {
    
  }

  getEstados(): Observable<Estado[]> 
{
  return this.http.get<Estado[]>(this.estados_url)
  .pipe(
    retry(3),
    catchError(this.handleError)
  );
}
addEstado(estado: Estado):Observable<Estado>
{
  return this.http.post<Estado>(this.estados_url,estado)
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
