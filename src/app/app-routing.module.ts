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
import { MostrarJugadoresComponent } from './Componentes/equipo/mostrar-jugadores/mostrar-jugadores.component';
import { AdministrarJugadoresComponent } from './Componentes/equipo/administrar-jugadores/administrar-jugadores.component';
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
//Partidos
import { FormularioCrearPartidoComponent } from './Componentes/partidos/formulario-crear-partido/formulario-crear-partido.component';
import { VerPartidosComponent } from './Componentes/partidos/ver-partidos/ver-partidos.component';
import { FormularioEditarPartidoComponent } from './Componentes/partidos/formulario-editar-partido/formulario-editar-partido.component';
//Usuarios
import { VerUsuariosComponent } from './Componentes/Admin/ver-usuarios/ver-usuarios.component';
import { PageNotFoundComponent } from './Componentes/page-not-found/page-not-found.component';
import { UsuarioGuard } from './Guards/usuario.guard';
import { RolGuardGuard } from './Guards/rol-guard.guard';
const routes: Routes = [
  //Default
  { path:'',redirectTo:'equipo/ver',pathMatch:'full'},

  //Login
  { path:'login',component:LoginComponent},
  { path:'sign-up',component:SignUpComponent},
  { path:'mobile-code',component:MobileCodeComponent},

  //Usuarios canActivate:[RolGuardGuard]
  { path:'usuarios/ver',component:VerUsuariosComponent,title:"Usuarios Ver",canActivate:[RolGuardGuard],data: { expectedRole: ['1']}},

  //Equipo
  { path:'equipo/ver',component:VerEquiposComponent,title:"Equipos",canActivate:[UsuarioGuard]},
  { path:'equipo/crear',component:FormularioCrearComponent,title:"Equipos Crear",canActivate:[UsuarioGuard]},
  { path:'equipo/editar/:id',component:FormularioEditarComponent,title:"Equipos Editar",canActivate:[UsuarioGuard]},
  { path:'equipo/jugadores/:id',component:MostrarJugadoresComponent,title:"Equipos Crear",canActivate:[UsuarioGuard]},
  { path:'equipo/administrar-jugadores/:id',component:AdministrarJugadoresComponent,title:"Administrar Jugadores",canActivate:[UsuarioGuard]},

  //Jugadores
  { path:'jugadores/ver',component:VerJugadoresComponent,title:"Jugadores Ver",canActivate:[UsuarioGuard]},
  { path:'jugadores/crear',component:FormularioJugador,title:"Jugadores Crear",canActivate:[UsuarioGuard]},
  { path:'jugadores/editar/:id',component:FormularioEditarJugador,title:"Jugadores Editar",canActivate:[UsuarioGuard]},

  //Estados
  { path:'estados/ver',component:VerEstadosComponent,title:"Estado Ver",canActivate:[UsuarioGuard]},
  { path:'estados/crear',component:FormularioEstado,title:"Estado Crear ",canActivate:[UsuarioGuard]},
  { path:'estados/editar/:id',component:FormularioEditarEstado,title:"Estado Editar ",canActivate:[UsuarioGuard]},

  //Propietarios
  { path:'propietario/ver',component:VerPropietariosComponent,title:"Propietario Ver ",canActivate:[UsuarioGuard]},
  { path:'propietario/crear',component:FormularioPropietario,title:"Propietario Crear ",canActivate:[UsuarioGuard]},
  { path:'propietario/editar/:id',component:FormularioEditarPropietario,title:"Propietario Editar ",canActivate:[UsuarioGuard]},

  //Partidos
  { path:'partidos/ver',component:VerPartidosComponent,title:"Partidos Ver ",canActivate:[UsuarioGuard]},
  { path:'partidos/crear',component:FormularioCrearPartidoComponent,title:"Partidos Ver ",canActivate:[UsuarioGuard]},
  { path:'partidos/editar/:id',component:FormularioEditarPartidoComponent,title:"Partidos Editar ",canActivate:[UsuarioGuard]},

  //404
  { path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
