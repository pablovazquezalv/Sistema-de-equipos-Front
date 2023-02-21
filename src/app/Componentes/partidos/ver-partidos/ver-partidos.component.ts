import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Partido } from 'src/app/Interfaces/partido.interface';
import { PartidoService } from 'src/app/Services/partido.service';
import { OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/Services/shared-service.service';
@Component({
  selector: 'app-ver-partidos',
  templateUrl: './ver-partidos.component.html',
  styleUrls: ['./ver-partidos.component.css']
})
export class VerPartidosComponent implements OnInit{
  id :number = 0;
  partidos: Partido[] = [];
  constructor(private sharedService: SharedServiceService,private partidoService: PartidoService,private router:Router){ }
  
  ngOnInit()
  {
    
    this.id = this.sharedService.getId();
    console.log(this.id);
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
