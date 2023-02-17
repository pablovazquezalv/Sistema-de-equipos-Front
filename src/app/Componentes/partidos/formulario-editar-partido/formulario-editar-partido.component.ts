import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Partido } from 'src/app/Interfaces/partido.interface';
import { PartidoService } from 'src/app/Services/partido.service';
import { Equipo } from 'src/app/Interfaces/equipo.interface';
import { EquipoService } from 'src/app/Services/equipo.service';
@Component({
  selector: 'app-formulario-editar-partido',
  templateUrl: './formulario-editar-partido.component.html',
  styleUrls: ['./formulario-editar-partido.component.css']
})
export class FormularioEditarPartidoComponent  {
  form: FormGroup;
  showError: boolean = false;
  equipos: Equipo[] = [];
  id: number = 0;
  partido?: Partido;

  constructor(private equiposService: EquipoService,private partidoService: PartidoService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group({
      local:  ['',Validators.required],
      visitante:  ['',Validators.required],
      fecha:  ['',Validators.required],
      hora:  ['',Validators.required],
    })
  }
    ngOnInit(): void {
    this.route.params.pipe(catchError(error => of({ id: null }))).subscribe(params => {this.id = params['id']});
    this.getPartido();
    this.getEquipos();
  }
  getEquipos() 
{
  this.equiposService.getEquipos().subscribe(data => this.equipos = data);
}

  getPartido()
  {
    this.partidoService.mostrarUnico(this.id).subscribe(partido => {this.partido = partido; this.form.patchValue(partido)});
  }

  onSubmit(partido: Partido) 
  {
    this.partidoService.actualizarPartido(partido, this.id).subscribe(response => {
      console.log(response); this.router.navigate(['partidos/ver'], 
      { queryParams: { showMessage: true, message: 'Persona modificada con exito.' } });},
      error => {console.log(error); this.showError = true;});
    
  }
}
