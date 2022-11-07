import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agrega-experiencia',
  templateUrl: './agrega-experiencia.component.html',
  styleUrls: ['./agrega-experiencia.component.css']
})

export class AgregaExperienciaComponent implements OnInit {
  // Definimos formulario
  miFormulario: FormGroup = new FormGroup({});

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    // Iniciamos campos del formulario y sus valores
    this.miFormulario = this.formBuilder.group(
      {
        anio: '',
        empresa: '',
        descripcion: ''
      }
    );
    this.miFormulario.valueChanges.subscribe(
      console.log // saca por consola todos los cambios
    );
  }
}