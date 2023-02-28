import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/Interfaces/equipo.interface';
import { EquipoService } from 'src/app/Services/equipo.service';
import { OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/Services/shared-service.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-ver-equipos',
  templateUrl: './ver-equipos.component.html',
  styleUrls: ['./ver-equipos.component.css']
})
export class VerEquiposComponent implements OnInit{
  id: number = 0;
  equipos: Equipo[] = [];

  constructor(private equipoService: EquipoService,private userService: UserService,private sharedService: SharedServiceService,private router:Router) { }
  
  ngOnInit(): void
  {
    this.userService.revisarToken().subscribe((data:any) => {
      this.id = data.role;
    }, error => console.log(error));
    
    this.getEquipos();
  }

  getEquipos() {
    this.equipoService.getEquipos().subscribe(data => this.equipos = data);
  }

  isSessionActive() 
  {
    return !!localStorage.getItem('token');
  }  

  
  crearEquipo()
  {
    this.router.navigate(['equipo/crear'])
  }

  mostrarJugadores(id: number)
  {
    this.router.navigate(['equipo/jugadores/',id])
  }

  administrarJugadores(id: number)
  {
    this.router.navigate(['equipo/administrar-jugadores/',id])
  }

  eliminarJugadores(id: number)
  {
    this.router.navigate(['equipo/eliminar-jugadores/',id])
  }

  editarEquipo(id: number)
  {
    this.router.navigate(['equipo/editar',id])
  }

  deleteEquipo(id: number)
  {
    if (confirm("¿Está seguro de eliminar al equipo?"))
    {
      this.equipoService.eliminarEquipo(id).subscribe(response => {location.reload()}, error => console.log(error));
    }
  }
}
