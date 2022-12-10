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
import { EliminaItemComponent } from './componentes/pages/elimina-item/elimina-item.component';
import { HomePageComponent } from './componentes/pages/home-page/home-page.component';
import { LoginComponent } from './componentes/pages/login/login.component';
import { LoginOKComponent } from './componentes/pages/login/logionOK/login-ok/login-ok.component';
import { LoginErrorComponent } from './componentes/pages/login/login-error/login-error.component';
import { LoginParcialComponent } from './componentes/pages/login/login-parcial/login-parcial.component';
import { LoginOutComponent } from './componentes/pages/login/login-out/login-out.component';
import { ActualizaBDComponent } from './componentes/pages/actualiza-bd/actualiza-bd.component';

const routes: Routes = [ // array de rutas a usar
  {
    path: '', // cuando inicia por 1ª vez se redirecciona a home, carga la home
    pathMatch: 'full', // de la raiz del proyecto va a home
    redirectTo: 'home' // redirije a home
  },
  {
    path: 'home',
    component: HomePageComponent // carga componente HomeComponnte
   },
  {
    path: 'logIn',
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
    path: 'editaEstudio/:id', // con parametro id
    component: EditaEstudioComponent
  },
  {
  path: 'agregaExperiencia',
  component: AgregaExperienciaComponent
  },
  {
    path: 'editaExperiencia/:id', // con parametro id
    component: EditaExperienciaComponent
  },
  {
    path: 'agregaProyecto',
    component: AgregaProyectoComponent
  },
  {
    path: 'editaProyecto/:id', // con parametro id
    component: EditaProyectoComponent
  },
  {
    path: 'loginOK',
    component: LoginOKComponent
  },
  {
    path: 'loginError',
    component: LoginErrorComponent
  },
  {
    path: 'loginParcial',
    component: LoginParcialComponent
  },
  {
    path: 'logOut',
    component: LoginOutComponent
  },
  {
    path: 'eliminaItem',
    component: EliminaItemComponent
  },
  {
    path: 'actualizaBD',
    component: ActualizaBDComponent
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
