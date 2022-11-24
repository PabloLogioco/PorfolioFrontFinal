import { Component, OnInit } from '@angular/core';
import * as glob from 'src/global'; // importa variables globales
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-encabezado-simple',
  templateUrl: './encabezado-simple.component.html',
  styleUrls: ['./encabezado-simple.component.css'],

  animations: [ // metadatos para la animacion de los iconos
    trigger('animaciones', [
      state('active', style( {
        transform: 'translateX(30px)'
       })),
       state('inactive', style( {
        transform: 'translateX(10px)'
       })),
       transition('inactive => active', animate('1000ms ease-in' )),
       transition('active => inactive', animate('1000ms ease-out' ))
    ])
  ]
})

export class EncabezadoSimpleComponent implements OnInit {

  titulo: string = glob.titulo;
  state: string = 'inactive';

  constructor() { }

  ngOnInit(): void {
    setInterval( () => {
      if(this.state == 'active') {
        this.state = 'inactive';
      }else {
        this.state = 'active';
      }
    }, 1000);
  }
}
