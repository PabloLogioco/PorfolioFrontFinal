import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import * as glob from 'src/global'; // importa variables globales
import { Proyecto } from 'src/Modelos/proyecto';

@Component({
  selector: 'app-agrega-proyecto',
  templateUrl: './agrega-proyecto.component.html',
  styleUrls: ['./agrega-proyecto.component.css']
})
export class AgregaProyectoComponent implements OnInit {

  nuevoProyecto: Proyecto = new Proyecto("", "",);

  constructor( private datosBack: ProyectoService, private router: Router ) { }

  ngOnInit(): void {
  }

  agregaProyecto(): void {
    if(glob.edicionTotal) {      // agrega item ingresado
      this.datosBack.newProyecto(this.nuevoProyecto).subscribe();
    }
    this.router.navigate(['actualizaBD']);
  } //   editaTitular(): void {

  cancelar(): void {
    this.router.navigate(['home']);
  } //   cancelar(): void {
}
