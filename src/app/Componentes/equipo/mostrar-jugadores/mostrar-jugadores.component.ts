import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Jugador } from 'src/app/Interfaces/jugador.interface';
import { EquipoService } from 'src/app/Services/equipo.service';

@Component({
  selector: 'app-mostrar-jugadores',
  templateUrl: './mostrar-jugadores.component.html',
  styleUrls: ['./mostrar-jugadores.component.css']
})
export class MostrarJugadoresComponent implements OnInit {
  jugadores: Jugador[] = [];
  id: number = 0;

  constructor(private equipoService: EquipoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(catchError(error => of({ id: null }))).subscribe(params => {this.id = params['id']});
    this.getJugadores(this.id);
  }

  getJugadores(id: number)
  {
    this.equipoService.mostrarJugadoresEquipo(id).subscribe(data => this.jugadores = data);
  }
}
