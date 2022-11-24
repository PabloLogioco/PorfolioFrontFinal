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
  muestra: boolean = glob.edicionHabilitada;
//  datosTitular: TitularM = new TitularM("", "", ""); // ?
  datosTitular: TitularM | any;
  
  constructor(private datosPorfolio:TitularService, private router: Router ) {
  }

  ngOnInit(): void {
    this.datosPorfolio.ObtenerTitular().subscribe(data => {
      this.datosTitular = data;
    });
  }

  public navegavegaAEditaTitular(): void {
    this.router.navigate(['editaTitular']);
  }
}