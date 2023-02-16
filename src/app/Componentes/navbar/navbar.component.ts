import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private router:Router)
  {
  
  }
  
  ngOnInit()
  {
  
  }
  
  backToLogin()
  {
    this.router.navigate(['login'])
  }

  backToSignUp()
  {
    this.router.navigate(['sign-up'])
  }
  
  equipo()
  {
    this.router.navigate(['equipo/ver'])
  }

  jugadores()
  {
    this.router.navigate(['jugadores/ver'])
  }
  estados()
  {
    this.router.navigate(['estados/ver'])
  }
  propietario()
  {
    this.router.navigate(['propietario/ver'])
  }
  partidos()
  {
    this.router.navigate(['partidos/ver'])
  }
}
