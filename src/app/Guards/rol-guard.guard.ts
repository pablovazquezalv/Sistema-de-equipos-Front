import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { SharedServiceService } from '../Services/shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuardGuard implements CanActivate {

  id?: number;
  rol?:number;

  constructor(private router:Router,private userService: UserService,private sharedService: SharedServiceService) { }

  async canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Promise<boolean | UrlTree> 
  {
    const roles = route.data['expectedRole'];
    let rol = this.rol;

    try 
    {
      const data: any = await this.userService.revisarToken().toPromise();
      rol = data.role;
  
      if(rol)
      {
        for (let i = 0; i < roles.length; i++) 
        {
          if (roles[i] == rol) {
            return true;
          }
        }

        alert("No tienes permisos para acceder a esta pagina");
        return false;
      } 
      
      else 
      {
        return false;
      }
    } 

    catch(error) 
    {
      alert("No tienes permisos para acceder a esta pagina");
      console.log(error);
      return false;
    }
  }
}
