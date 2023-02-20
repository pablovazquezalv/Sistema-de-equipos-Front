import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  username = localStorage.getItem('name');
  
  constructor(private router:Router, private userService: UserService){ }

  ngOnInit() { }
  
  isSessionActive() 
  {
    return !!localStorage.getItem('token');
  }  

  
  

  backToLogin()
  {
    this.router.navigate(['login']);
  }

  backToSignUp()
  {
    this.router.navigate(['sign-up']);
  }

  logout()
  {
    if (confirm ('¿Desea cerrar sesión?'))
    {
      this.userService.logout().subscribe(response => {
        localStorage.clear();
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
      });
    }
  }
  //CRUDS
  equipo()
  {
    this.router.navigate(['equipo/ver']);
  }

  jugadores()
  {
    this.router.navigate(['jugadores/ver']);
  }

  estados()
  {
    this.router.navigate(['estados/ver']);
  }

  propietario()
  {
    this.router.navigate(['propietario/ver']);
  }

  partidos()
  {
    this.router.navigate(['partidos/ver']);
  }

  usuarios()
  {
    this.router.navigate(['usuarios/ver']);
  }
}
