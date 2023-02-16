import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-jugadores',
  templateUrl: './ver-jugadores.component.html',
  styleUrls: ['./ver-jugadores.component.css']
})
export class VerJugadoresComponent {
  
  constructor(private router:Router){ }
  ngOnInit()
  {
   
  }
  crearJugador()
  {
    this.router.navigate(['jugadores/crear'])
  }

  editarJugador()
  {
    this.router.navigate(['jugadores/editar'])
  }
}
