import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-agrega-proyecto',
  templateUrl: './agrega-proyecto.component.html',
  styleUrls: ['./agrega-proyecto.component.css']
})
export class AgregaProyectoComponent implements OnInit {

  nuevoAnio: string = "";
  nuevaDescr: string = "";

  constructor( private datosPorfolio:PorfolioService, private router: Router ) { }

  ngOnInit(): void {
  }

  agregaProyecto(): void {
    this.router.navigate(['home']);
  } //   editaTitular(): void {
}
