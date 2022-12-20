import { Component, OnInit } from '@angular/core';
import * as glob from 'src/global'; // importa variables globales
import { Router } from '@angular/router';
import { TitularService } from 'src/app/servicios/titular.service';
import { TitularM } from 'src/Modelos/titular';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  controlColorTitular: number = 1;
  edicionOK: boolean = glob.edicionHabilitada;
  datosTitular: TitularM = new TitularM("", "", "");
  fotoCargada: boolean = false;
  nIntervId: any;

  constructor(private datosPorfolio:TitularService, private router: Router ) {
  }

  ngOnInit(): void {
    this.datosPorfolio.ObtenerTitular().subscribe(data => {
      this.datosTitular = data;
//      console.log("Titular: " + this.datosTitular.nombre);
//      console.log("Titulo: " + this.datosTitular.titulo);
//      console.log("URL: " + this.datosTitular.url_foto);
    });
    this.nIntervId = setInterval(() => this.finCargaFoto(), 1000); // emula llegada de datos
  }

  public navegavegaAEditaTitular(): void {
    this.router.navigate(['editaTitular']);
  }

  public finCargaFoto() {  // emula llegada de datos
    clearInterval(this.nIntervId);  // release our intervalID from the variable
    this.nIntervId = null;
    this.fotoCargada = true;
  }
}