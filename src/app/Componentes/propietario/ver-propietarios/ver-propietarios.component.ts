import { Component,Injectable } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Propietario } from 'src/app/Interfaces/propietario.interface';
import { PropietarioService } from 'src/app/Services/propietario.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/Services/shared-service.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-ver-propietarios',
  templateUrl: './ver-propietarios.component.html',
  styleUrls: ['./ver-propietarios.component.css']
})
@Injectable()
export class VerPropietariosComponent implements OnInit {

  propietarios: Propietario[] = [];
  id: number =0 ;
  constructor(private userService: UserService,private sharedService: SharedServiceService,private propietarioService: PropietarioService,private router:Router){ }
  
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
    this.getPropietarios();
  }

  getPropietarios() {
    this.propietarioService.getPropietarios().subscribe(data => this.propietarios = data);
  }

  crearPropietario()
  {
    this.router.navigate(['propietario/crear'])
  }

  editarPropietario(id: number)
  {
    this.router.navigate(['propietario/editar',id])
  }

  deletePropietario(id: number)
  {
    if (confirm("¿Está seguro de eliminar el propietario?"))
    {
      this.propietarioService.eliminarPropietario(id).subscribe(response => {location.reload()}, error => console.log(error));
    }
  }
}
