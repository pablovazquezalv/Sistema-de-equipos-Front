import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { LoginComponent } from './Componentes/login/login.component';
//C:\Angular\Crud-Angular-Api-Laravel\src\app\Componentes\navbar
import { SignUpComponent } from './Componentes/sign-up/sign-up.component';
import { MobileCodeComponent } from './Componentes/mobile-code/mobile-code.component';
import { FormularioCrearComponent } from './Componentes/equipo/formulario-crear/formulario-crear.component';
import { VerEquiposComponent } from './Componentes/equipo/ver-equipos/ver-equipos.component';
import { FormularioEditarComponent } from './Componentes/equipo/formulario-editar/formulario-editar.component';
import { VerJugadoresComponent } from './Componentes/jugadores/ver-jugadores/ver-jugadores.component';
import { HttpClientModule} from '@angular/common/http';
import { VerEstadosComponent } from './Componentes/estado/ver-estados/ver-estados.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    MobileCodeComponent,
    FormularioCrearComponent,
    VerEquiposComponent,
    FormularioEditarComponent,
    VerJugadoresComponent,
    VerEstadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
