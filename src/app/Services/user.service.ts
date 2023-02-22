import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError,map } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { User } from '../Interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user_url =environment.urlapi+'/register';
  private login_url =environment.urlapi+'/login';
  private log_out_url =environment.urlapi+'/logout';

  private admin_url = environment.urlapi+ '/admin';
  private user_rl =environment.urlapi+ '/user';
  
  constructor(private http:HttpClient) { }
  //Gestión de cuentas
  addUser(user: User):Observable<User> //Register
  {
    return this.http.post<User>(this.user_url, user)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  login(user: User)
  {
      return this.http.post<User>(this.login_url, user)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  logout()
  {
    return this.http.post(this.log_out_url, null)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  //Revisar Token Existente
  revisarToken()
  {
    const token = localStorage.getItem('token');

    return this.http.post(environment.urlapi + "/auth/verificarToken", token)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  //Funciones de Administrador
  getUsers(): Observable<User[]> 
  {
    return this.http.get<User[]>(this.admin_url)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  actualizarEstado(user: User, id: number)
  {
    return this.http.put<User>(this.admin_url + '/status/' + id, user)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  
  actualizarRol(user: User, id: number)
  {
    return this.http.put<User>(this.admin_url + '/rol/' + id, user)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  
  deleteUser(id: number)
  {
    return this.http.delete(this.admin_url + '/' + id)
    .pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  //Funciones de Usuario
  mostrarUnico(id: number)
  {
    return this.http.get<User>(this.user_rl + '/' + id)
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
