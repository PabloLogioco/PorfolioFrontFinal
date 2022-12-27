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
  cargando: boolean = true;

  constructor(private datosBack:ProyectoService, private router: Router) {
  }

  ngOnInit(): void {
    this.datosBack.ObtenerProyectos().subscribe(
      { next: data => {
          this.listaProyectos = data;
          console.log("Datos de Proyectos OK");
          this.cargando = false;
        },
        error: _err => {
          console.log("Error en datos de Proyectos");
        }
      }
    );
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
}
