import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-propietarios',
  templateUrl: './ver-propietarios.component.html',
  styleUrls: ['./ver-propietarios.component.css']
})
export class VerPropietariosComponent {

  constructor(private router:Router)
  {
    
  }
  ngOnInit()
  {
     
  }

  crearPropietario()
  {
    this.router.navigate(['propietario/crear'])
  }

  editarPropietario()
  {
    this.router.navigate(['propietario/editar'])
  }

}
