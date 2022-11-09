import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-edita-titular',
  templateUrl: './edita-titular.component.html',
  styleUrls: ['./edita-titular.component.css']
})
export class EditaTitularComponent implements OnInit {

  miPorfolio: any;
  nuevoUsuario: string = "";
  nuevaContrasenia: string = "";
  nuevoTitular: string = "";
  nuevoTitulo: string = "";
  nuevoURL: string = "";
  nIntervId: any;
  cargando: boolean = true;

  constructor( private datosPorfolio:PorfolioService, private router: Router ) { }

  ngOnInit(): void {
    this.datosPorfolio.ObtenerDatos().subscribe(data => { this.miPorfolio = data; });
    this.nIntervId = setInterval(() => this.cargaTitular(), 2000); // emula llegada de datos
  }

  cargaTitular() {
    this.nuevoUsuario = this.miPorfolio.usuario;
    this.nuevaContrasenia = this.miPorfolio.contrasenia;
    this.nuevoTitular = this.miPorfolio.titular;
    this.nuevoTitulo = this.miPorfolio.titulo;
    this.nuevoURL = this.miPorfolio.urlFoto;

    if(this.nuevoTitular != "") { // cuidado con esto ! (ojo colgada)
      clearInterval(this.nIntervId);
      // release our intervalID from the variable
      this.nIntervId = null;
      this.cargando = false;
    }
  }

  editaTitular(): void {

    this.router.navigate(['home']);
  } //   editaTitular(): void {
}




