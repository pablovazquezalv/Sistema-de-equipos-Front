import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/Interfaces/equipo.interface';
import { EquipoService } from 'src/app/Services/equipo.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-equipos',
  templateUrl: './ver-equipos.component.html',
  styleUrls: ['./ver-equipos.component.css']
})
export class VerEquiposComponent implements OnInit{
  equipos: Equipo[] = [];


  constructor(private equipoService: EquipoService,private router:Router){ }
  
  ngOnInit()
  {
    this.getEquipos();
  }
  

  getEquipos() {
    this.equipoService.getEquipos().subscribe(data => this.equipos = data);
    
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
