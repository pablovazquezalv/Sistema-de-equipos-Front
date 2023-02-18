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

  editarPartido(id: number)
  {
    this.router.navigate(['partidos/editar',id])
  }

  deletePartido(id: number)
  {
    if (confirm("¿Está seguro de eliminar el estado?"))
    {
      this.partidoService.eliminarPartido(id).subscribe(response => {location.reload()}, error => console.log(error));
    }
  }
}
