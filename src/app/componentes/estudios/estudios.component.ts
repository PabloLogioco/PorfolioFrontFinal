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
  nIntervId: any;
  cargando: boolean = true;

  constructor(private datosBack:EstudioService, private router: Router) {
  }

  ngOnInit(): void {
    this.datosBack.ObtenerEstudios().subscribe(data => {
      this.listaEstudios = data;
    });
    this.nIntervId = setInterval(() => this.cargaEstudios(), 1000); // emula llegada de datos
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

  public cargaEstudios() {  // emula llegada de datos
    clearInterval(this.nIntervId);  // release our intervalID from the variable
    this.nIntervId = null;
    this.cargando = false;
  }
}
