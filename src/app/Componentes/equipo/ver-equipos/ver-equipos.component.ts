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

    const id = localStorage.getItem('role');
    if (id)
     {
      this.sharedService.setId(Number(id));
    }
    this.id = this.sharedService.getId();
    console.log(this.id);
    
   }
  
  ngOnInit(): void
  {
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
