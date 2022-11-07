import { Component, OnInit } from '@angular/core';
import * as glob from 'src/global'; // importa variables globales

@Component({
  selector: 'app-encabezado-simple',
  templateUrl: './encabezado-simple.component.html',
  styleUrls: ['./encabezado-simple.component.css']
})
export class EncabezadoSimpleComponent implements OnInit {

  titulo: string = glob.titulo;

  constructor() { }

  ngOnInit(): void {
  }

}
