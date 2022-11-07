import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import * as glob from 'src/global'; // importa variables globales
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  listaProyectos:any;
  muestra: boolean = glob.edicionHabilitada; 

  constructor(private datosPorfolio:PorfolioService, private router: Router) {
  }

  ngOnInit(): void {
    this.datosPorfolio.ObtenerDatos().subscribe(data => {
      // console.log(data);
      this.listaProyectos = data.proyectos;
    });
  }

  navegavegaAAgregaProyecto(): void {
    this.router.navigate(['agregaProyecto']);
  }

  borraProyecto(): void {

  }

  navegaAEditaProyecto(): void {
    this.router.navigate(['editaProyecto']);
  }
}
