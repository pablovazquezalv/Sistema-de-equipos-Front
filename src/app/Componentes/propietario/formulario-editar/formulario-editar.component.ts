import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Propietario } from 'src/app/Interfaces/propietario.interface';
import { PropietarioService } from 'src/app/Services/propietario.service';
@Component({
  selector: 'app-formulario-editar',
  templateUrl: './formulario-editar.component.html',
  styleUrls: ['./formulario-editar.component.css']
})
export class FormularioEditarComponent {
  form: FormGroup;
  showError: boolean = false;

  id: number = 0;
  propietario?: Propietario;

  constructor(private propietarioService: PropietarioService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      nombre:  ['',Validators.required],
      ap_paterno:  ['',Validators.required],
      ap_materno:  ['',Validators.required],
      sexo:  ['',Validators.required],
      f_nac:  ['',Validators.required],
    })

  }
    ngOnInit(): void {
    this.route.params.pipe(catchError(error => of({ id: null }))).subscribe(params => {this.id = params['id']});
    this.getPropietario();
  }

  getPropietario() {
    this.propietarioService.mostrarUnico(this.id).subscribe(propietario => {this.propietario = propietario; this.form.patchValue(propietario)});
  }

  onSubmit(propietario: Propietario) 
  {
    this.propietarioService.actualizarPropietario(propietario, this.id).subscribe(response => {
      console.log(response); this.router.navigate(['propietarios/ver'], 
      { queryParams: { showMessage: true, message: 'Persona modificada con exito.' } }); 
      this.router.navigate(['propietario/ver']);},
      error => {console.log(error); this.showError = true;});
  }
}
