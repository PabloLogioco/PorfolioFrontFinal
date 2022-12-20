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

/*
  skills_0: Skills = new Skills("HTML", 70);  
  skills_1: Skills = new Skills("CCS", 75);  
  skills_2: Skills = new Skills("Angular", 60);  
  skills_3: Skills = new Skills("Spring", 50);  
  skills_4: Skills = new Skills("C++", 90);  
  skills_5: Skills = new Skills("TypeScript", 65);  
  skills_6: Skills = new Skills("Java", 65);  
  skills_7: Skills = new Skills("GIT", 70);  
*/