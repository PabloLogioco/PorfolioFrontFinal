import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import * as glob from 'src/global'; // importa variables globales
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  miPorfolio: any;
  controlColorTitular: number = 1;
  muestra: boolean = glob.edicionHabilitada; 

  constructor(private datosPorfolio:PorfolioService, private router: Router ) {
  }

  ngOnInit(): void {
    this.datosPorfolio.ObtenerDatos().subscribe(data => {
      // console.log(data);
      this.miPorfolio = data;
    });
    setInterval(() => this.CambiaColorTitular(), 400);
  }

  navegavegaAEditaTitular(): void {
    this.router.navigate(['editaTitular']);
  }

  private CambiaColorTitular() // cambia colores
  {
    const colorTexto_1: any = document.querySelector('#titular');
  
    switch(this.controlColorTitular) {
      case 1:
        colorTexto_1.style.color = 'blue';
        this.controlColorTitular++;
      break;
      case 2:
        colorTexto_1.style.color =  'white';
        this.controlColorTitular++;
      break;
      case 3:
        colorTexto_1.style.color = 'red';
        this.controlColorTitular++;
      break;
      case 4:
        colorTexto_1.style.color = 'greenYellow';
        this.controlColorTitular = 1;
      break;
      default:
        this.controlColorTitular = 1;
      break;
    }
   } // function CambiaColorTitular()
 }
