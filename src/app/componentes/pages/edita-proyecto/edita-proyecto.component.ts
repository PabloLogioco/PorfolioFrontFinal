import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as glob from 'src/global'; // importa variables globales
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Proyecto } from 'src/Modelos/proyecto';

@Component({
  selector: 'app-edita-proyecto',
  templateUrl: './edita-proyecto.component.html',
  styleUrls: ['./edita-proyecto.component.css']
})
export class EditaProyectoComponent implements OnInit {

  listaProyectos: Proyecto | any; // toda la lista de proyectos
  proyecto: Proyecto | any; // el item proyecto a editar
  idAEditar: number = 0;  // ID del elemento a editar
  nIntervId: any; // id para la funcion Interval
  cargando: boolean = true; // marca final de carga de datos

  constructor( private datosBack:ProyectoService, private route: ActivatedRoute,
               private router2: Router ) { }

  ngOnInit(): void {
    this.route.params.subscribe( /// recupera id pasado por ruta
      (params: any) => {
        if(params.id) {
            this.idAEditar = params.id;
        }
      }
    )

    this.datosBack.ObtenerProyectos().subscribe(data => {

      this.listaProyectos = data;

      for (let index = 0; index < this.listaProyectos.length; index++) { // busca elemento a editar
        const element = this.listaProyectos[index];
        if (element.id == this.idAEditar) {
          this.proyecto = element;
        }
      }
      this.nIntervId = setInterval(() => this.cargaTitular(), 2000); // emula tardanza de llegada de datos
    });
  }

  guardaProyecto(): void {
    if(glob.edicionTotal) {      // guarda item ingresado en BD.
      this.datosBack.modificaProyecto(this.proyecto).subscribe();    }
    this.router2.navigate(['home']);
  } //   guardaProyecto(): void {

  cancelar(): void {
    this.router2.navigate(['home']);
  } //   cancelar(): void {

  private cargaTitular() { // emula tardanza de llegada de datos
    clearInterval(this.nIntervId);   // release our intervalID from the variable
    this.nIntervId = null;
    this.cargando = false;
  }
}
