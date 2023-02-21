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
      if (id)
      {
        const idNumber = parseInt(id, 10); 
        this.userService.mostrarUnico(idNumber).subscribe(user => {
          console.log(user);
          this.id = user.role; // Obtener el valor del campo role del objeto de usuario
          console.log("soy user_role dentro: " + this.id);
        });
        const expectedRole =  route.data['expectedRole'];
        console.log(expectedRole)
        console.log("soy user_role afuera: " + this.id);
        
        if (this.id === expectedRole.valor) 
        {
          return true;
        } else
         {
          alert("No Tienes Autorizacion"); 
          this.router.navigate(['/']);

          return false;
        }
         
      } 
    else{
      alert("No tienes id "); 
      this.router.navigate(['/login']);
      return false;
    } 
}}
  