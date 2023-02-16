import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-estados',
  templateUrl: './ver-estados.component.html',
  styleUrls: ['./ver-estados.component.css']
})
export class VerEstadosComponent {

  constructor(private router:Router){ }
  ngOnInit()
  {
   
  }
  crearEstado()
  {
    this.router.navigate(['estados/crear'])
  }

  editarEstado()
  {
    this.router.navigate(['estados/editar'])
  }
}
