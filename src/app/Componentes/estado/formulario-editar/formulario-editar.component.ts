import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Estado } from 'src/app/Interfaces/estado.interface';
import { EstadoService } from 'src/app/Services/estado.service';
@Component({
  selector: 'app-formulario-editar',
  templateUrl: './formulario-editar.component.html',
  styleUrls: ['./formulario-editar.component.css']
})
export class FormularioEditarComponent {
  form: FormGroup;
  showError: boolean = false;

  id: number = 0;
  estado?: Estado;

  constructor(private estadoService: EstadoService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required]
    });

  }
    ngOnInit(): void {
    this.route.params.pipe(catchError(error => of({ id: null }))).subscribe(params => {this.id = params['id']});
    this.getEstado();
  }

  getEstado() {
    this.estadoService.mostrarUnico(this.id).subscribe(estado => {this.estado = estado; this.form.patchValue(estado)});
  }

  onSubmit(estado: Estado) 
  {
    this.estadoService.actualizarEstado(estado, this.id).subscribe(response => {
      console.log(response); this.router.navigate(['estados/ver'], 
      { queryParams: { showMessage: true, message: 'Persona modificada con exito.' } });},
      error => {console.log(error); this.showError = true;});
    
  }

}
