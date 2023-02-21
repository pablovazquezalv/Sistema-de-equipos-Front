import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuardGuard implements CanActivate {

  id: number = 0;
  constructor(private router:Router,private userService: UserService)
  {

  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.userService.mostrarUnico(this.id).subscribe(user => {
      console.log(user)});
    
    if (localStorage.getItem('role') == '2')
    {
      return true; 
    }
    else
    {
      alert("no estas autorizado!"); 
      this.router.navigate(['/equipo/ver']);
      return false;
    } 
  }
  
}
