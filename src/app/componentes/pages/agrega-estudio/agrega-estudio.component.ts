import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as glob from 'src/global'; // importa variables globales
import { EstudioService } from 'src/app/servicios/estudio.service';
import { Estudio } from 'src/Modelos/estudio';

@Component({
  selector: 'app-agrega-estudio',
  templateUrl: './agrega-estudio.component.html',
  styleUrls: ['./agrega-estudio.component.css']
})
export class AgregaEstudioComponent implements OnInit {

  nuevoEstudio: Estudio = new Estudio("", "", "");

  constructor( private datosBack:EstudioService, private router: Router ) { }

  ngOnInit(): void {
  }

  public agregaEstudio(): void {
    if(glob.edicionTotal) {      // agrega item ingresado
      console.log(this.nuevoEstudio);
      this.datosBack.newEstudio(this.nuevoEstudio).subscribe();
    }
    this.router.navigate(['actualizaBD']);
  } //   editaTitular(): void {

  public cancelar(): void {
    this.router.navigate(['home']);
  } //   cancelar(): void {
}
