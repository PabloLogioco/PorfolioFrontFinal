import { Component, OnInit } from '@angular/core';
import * as glob from 'src/global'; // importa variables globales
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/Modelos/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  listaExperiencia: Experiencia | any;
  edicionOK: boolean = glob.edicionHabilitada; 
  cargando: boolean = true;

  constructor(private datosBack:ExperienciaService, private router: Router ) {
  }

  ngOnInit(): void {
    this.datosBack.ObtenerExperiencias().subscribe(
      { next: data => {
          this.listaExperiencia = data;
          console.log("Datos de Experiencias OK");
          this.cargando = false;
        },
        error: _err => {
          console.log("Error en datos de Experiencias");
        }
      }
    );
  }

  public navegavegaAAgregaExperiencia(): void {
    this.router.navigate(['agregaExperiencia']);
  }

  public navegaAEditaExperiencia(id: number): void {
    this.router.navigate(['editaExperiencia', id]);
  }

  public borraExperiencia(id: number): void {
    if(glob.edicionTotal) {  
      this.datosBack.borraExperiencia(id).subscribe(); // elimina item en la BD.
    }
    this.router.navigate(['eliminaItem']);
  }
}
