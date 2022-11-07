// modulos
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // para enrutado
    FormsModule,
    HttpClientModule, 
    BrowserAnimationsModule,  // para servicios
    ReactiveFormsModule,    // formularios reactivos
    MaterialModule // módulo personalizado de angular material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
