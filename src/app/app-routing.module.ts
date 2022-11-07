//
// modulo ppal. de enrutado
//
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregaEstudioComponent } from './componentes/pages/agrega-estudio/agrega-estudio.component';
import { AgregaExperienciaComponent } from './componentes/pages/agrega-experiencia/agrega-experiencia.component';
import { AgregaProyectoComponent } from './componentes/pages/agrega-proyecto/agrega-proyecto.component';
import { EditaEstudioComponent } from './componentes/pages/edita-estudio/edita-estudio.component';
import { EditaExperienciaComponent } from './componentes/pages/edita-experiencia/edita-experiencia.component';
import { EditaProyectoComponent } from './componentes/pages/edita-proyecto/edita-proyecto.component';
import { EditaTitularComponent } from './componentes/pages/edita-titular/edita-titular.component';
import { HomePageComponent } from './componentes/pages/home-page/home-page.component';
import { LoginComponent } from './componentes/pages/login/login.component';

const routes: Routes = [ // array de rutas a usar
  {
    path: '', // cuando inicia por 1ª vez carga la home
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomePageComponent
   },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'editaTitular',
    component: EditaTitularComponent
  },
  {
  path: 'agregaEstudio',
  component: AgregaEstudioComponent
  },
  {
    path: 'editaEstudio',
    component: EditaEstudioComponent
  },
  {
  path: 'agregaExperiencia',
  component: AgregaExperienciaComponent
  },
  {
    path: 'editaExperiencia',
    component: EditaExperienciaComponent
  },
  {
    path: 'agregaProyecto',
    component: AgregaProyectoComponent
  },
  {
    path: 'editaProyecto',
    component: EditaProyectoComponent
  },
  {
    path: '**',  /// si no encuentra la ruta carga la home
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
