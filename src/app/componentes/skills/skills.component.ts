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
  animacion: number = 300;  // tiempo para la animacion

  constructor( private datosBack:SkillsService, private router: Router  ) { }

  ngOnInit(): void {
    this.datosBack.ObtenerSkills().subscribe(data => {
      console.log("Obteniendo Skills");
      console.log(data);
      this.listaSkills = data;
    });
  }

  public navegaAEditaSkills(id: number): void {
    this.router.navigate(['editaSkills', id]);
  }
}
