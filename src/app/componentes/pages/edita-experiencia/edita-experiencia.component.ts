import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as glob from 'src/global'; // importa variables globales
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/Modelos/experiencia';

@Component({
  selector: 'app-edita-experiencia',
  templateUrl: './edita-experiencia.component.html',
  styleUrls: ['./edita-experiencia.component.css']
})
export class EditaExperienciaComponent implements OnInit {

  listaExperiencia: Experiencia | any; // toda la lista de experiencia
  experiencia: Experiencia | any; // el item experiencia a editar
  idAEditar: number = 0;  // ID del elemento a editar
  nIntervId: any; // id para la funcion Interval
  cargando: boolean = true; // marca final de carga de datos

  constructor( private datosBack:ExperienciaService, private route: ActivatedRoute,
               private router2: Router ) { }

  ngOnInit(): void {
    this.route.params.subscribe( /// recupera id pasado por ruta
      (params: any) => {
        if(params.id) {
            this.idAEditar = params.id;
        }
      }
    )

    this.datosBack.ObtenerExperiencias().subscribe(data => {
      this.listaExperiencia = data;

      for (let index = 0; index < this.listaExperiencia.length; index++) { // busca elemento a editar
        const element = this.listaExperiencia[index];
        if (element.id == this.idAEditar) {
          this.experiencia = element;
        }
      }
    });
    this.nIntervId = setInterval(() => this.cargaTitular(), 2000); // emula tardanza de llegada de datos
  }

  guardaExperiencia(): void {
    if(glob.edicionTotal) {      // guarda item ingresado en BD.
      this.datosBack.modificaExperiencia(this.experiencia).subscribe();
    }
    this.router2.navigate(['home']);
  } //   guardaEstudio(): void {

  cancelar(): void {
    this.router2.navigate(['home']);
  } //   cancelar(): void {

  private cargaTitular() { // emula tardanza de llegada de datos
    clearInterval(this.nIntervId);   // release our intervalID from the variable
    this.nIntervId = null;
    this.cargando = false;
  }
}
