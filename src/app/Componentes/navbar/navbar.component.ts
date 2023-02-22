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
  
    const id = localStorage.getItem('id')
    if (id)
    {
      const idNumber = parseInt(id, 10); // Parseo a número entero con base 10
        this.userService.mostrarUnico(idNumber).subscribe(user => {
        console.log(user);
        const user_role = user.role; // Obtener el valor del campo role del objeto de usuario
        console.log("soy user_role dentro: " + user_role);
        this.id = user_role;
        // Actualizar el valor del ID del usuario en el servicio compartido
      });
       
    }
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
