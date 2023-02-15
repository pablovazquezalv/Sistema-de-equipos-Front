import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs';
import { Equipo } from '../Interfaces/equipo.interface';
@Injectable({
  providedIn: 'root'
})
export class EquipoService 
{

  private equipo_url ='http://127.0.0.1:8000/api/equipos';

  constructor(private http:HttpClient) { }

getEquipos(): Observable<Equipo[]>
{
  return this.http.get<Equipo[]>(this.equipo_url)
}

}
