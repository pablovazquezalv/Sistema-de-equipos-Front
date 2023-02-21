import { Component,Injectable } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Propietario } from 'src/app/Interfaces/propietario.interface';
import { PropietarioService } from 'src/app/Services/propietario.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/Services/shared-service.service';


@Component({
  selector: 'app-ver-propietarios',
  templateUrl: './ver-propietarios.component.html',
  styleUrls: ['./ver-propietarios.component.css']
})
@Injectable()
export class VerPropietariosComponent implements OnInit {

  propietarios: Propietario[] = [];
  id: number =0 ;
  constructor(private sharedService: SharedServiceService,private propietarioService: PropietarioService,private router:Router){ }
  
  ngOnInit()
  {
    
    const id = localStorage.getItem('role');
    if (id)
     {
      this.sharedService.setId(Number(id));
    }
    this.id = this.sharedService.getId();
    console.log(this.id);
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
