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

  id: number = 0;

  constructor(private router:Router,private userService: UserService,private sharedService: SharedServiceService) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    const id = this.id;

    this.userService.revisarToken()
    .subscribe(
      (data: any) => {
        this.id = data;
      },error => {
        console.log(error);
      }
    );
      
    if(id)
    {
      const idNumber = id; 
      
      this.userService.mostrarUnico(idNumber)
      .subscribe(user => {
        console.log(user); //muestro los datos
        this.sharedService.setId(user.role);
      });

      const rol_id=this.sharedService.getId()
      console.log("shared")
      console.log(this.sharedService.getId())
      const expectedRole =  route.data['expectedRole']; //expectedRole , es el arreglo de roles del path
      console.log(expectedRole)

      if (expectedRole.includes(rol_id.toString())) 
      {
        //this.router.navigate(['/']);
        location.reload();
        return true;
      } 
        
      else
      {
        alert("No Tienes Autorizacion"); 
        this.router.navigate(['/'], {queryParams: { returnUrl: state.url }});
        return false;
      }     
    }

    else
    {
      //alert("No tienes id "); 
      //this.router.navigate(['/login'], {queryParams: { returnUrl: state.url }});
      return false;
    } 
}}
