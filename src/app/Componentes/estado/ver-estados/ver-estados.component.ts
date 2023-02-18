import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Estado } from 'src/app/Interfaces/estado.interface';
import { EstadoService } from 'src/app/Services/estado.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-estados',
  templateUrl: './ver-estados.component.html',
  styleUrls: ['./ver-estados.component.css']
})
export class VerEstadosComponent implements OnInit{

  estados: Estado[] = [];

  constructor(private estadoService: EstadoService,private router:Router){ }
  
  ngOnInit()
  {
    this.getEstados();
  }

  getEstados() 
  {
    this.estadoService.getEstados().subscribe(data => this.estados = data);  
  }
  
  crearEstado()
  {
    this.router.navigate(['estados/crear'])
  }

  editarEstado(id: number)
  {
    this.router.navigate(['estados/editar',id])
  }

  deleteEstado(id: number)
  {
    if (confirm("¿Está seguro de eliminar el estado?"))
    {
      this.estadoService.eliminarEstado(id).subscribe(response => {location.reload()}, error => console.log(error));
    }
  }
}
