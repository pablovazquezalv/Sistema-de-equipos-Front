import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Jugador } from 'src/app/Interfaces/jugador.interface';
import { EquipoService } from 'src/app/Services/equipo.service';
import { JugadorService } from 'src/app/Services/jugador.service';

@Component({
  selector: 'app-administrar-jugadores',
  templateUrl: './administrar-jugadores.component.html',
  styleUrls: ['./administrar-jugadores.component.css']
})
export class AdministrarJugadoresComponent implements OnInit {

  form: FormGroup;
  jugadores: Jugador[] = [];
  jugadoresSeleccionados: number[] = [];
  id:number = 0;

  public apiFailed = false;

  constructor(private fb: FormBuilder, private equipoService: EquipoService, private jugadorService: JugadorService, private route: ActivatedRoute, private router: Router)
  {
    this.form = this.fb.group({
      nombre: [''],
      equipo: [''],
    });
  }

  ngOnInit(): void {
    this.route.params.pipe(catchError(error => of({ id: null }))).subscribe(params => {this.id = params['id']});
    this.getJugadores();
  }

  getJugadores()
  {
    this.jugadorService.getJugadores().subscribe(data => {this.jugadores = data; console.log(this.jugadores)});
  }

  guardarEnArreglo(id: number) {
    if (!this.jugadoresSeleccionados.includes(id)) {
      this.jugadoresSeleccionados.push(id);
    }
    else {
        const index = this.jugadoresSeleccionados.indexOf(id);
        this.jugadoresSeleccionados.splice(index, 1);
    }
  }


  onSubmit()
  {
    this.equipoService.agregarJugadoresEquipo(this.jugadoresSeleccionados, this.id).subscribe(data => {
      console.log(data); 
      this.router.navigate(['/equipo/ver']);
    }, error => {
      this.apiFailed = true;
    });
  }

  onAnimationEnd()
  {
    this.apiFailed = false;
  }
}
