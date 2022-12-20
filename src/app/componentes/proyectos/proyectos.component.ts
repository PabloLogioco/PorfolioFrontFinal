import { Component, OnInit } from '@angular/core';
import * as glob from 'src/global'; // importa variables globales
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from 'src/Modelos/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  listaProyectos: Proyecto | any;
  edicionOK: boolean = glob.edicionHabilitada; 
  nIntervId: any;
  cargando: boolean = true;

  constructor(private datosBack:ProyectoService, private router: Router) {
  }

  ngOnInit(): void {
    this.datosBack.ObtenerProyectos().subscribe(data => {
      // console.log(data);
      this.listaProyectos = data;
    });
    this.nIntervId = setInterval(() => this.cargaProyectos(), 1000); // emula llegada de datos
  }

  public navegavegaAAgregaProyecto(): void {
    this.router.navigate(['agregaProyecto']);
  }

  public navegaAEditaProyecto(id: number): void {
    this.router.navigate(['editaProyecto', id]);
  }

  public borraProyecto(id: number): void {
    if(glob.edicionTotal) {
      this.datosBack.borraProyecto(id).subscribe(); // elimina item en la BD.
    }
    this.router.navigate(['eliminaItem']);
  }

  public cargaProyectos() {
    clearInterval(this.nIntervId);    // release our intervalID from the variable
    this.nIntervId = null;
    this.cargando = false;
  }
}
