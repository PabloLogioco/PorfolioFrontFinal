import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  nIntervId: any; // id para la funcion Interval
  delay1: boolean = false; // secuencia de carga de componentes
  delay2: boolean = false; // secuencia de carga de componentes
  delay3: boolean = false; // secuencia de carga de componentes
  delay4: boolean = false; // secuencia de carga de componentes
  contDelay: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.nIntervId = setInterval(() => this.secuenciaComponentes(), 700);
  }

  private secuenciaComponentes() {
    switch(this.contDelay) {
      case 0: {
        this.delay1 = true;
        break;
      }
      case 2: {
        this.delay2 = true;
        break;
      }
      case 4: {
        this.delay3 = true;
        break;
      }
      case 6: {
        this.delay4 = true;
        clearInterval(this.nIntervId);   // release our intervalID from the variable
        this.nIntervId = null;
        break;
      }
      default: {
        break;
      }
    }
    this.contDelay = this.contDelay + 1;
  }
}
