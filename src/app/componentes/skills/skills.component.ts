import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/Modelos/skills';
import * as glob from 'src/global'; // importa variables globales
import { Router } from '@angular/router'
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  edicionOK: boolean = glob.edicionHabilitada; 
  listaSkills: Skills | any;
  animacion: number = 1500;  // tiempo para la animacion
  cargando: boolean = true;

  constructor( private datosBack:SkillsService, private router: Router  ) { }

  ngOnInit(): void {
    this.datosBack.ObtenerSkills().subscribe(
        { next: data => {
            this.listaSkills = data;
            console.log("Datos de Skills OK");
            this.cargando = false;
          },
        error: _err => {
          console.log("Error en datos de Skills");
        }
      }
    );
  }

  public navegaAEditaSkills(id: number): void {
    this.router.navigate(['editaSkills', id]);
  }
}
