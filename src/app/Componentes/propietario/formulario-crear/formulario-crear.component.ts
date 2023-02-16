import { Component,Injectable } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Propietario } from 'src/app/Interfaces/propietario.interface';
import { PropietarioService } from 'src/app/Services/propietario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-crear',
  templateUrl: './formulario-crear.component.html',
  styleUrls: ['./formulario-crear.component.css']
})
@Injectable()
export class FormularioCrearComponent {
  form: FormGroup;
propietario?:Propietario;

constructor(private fb: FormBuilder,private propietarioService: PropietarioService,private router:Router)
{
  this.form = this.fb.group({
    nombre:  ['',Validators.required],
    ap_paterno:  ['',Validators.required],
    ap_materno:  ['',Validators.required],
    sexo:  ['',Validators.required],
    f_nac:  ['',Validators.required],
  })
}

onSubmit(values: Propietario)
{
  this.propietarioService.addPropietario(values).subscribe();
  //this.router.navigate(['equipo/ver'])
}

}
