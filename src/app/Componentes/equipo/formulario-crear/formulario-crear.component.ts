import { Component, Injectable  } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Equipo } from 'src/app/Interfaces/equipo.interface';
import { EquipoService } from 'src/app/Services/equipo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario-crear',
  templateUrl: './formulario-crear.component.html',
  styleUrls: ['./formulario-crear.component.css']
})

@Injectable()
export class FormularioCrearComponent {
form: FormGroup;
equipo?:Equipo;

constructor(private fb: FormBuilder,private equipoService: EquipoService,private router:Router)
{
  this.form = this.fb.group({
    nombre:  ['',Validators.required],
    division:  ['',Validators.required],
    campeonatos:  ['',Validators.required],
    estado:  ['',Validators.required],
    propietario:  ['',Validators.required],
  })
}

onSubmit(values: Equipo)
{
  this.equipoService.addEquipo(values).subscribe();
  this.router.navigate(['equipo/ver'])
}

}
