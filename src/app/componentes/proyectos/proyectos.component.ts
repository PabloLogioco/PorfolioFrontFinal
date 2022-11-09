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
  nIntervId: any;
  cargando: boolean = true;

  constructor(private datosPorfolio:PorfolioService, private router: Router) {
  }

  ngOnInit(): void {
    this.datosPorfolio.ObtenerDatos().subscribe(data => {
      // console.log(data);
      this.listaProyectos = data.proyectos;
    });
    this.nIntervId = setInterval(() => this.cargaProyectos(), 3000); // emula llegada de datos
  }

  navegavegaAAgregaProyecto(): void {
    this.router.navigate(['agregaProyecto']);
  }

  borraProyecto(id: number): void {

  }

  navegaAEditaProyecto(id: number): void {
    this.router.navigate(['editaProyecto']);
  }

  cargaProyectos() {
    clearInterval(this.nIntervId);
    // release our intervalID from the variable
    this.nIntervId = null;
    this.cargando = false;
  }
}
