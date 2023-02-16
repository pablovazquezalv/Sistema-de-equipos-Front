import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Login
import { LoginComponent } from './Componentes/login/login.component';
import { SignUpComponent } from './Componentes/sign-up/sign-up.component';
import { MobileCodeComponent } from './Componentes/mobile-code/mobile-code.component';
//Equipo
import { FormularioCrearComponent } from './Componentes/equipo/formulario-crear/formulario-crear.component';
import { VerEquiposComponent } from './Componentes/equipo/ver-equipos/ver-equipos.component';
import { FormularioEditarComponent } from './Componentes/equipo/formulario-editar/formulario-editar.component';
//Jugadores
import { FormularioCrearComponent as FormularioJugador } from './Componentes/jugadores/formulario-crear/formulario-crear.component';
import { VerJugadoresComponent } from './Componentes/jugadores/ver-jugadores/ver-jugadores.component';
import { FormularioEditarComponent as FormularioEditarJugador } from './Componentes/jugadores/formulario-editar/formulario-editar.component';
//Estados
import { FormularioCrearComponent as FormularioEstado } from './Componentes/estado/formulario-crear/formulario-crear.component';
import { VerEstadosComponent } from './Componentes/estado/ver-estados/ver-estados.component';
import { FormularioEditarComponent as FormularioEditarEstado } from './Componentes/estado/formulario-editar/formulario-editar.component';
//Propietarios
import { FormularioCrearComponent as FormularioPropietario} from './Componentes/propietario/formulario-crear/formulario-crear.component';
import { VerPropietariosComponent } from './Componentes/propietario/ver-propietarios/ver-propietarios.component';
import { FormularioEditarComponent as FormularioEditarPropietario } from './Componentes/propietario/formulario-editar/formulario-editar.component';
const routes: Routes = [
//Login
  { path:'login',component:LoginComponent},
{ path:'sign-up',component:SignUpComponent},
{ path:'mobile-code',component:MobileCodeComponent},
//Equipo
{ path:'equipo/ver',component:VerEquiposComponent},
{path:'equipo/crear',component:FormularioCrearComponent},
{path:'equipo/editar',component:FormularioEditarComponent},
//Jugadores
{ path:'jugadores/ver',component:VerJugadoresComponent},
{path:'jugadores/crear',component:FormularioJugador},
{path:'jugadores/editar',component:FormularioEditarJugador},
//Estados
{ path:'estados/ver',component:VerEstadosComponent},
{path:'estados/crear',component:FormularioEstado},
{path:'estados/editar',component:FormularioEditarEstado},
//Propietarios

{ path:'propietario/ver',component:VerPropietariosComponent},
{path:'propietario/crear',component:FormularioPropietario},
{path:'propietario/editar',component:FormularioEditarPropietario}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
