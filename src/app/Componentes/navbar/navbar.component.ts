import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { SharedServiceService } from 'src/app/Services/shared-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  id: number = 0;
  username = localStorage.getItem('name');
  
  constructor(private router:Router, private userService: UserService,private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.userService.revisarToken().subscribe((data:any) => {
      this.id = data.role;
    }, error => console.log(error));
    
    this.getUsuario();
  }

  getUsuario() { }
  
  isSessionActive() 
  {
    return !!localStorage.getItem('token');
  }  

  //Logueo
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
