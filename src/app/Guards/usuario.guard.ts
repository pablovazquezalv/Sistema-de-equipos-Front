import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  
  id: number = 0;
  constructor(private usuarioService: UserService,private router:Router)
  {

  }


  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token')
    if (token)
    {
      return true; 
    }else{
    alert("Tienes que iniciar sesion!"); 
    this.router.navigate(['/login']);
    return false;
    }
    
    
    
    
  }

  
  
}
