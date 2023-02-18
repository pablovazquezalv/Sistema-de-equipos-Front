import { Component,Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Partido } from 'src/app/Interfaces/partido.interface';
import { PartidoService } from 'src/app/Services/partido.service';
import { Router } from '@angular/router';
import { Equipo } from 'src/app/Interfaces/equipo.interface';
import { EquipoService } from 'src/app/Services/equipo.service';

@Component({
  selector: 'app-formulario-crear-partido',
  templateUrl: './formulario-crear-partido.component.html',
  styleUrls: ['./formulario-crear-partido.component.css']
})
export class FormularioCrearPartidoComponent implements OnInit{
  equipos: Equipo[] = [];
  form: FormGroup;
  partido?:Partido;

  public apiFailed: boolean = false;

  constructor(private equiposService: EquipoService,private fb: FormBuilder,private partidoService: PartidoService,private router:Router)
  {
    this.form = this.fb.group({
      local:  ['',Validators.required],
      visitante:  ['',Validators.required],
      fecha:  ['',Validators.required],
      hora:  ['',Validators.required],
    })
  }
  ngOnInit()
  {
    this.getEquipos();
  }

  getEquipos() 
  {
    this.equiposService.getEquipos().subscribe(data => this.equipos = data);
  }

  onSubmit(values: Partido)
  {
    this.partidoService.addPartidos(values).subscribe(response => {console.log(response); this.router.navigate(['/partidos/ver']);}, error => { this.apiFailed = true; });
  }

  onAnimationEnd(): void {
    this.apiFailed = false;
  }
}
