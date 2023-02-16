import { Component,Injectable } from '@angular/core';
import { FormBuilder,FormGroup,Validators, ReactiveFormsModule } from '@angular/forms';
import { Jugador } from 'src/app/Interfaces/jugador.interface';
import { JugadorService } from 'src/app/Services/jugador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-crear',
  templateUrl: './formulario-crear.component.html',
  styleUrls: ['./formulario-crear.component.css']
})

@Injectable()
export class FormularioCrearComponent {
  form: FormGroup;
  jugador?:Jugador;
  
  constructor(
  private fb: FormBuilder,
  private jugadorService: JugadorService,
  private router:Router)
  {
    this.form = this.fb.group({
      nombre:  ['',Validators.required],
      ap_paterno:  ['',Validators.required],
      ap_materno:  ['',Validators.required],
      sexo:  ['',Validators.required],
      f_nac:  ['',Validators.required],
      equipo:  ['',Validators.required],
    })
  }
  
  onSubmit(values: Jugador)
  {
    this.jugadorService.addJugador(values).subscribe();
    console.log("se envio")
    
  }


}
