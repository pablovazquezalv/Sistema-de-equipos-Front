import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Estado } from 'src/app/Interfaces/estado.interface';
import { EstadoService } from 'src/app/Services/estado.service';
import { OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/Services/shared-service.service';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-ver-estados',
  templateUrl: './ver-estados.component.html',
  styleUrls: ['./ver-estados.component.css']
})
export class VerEstadosComponent implements OnInit{
  id: number = 0;
  estados: Estado[] = [];
  
  


  constructor(private estadoService: EstadoService,private sharedService:SharedServiceService,private userService:UserService,private router:Router){ }
  ngOnInit(): void
  { const id = localStorage.getItem('id');
    
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
    this.getEstados();
  }

  getEstados() 
  {
    this.estadoService.getEstados().subscribe(data => this.estados = data);  
  }
  
  crearEstado()
  {
    this.router.navigate(['estados/crear'])
  }

  editarEstado(id: number)
  {
    this.router.navigate(['estados/editar',id])
  }

  deleteEstado(id: number)
  {
    if (confirm("¿Está seguro de eliminar el estado?"))
    {
      this.estadoService.eliminarEstado(id).subscribe(response => {location.reload()}, error => console.log(error));
    }
  }
}
