import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  id: number = 0;
  status: number = 0;
  
  constructor(private usuarioService: UserService,private router:Router) { }

  async canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Promise<boolean | UrlTree>
  {
    try
    {
      const data: any = await this.usuarioService.revisarToken().toPromise();
      this.status = data.status;

      if (this.status == 0) 
      {
        alert("Tu cuenta está desactivada, contacta con el administrador.");
        localStorage.clear();
        this.router.navigate(['/login']);
        return false;
      } 
      else 
      {
        return true;
      }
    }
    catch(error)
    {
      console.log(error);
      alert("Tienes que iniciar sesión."); 
      localStorage.clear();
      this.router.navigate(['/login']);
      return false;
    }
  }
}
