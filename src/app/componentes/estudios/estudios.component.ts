import { Component, OnInit } from '@angular/core';
import * as glob from 'src/global'; // importa variables globales
import { Router } from '@angular/router';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { Estudio } from 'src/Modelos/estudio';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  listaEstudios: Estudio | any;
  edicionOK: boolean = glob.edicionHabilitada; 
  cargando: boolean = true;

  constructor(private datosBack:EstudioService, private router: Router) {
  }

  ngOnInit(): void {
    this.datosBack.ObtenerEstudios().subscribe(
      { next: data => {
          this.listaEstudios = data;
          console.log("Datos de Estudios OK");
          this.cargando = false;
        },
        error: _err => {
          console.log("Error en datos de Estudios");
        }
      },
    );
  }

  public navegaAgregaEstudio(): void {
    this.router.navigate(['agregaEstudio']);
  }
  
  public navegaAEditaEstudio(id: number): void {
    this.router.navigate(['editaEstudio', id]); // pasa parametro id
  }
  
  public borraEstudio(id: number) {
    if(glob.edicionTotal) {
      this.datosBack.borraEstudio(id).subscribe(); // elimina item en la BD.
    }
    this.router.navigate(['eliminaItem']);
  }
}
