import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import * as glob from 'src/global'; // importa variables globales
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  listaEstudios:any;
  muestra: boolean = glob.edicionHabilitada; 
  nIntervId: any;
  cargando: boolean = true;

  constructor(private datosPorfolio:PorfolioService, private router: Router) {
  }

  ngOnInit(): void {
    this.datosPorfolio.ObtenerDatos().subscribe(data => {
      // console.log(data);
      this.listaEstudios = data.estudios;
    });
    this.nIntervId = setInterval(() => this.cargaEstudios(), 1500); // emula llegada de datos
  }

  navegaAgregaEstudio(): void {
    this.router.navigate(['agregaEstudio']);
  }
  
  navegaAEditaEstudio(id: number): void {
    this.router.navigate(['editaEstudio']);
  }
  
  borraEstudio(id: number) {
    
  }

  cargaEstudios() {

    clearInterval(this.nIntervId);
    // release our intervalID from the variable
    this.nIntervId = null;
    this.cargando = false;
  }
}
