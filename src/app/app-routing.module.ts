import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { SignUpComponent } from './Componentes/sign-up/sign-up.component';
import { MobileCodeComponent } from './Componentes/mobile-code/mobile-code.component';
import { FormularioCrearComponent } from './Componentes/equipo/formulario-crear/formulario-crear.component';
import { VerEquiposComponent } from './Componentes/equipo/ver-equipos/ver-equipos.component';
import { FormularioEditarComponent } from './Componentes/equipo/formulario-editar/formulario-editar.component';

const routes: Routes = [
{
  path:'login',component:LoginComponent
},
{
  path:'sign-up',component:SignUpComponent
},
{
  path:'mobile-code',component:MobileCodeComponent
},
{
  path:'equipo/ver',component:VerEquiposComponent
},
{
  path:'equipo/crear',component:FormularioCrearComponent
},
{
  path:'equipo/editar',component:FormularioEditarComponent
}


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
