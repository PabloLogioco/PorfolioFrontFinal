import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estudio } from 'src/Modelos/estudio';
import { Router } from '@angular/router';
import * as glob from 'src/global'; // importa variables globales
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-edita-estudio',
  templateUrl: './edita-estudio.component.html',
  styleUrls: ['./edita-estudio.component.css']
})
export class EditaEstudioComponent implements OnInit {

  listaEstudios: Estudio | any; // toda la lista de estudios
  estudio: Estudio | any; // el item estudio a editar
  idAEditar: number = 0;  // ID del elemento a editar
  cargando: boolean = true; // marca final de carga de datos
  
  constructor( private datosBack:EstudioService, private route: ActivatedRoute,
               private router2: Router  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( /// recupera id pasado por ruta
      (params: any) => {
        if(params.id) {
            this.idAEditar = params.id;
        }
      }
    )

    this.datosBack.ObtenerEstudios().subscribe(
      { next: data => {
          this.listaEstudios = data;
          for (let index = 0; index < this.listaEstudios.length; index++) { // busca elemento a editar
            const element = this.listaEstudios[index];
            if(element.id == this.idAEditar) {
              this.estudio = element;
            }
          }
          console.log("Datos de Estudio OK");
          this.cargando = false;
        },
        error: _err => {
          console.log("Error en datos de Estudio");
        }
      }
    );
  }

  guardaEstudio(): void {
    if(glob.edicionTotal) {
      this.datosBack.modificaEstudio(this.estudio).subscribe();
    }
    this.router2.navigate(['actualizaBD']);
  } //   guardaEstudio(): void {

  cancelar(): void {
    this.router2.navigate(['home']);
  } //   cancelar(): void {
}
