import { Component, Injectable, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Equipo } from 'src/app/Interfaces/equipo.interface';
import { EquipoService } from 'src/app/Services/equipo.service';
import { Router } from '@angular/router';
import { Estado } from 'src/app/Interfaces/estado.interface';
import { EstadoService } from 'src/app/Services/estado.service';
import { Propietario } from 'src/app/Interfaces/propietario.interface';
import { PropietarioService } from 'src/app/Services/propietario.service';
@Component({
  selector: 'app-formulario-crear',
  templateUrl: './formulario-crear.component.html',
  styleUrls: ['./formulario-crear.component.css']
})

@Injectable()
export class FormularioCrearComponent implements OnInit{
estados: Estado[] = [];
propietarios: Propietario[] = [];
form: FormGroup;
equipo?:Equipo;

constructor(private propietarioService: PropietarioService,private estadoService: EstadoService,private fb: FormBuilder,private equipoService: EquipoService,private router:Router)
{
  this.form = this.fb.group({
    nombre:  ['',Validators.required],
    division:  ['',Validators.required],
    campeonatos:  ['',Validators.required],
    estado:  ['',Validators.required],
    propietario:  ['',Validators.required],
  })
}
ngOnInit()
{
  this.getEstados();
  this.getPropietarios();
}


getEstados() 
{
  this.estadoService.getEstados().subscribe(data => this.estados = data);
}

getPropietarios() 
{
  this.propietarioService.getPropietarios().subscribe(data => this.propietarios = data);
}

onSubmit(values: Equipo)
{
  this.equipoService.addEquipo(values).subscribe();
  //this.router.navigate(['equipo/ver'])
}

}
