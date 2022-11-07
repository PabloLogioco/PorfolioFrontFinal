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

  constructor(private datosPorfolio:PorfolioService, private router: Router ) {
  }

  ngOnInit(): void {
    this.datosPorfolio.ObtenerDatos().subscribe(data => {
      // console.log(data);
      this.listaExperiencia = data.experiencia;

    });
  }

  navegavegaAAgregaExperiencia(): void {
    this.router.navigate(['agregaExperiencia']);
  }

  borraExperiencia(): void {

  }

  navegaAEditaExperiencia(): void {
    this.router.navigate(['editaExperiencia']);
  }
}
//