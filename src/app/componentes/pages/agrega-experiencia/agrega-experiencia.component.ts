import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-agrega-experiencia',
  templateUrl: './agrega-experiencia.component.html',
  styleUrls: ['./agrega-experiencia.component.css']
})

export class AgregaExperienciaComponent implements OnInit {

  nuevoDesde: string = "";
  nuevoHasta: string = "";
  nuevaEmpresa: string = "";
  nuevaDescr: string = "";

  constructor( private datosPorfolio:PorfolioService, private router: Router ) { }

  ngOnInit(): void {
  }

  agregaExperiencia(): void {
    this.router.navigate(['home']);
  } //   editaTitular(): void {
}