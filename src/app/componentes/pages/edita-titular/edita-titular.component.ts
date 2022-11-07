import { Component, OnInit } from '@angular/core';
//import * as glob from 'src/global'; // importa variables globales
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-edita-titular',
  templateUrl: './edita-titular.component.html',
  styleUrls: ['./edita-titular.component.css']
})
export class EditaTitularComponent implements OnInit {

  miPorfolio: any;
  nuevoUsuario: string= "";
  nuevaContrasenia: string= "";
  nuevoTitular: string="";
  nuevoTitulo: string="";
  nuevoURL: string="";

  constructor( private datosPorfolio:PorfolioService, private router: Router ) { }

  ngOnInit(): void {
    this.datosPorfolio.ObtenerDatos().subscribe(data => {
      this.miPorfolio = data;
    });
    this.nuevoUsuario = this.miPorfolio.usuario;
    this.nuevaContrasenia = this.miPorfolio.cantrasenia;
    this.nuevoTitular = this.miPorfolio.titular;
    this.nuevoTitulo = this.miPorfolio.titulo;
    this.nuevoURL = this.miPorfolio.urlFoto;
  }

  editaTitular(): void {
    this.router.navigate(['home']);
  } //   editaTitular(): void {
}
