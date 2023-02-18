import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Jugador } from 'src/app/Interfaces/jugador.interface';
import { JugadorService } from 'src/app/Services/jugador.service';
import { Equipo } from 'src/app/Interfaces/equipo.interface';
import { EquipoService } from 'src/app/Services/equipo.service';

@Component({
  selector: 'app-formulario-editar',
  templateUrl: './formulario-editar.component.html',
  styleUrls: ['./formulario-editar.component.css']
})
export class FormularioEditarComponent {
  form: FormGroup;
  showError: boolean = false;
  equipos: Equipo[] = [];
  id: number = 0;
  jugador?: Jugador;

  constructor(private equipoService: EquipoService,private jugadorService: JugadorService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      nombre:  ['',Validators.required],
      ap_paterno:  ['',Validators.required],
      ap_materno:  ['',Validators.required],
      sexo:  ['',Validators.required],
      f_nac:  ['',Validators.required],
      equipo:  ['',Validators.required],
    });
  }

  ngOnInit(): void
  {
    this.route.params.pipe(catchError(error => of({ id: null }))).subscribe(params => {this.id = params['id']});
    this.getJugador();
    this.getEquipos();
  }

  getJugador() {
    this.jugadorService.mostrarUnico(this.id).subscribe(jugador=> {this.jugador = jugador; this.form.patchValue(jugador)});
  }

  getEquipos()
  {
    this.equipoService.getEquipos().subscribe(data => this.equipos = data);
    
  }
  onSubmit(propietario: Jugador) 
  {
    this.jugadorService.actualizarJugador(propietario, this.id).subscribe(response => {
      console.log(response); this.router.navigate(['jugadores/ver'], 
      { queryParams: { showMessage: true, message: 'Persona modificada con exito.' } });},
      error => {console.log(error); this.showError = true;});
  }
}
