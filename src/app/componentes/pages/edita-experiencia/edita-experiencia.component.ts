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

    this.datosBack.ObtenerExperiencias().subscribe(
      { next:data => {
          this.listaExperiencia = data;
    
          for (let index = 0; index < this.listaExperiencia.length; index++) { // busca elemento a editar
            const element = this.listaExperiencia[index];
            if (element.id == this.idAEditar) {
              this.experiencia = element;
            }
          }
          console.log("Datos de Experiencia OK");
          this.cargando = false;
        },
        error: _err => {
          console.log("Error en dato de Experiencia");
        }
      }
    );
  }

  guardaExperiencia(): void {
    if(glob.edicionTotal) {      // guarda item ingresado en BD.
      this.datosBack.modificaExperiencia(this.experiencia).subscribe();
    }
    this.router2.navigate(['actualizaBD']);
  } //   guardaEstudio(): void {

  cancelar(): void {
    this.router2.navigate(['home']);
  } //   cancelar(): void {
}
