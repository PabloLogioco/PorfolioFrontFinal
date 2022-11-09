import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import * as glob from 'src/global'; // importa variables globales
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  listaExperiencia:any;
  muestra: boolean = glob.edicionHabilitada; 
  nIntervId: any;
  cargando: boolean = true;

  constructor(private datosPorfolio:PorfolioService, private router: Router ) {
  }

  ngOnInit(): void {
    this.datosPorfolio.ObtenerDatos().subscribe(data => {
      // console.log(data);
      this.listaExperiencia = data.experiencia;
    });
    this.nIntervId = setInterval(() => this.cargaExperiencia(), 2500); // emula llegada de datos
  }

  navegavegaAAgregaExperiencia(): void {
    this.router.navigate(['agregaExperiencia']);
  }

  borraExperiencia(id: number): void {

  }

  navegaAEditaExperiencia(id: number): void {
    this.router.navigate(['editaExperiencia']);
  }

  cargaExperiencia() {
    clearInterval(this.nIntervId);
    // release our intervalID from the variable
    this.nIntervId = null;
    this.cargando = false;
  }
}
//