import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MobileCodeComponent } from './mobile-code/mobile-code.component';
import { FormularioCrearComponent } from './equipo/formulario-crear/formulario-crear.component';
import { VerEquiposComponent } from './equipo/ver-equipos/ver-equipos.component';
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
  path:'equipo/crear',component:FormularioCrearComponent
},
{
  path:'equipo/ver',component:VerEquiposComponent
}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
