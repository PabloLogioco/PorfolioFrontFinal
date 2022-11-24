import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import * as glob from 'src/global'; // importa variables globales
import { Experiencia } from 'src/Modelos/experiencia';

@Component({
  selector: 'app-agrega-experiencia',
  templateUrl: './agrega-experiencia.component.html',
  styleUrls: ['./agrega-experiencia.component.css']
})

export class AgregaExperienciaComponent implements OnInit {

  nuevaExperiencia: Experiencia = new Experiencia("", "", "", "");

  constructor( private datosBack:ExperienciaService, private router: Router ) { }

  ngOnInit(): void {
  }

  agregaExperiencia(): void {
    if(glob.edicionTotal) {      // agrega item ingresado
      this.datosBack.newExperiencia(this.nuevaExperiencia).subscribe();
    }
    this.router.navigate(['home']);
  } //   editaTitular(): void {

  cancelar(): void {
    this.router.navigate(['home']);
  } //   cancelar(): void {
}
