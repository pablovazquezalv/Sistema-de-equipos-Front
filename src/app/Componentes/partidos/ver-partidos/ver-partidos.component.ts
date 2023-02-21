import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Partido } from 'src/app/Interfaces/partido.interface';
import { PartidoService } from 'src/app/Services/partido.service';
import { OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/Services/shared-service.service';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-ver-partidos',
  templateUrl: './ver-partidos.component.html',
  styleUrls: ['./ver-partidos.component.css']
})
export class VerPartidosComponent implements OnInit{
  id :number = 0;
  partidos: Partido[] = [];
  constructor(private userService: UserService,private sharedService: SharedServiceService,private partidoService: PartidoService,private router:Router){ }
  
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
    this.getPartidos();
  }

  getPartidos() 
  {
    this.partidoService.getPartidos().subscribe(data => this.partidos = data);  
  }

  crearPartido()
  {
    this.router.navigate(['partidos/crear'])
  }

  editarPartido(id: number)
  {
    this.router.navigate(['partidos/editar',id])
  }

  deletePartido(id: number)
  {
    if (confirm("¿Está seguro de eliminar el estado?"))
    {
      this.partidoService.eliminarPartido(id).subscribe(response => {location.reload()}, error => console.log(error));
    }
  }
}
