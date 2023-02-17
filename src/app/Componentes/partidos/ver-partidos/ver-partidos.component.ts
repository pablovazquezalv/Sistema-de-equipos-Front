import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Partido } from 'src/app/Interfaces/partido.interface';
import { PartidoService } from 'src/app/Services/partido.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-ver-partidos',
  templateUrl: './ver-partidos.component.html',
  styleUrls: ['./ver-partidos.component.css']
})
export class VerPartidosComponent implements OnInit{

  partidos: Partido[] = [];
  constructor(private partidoService: PartidoService,private router:Router){ }
  
  ngOnInit()
  {
    this.getPartidos();
  }

  getPartidos() 
  {
    this.partidoService.getPartidos().subscribe(data => this.partidos = data);  
  }
  crearPartido()
  {
    this.router.navigate(['partidos/crear'])
  }

  editarPartido()
  {
    this.router.navigate(['partidos/editar'])
  }

}
