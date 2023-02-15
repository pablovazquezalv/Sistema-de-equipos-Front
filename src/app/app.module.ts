import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MobileCodeComponent } from './mobile-code/mobile-code.component';
import { FormularioCrearComponent } from './equipo/formulario-crear/formulario-crear.component';
import { VerEquiposComponent } from './equipo/ver-equipos/ver-equipos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    MobileCodeComponent,
    FormularioCrearComponent,
    VerEquiposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
