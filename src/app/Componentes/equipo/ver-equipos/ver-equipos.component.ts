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
  usuario: any;
  


  constructor(private equipoService: EquipoService,private userService: UserService,private sharedService: SharedServiceService,private router:Router)
  {

    this.id = this.sharedService.getId();
    console.log(this.id);
   }
  
  ngOnInit(): void
  {
   this.id = this.sharedService.getId();
   console.log(this.id);
    
    /*this.userService.mostrarUnico(this.id).subscribe((data) => {
      this.usuario = data;
      console.log(this.usuario);
    });*/
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

  //Modal
  openModal()
  {
    
  }
}
