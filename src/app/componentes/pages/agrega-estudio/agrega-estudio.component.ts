import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-agrega-estudio',
  templateUrl: './agrega-estudio.component.html',
  styleUrls: ['./agrega-estudio.component.css']
})
export class AgregaEstudioComponent implements OnInit {

  nuevoAnio: string = "";
  nuevaInst: string = "";
  nuevaDescr: string = "";

  constructor( private datosPorfolio:PorfolioService, private router: Router ) { }

  ngOnInit(): void {
  }

  agregaEstudio(): void {
    this.router.navigate(['home']);
  } //   editaTitular(): void {

}
