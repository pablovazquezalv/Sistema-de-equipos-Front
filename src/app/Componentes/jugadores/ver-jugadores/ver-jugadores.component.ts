import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/Interfaces/jugador.interface';
import { JugadorService } from 'src/app/Services/jugador.service';
import { OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/Services/shared-service.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-ver-jugadores',
  templateUrl: './ver-jugadores.component.html',
  styleUrls: ['./ver-jugadores.component.css']
})
export class VerJugadoresComponent implements OnInit{
  jugadores: Jugador[] = [];
  id: number = 0;
  constructor(private userService: UserService,private jugadorService: JugadorService,private sharedService: SharedServiceService,private router:Router){ }
  
  ngOnInit()
  {
    const id = localStorage.getItem('id');
    
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
    this.getJugadores();
  }

  isSessionActive() 
  {
    return !!localStorage.getItem('token');
  }  

  getJugadores()
  {
    this.jugadorService.getJugadores().subscribe(data => this.jugadores = data);  
  }

  crearJugador()
  {
    this.router.navigate(['jugadores/crear'])
  }

  editarJugador(id: number)
  {
    this.router.navigate(['jugadores/editar',id])
  }

  deleteJugador(id: number)
  {
    if (confirm("¿Está seguro de eliminar el jugador?"))
    {
      this.jugadorService.eliminarJugador(id).subscribe(response => {location.reload()}, error => console.log(error));
    }
  }
}
