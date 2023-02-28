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
    this.userService.revisarToken().subscribe((data:any) => {
      this.id = data.role;
    }, error => console.log(error));
    
    this.getPropietarios();
  }

  isSessionActive() 
  {
    return !!localStorage.getItem('token');
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
