import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-equipos',
  templateUrl: './ver-equipos.component.html',
  styleUrls: ['./ver-equipos.component.css']
})
export class VerEquiposComponent {
  constructor(private router:Router)
  {
  
  }
  
  ngOnInit()
  {
  
  }
  
  crearEquipo()
  {
    this.router.navigate(['equipo/crear'])
  }

  editarEquipo()
  {
    this.router.navigate(['equipo/editar'])
  }

}
