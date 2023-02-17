import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Equipo } from 'src/app/Interfaces/equipo.interface';
import { EquipoService } from 'src/app/Services/equipo.service';
import { Propietario } from 'src/app/Interfaces/propietario.interface';
import { PropietarioService } from 'src/app/Services/propietario.service';
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
  equipo?: Equipo;
  estados: Estado[] = [];
propietarios: Propietario[] = [];

  constructor(private propietarioService: PropietarioService,private estadoService: EstadoService,private equipoService: EquipoService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      nombre:  ['',Validators.required],
      division:  ['',Validators.required],
      campeonatos:  ['',Validators.required],
      estado:  ['',Validators.required],
      propietario:  ['',Validators.required],
    })

  }
    ngOnInit(): void {
    this.route.params.pipe(catchError(error => of({ id: null }))).subscribe(params => {this.id = params['id']});
    this.getEquipo();
    
   this.getEstados();
   this.getPropietarios();
  }

  getEquipo() 
  {
    this.equipoService.mostrarUnico(this.id).subscribe(equipo => {this.equipo = equipo; this.form.patchValue(equipo)});
  }

  getEstados() 
{
  this.estadoService.getEstados().subscribe(data => this.estados = data);
}

getPropietarios() 
{
  this.propietarioService.getPropietarios().subscribe(data => this.propietarios = data);
}
  onSubmit(estado: Equipo) 
  {
    this.equipoService.actualizarEquipo(estado, this.id).subscribe(response => {
      console.log(response); this.router.navigate(['estados/ver'], 
      { queryParams: { showMessage: true, message: 'Persona modificada con exito.' } });},
      error => {console.log(error); this.showError = true;});
    
  }

}
