import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  respuesta:boolean = false;
  id: number = 0;
  constructor(private usuarioService: UserService,private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token')

    this.usuarioService.revisarToken()
    .subscribe(
      data => {
        console.log(data);
        this.respuesta = true;
      },
      error => {
        console.log(error);
        alert("Tienes que iniciar sesion!"); 
        this.respuesta = false;
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    );

    if(this.respuesta == true)
    {
      return true;
    }

    else
    {
      //alert("Tienes que iniciar sesion!"); 
      //this.router.navigate(['/login']);
      return false;
    }
  }
}
