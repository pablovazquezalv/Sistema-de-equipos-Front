import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from 'src/app/Interfaces/jugador.interface';
import { JugadorService } from 'src/app/Services/jugador.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-jugadores',
  templateUrl: './ver-jugadores.component.html',
  styleUrls: ['./ver-jugadores.component.css']
})
export class VerJugadoresComponent implements OnInit{
  jugadores: Jugador[] = [];

  constructor(private jugadorService: JugadorService,private router:Router){ }

  ngOnInit()
  {
    this.getJugadores();
  }

  getJugadores()
  {
    this.jugadorService.getJugadores().subscribe(data => this.jugadores = data);  
  }

  crearJugador()
  {
    this.router.navigate(['jugadores/crear'])
  }

  editarJugador(id: number)
  {
    this.router.navigate(['jugadores/editar',id])
  }

  deleteJugador(id: number)
  {
    if (confirm("¿Está seguro de eliminar el jugador?"))
    {
      this.jugadorService.eliminarJugador(id).subscribe(response => {location.reload()}, error => console.log(error));
    }
  }
}
