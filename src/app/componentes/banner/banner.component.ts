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
  cargando: boolean = true;
  nIntervId: any;

  constructor(private datosBack:TitularService, private router: Router ) {
  }

  ngOnInit(): void {
    this.datosBack.ObtenerTitular().subscribe(
      { next: data => {
          this.datosTitular = data;
          console.log("Datos del Titular OK");
          this.cargando = false;
        },
        error: _err => {
          console.log("Error en datos del Titular");
        }
      }
    );
  }

  public navegavegaAEditaTitular(): void {
    this.router.navigate(['editaTitular']);
  }
}