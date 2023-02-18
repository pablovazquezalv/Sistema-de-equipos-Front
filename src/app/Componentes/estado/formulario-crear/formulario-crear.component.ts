import { Component,Injectable } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Estado } from 'src/app/Interfaces/estado.interface';
import { EstadoService } from 'src/app/Services/estado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-crear',
  templateUrl: './formulario-crear.component.html',
  styleUrls: ['./formulario-crear.component.css']
})
export class FormularioCrearComponent {
  form: FormGroup;
  estado?:Estado;

  public apiFailed: boolean = false;

  constructor(private fb: FormBuilder,private estadoService: EstadoService,private router:Router)
  {
    this.form = this.fb.group({
      nombre:  ['',Validators.required],
    })
  }

  onSubmit(values: Estado)
  {
    this.estadoService.addEstado(values).subscribe(response => { this.router.navigate(['estados/ver']); }, error => { this.apiFailed = true; });
  }

  onAnimationEnd(): void {
    this.apiFailed = false;
  }
}
