// modulos
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // para servicios
import { MaterialModule } from './modules/material/material.module';
// ruting
import { AppRoutingModule } from './app-routing.module';
// componentes
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AgregaEstudioComponent } from './componentes/pages/agrega-estudio/agrega-estudio.component';
import { EditaEstudioComponent } from './componentes/pages/edita-estudio/edita-estudio.component';
import { EditaExperienciaComponent } from './componentes/pages/edita-experiencia/edita-experiencia.component';
import { AgregaExperienciaComponent } from './componentes/pages/agrega-experiencia/agrega-experiencia.component';
import { AgregaProyectoComponent } from './componentes/pages/agrega-proyecto/agrega-proyecto.component';
import { EditaProyectoComponent } from './componentes/pages/edita-proyecto/edita-proyecto.component';
import { EditaTitularComponent } from './componentes/pages/edita-titular/edita-titular.component';
import { EncabezadoSimpleComponent } from './componentes/encabezado-simple/encabezado-simple.component';
import { HomePageComponent } from './componentes/pages/home-page/home-page.component';
import { LoginComponent } from './componentes/pages/login/login.component';
import { LoginOKComponent } from './componentes/pages/login/logionOK/login-ok/login-ok.component';
import { EliminaItemComponent } from './componentes/pages/elimina-item/elimina-item.component';
import { LoginErrorComponent } from './componentes/pages/login/login-error/login-error.component';
import { LoginParcialComponent } from './componentes/pages/login/login-parcial/login-parcial.component';
import { LoginOutComponent } from './componentes/pages/login/login-out/login-out.component';
import { ActualizaBDComponent } from './componentes/pages/actualiza-bd/actualiza-bd.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    BannerComponent,
    ExperienciaComponent,
    EstudiosComponent,
    ProyectosComponent,
    AgregaEstudioComponent,
    EditaEstudioComponent,
    EditaExperienciaComponent,
    AgregaExperienciaComponent,
    AgregaProyectoComponent,
    EditaProyectoComponent,
    EditaTitularComponent,
    EncabezadoSimpleComponent,
    HomePageComponent,
    LoginComponent,
    LoginOKComponent,
    EliminaItemComponent,
    LoginErrorComponent,
    LoginParcialComponent,
    LoginOutComponent,
    ActualizaBDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // para enrutado
    FormsModule,
    HttpClientModule, // para peticiones HTPP
    BrowserAnimationsModule,  //
    ReactiveFormsModule,    // formularios reactivos
    MaterialModule // módulo personalizado de angular material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
