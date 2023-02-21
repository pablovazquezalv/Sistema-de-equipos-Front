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

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    const id = localStorage.getItem('id')
    let roles = 0;
    if (id)
    {
      const idNumber = parseInt(id, 10); 
      this.userService.mostrarUnico(idNumber).subscribe(user => 
      {
        console.log(user); //datos del usuario
        roles = user.role; 
        console.log("soy user_role dentro: " + roles); 
        //el valor del rol
        
      });
      console.log("soy user_role afuera: " + roles);
      const expectedRole =  route.data['expectedRole'];
      console.log(expectedRole)
      if (roles === expectedRole) 
      {
        return true;
      } else
      {
       alert("No Tienes Autorizacion"); 
       this.router.navigate(['/']);
      }
    } 
    else{
      alert("No tienes id "); 
      this.router.navigate(['/login']);
      return false;
    } 
}}
  