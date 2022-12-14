import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/Modelos/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills_1: Skills = new Skills("HTML", 70);  
  skills_2: Skills = new Skills("CCS", 75);  
  skills_3: Skills = new Skills("Angular", 60);  
  skills_4: Skills = new Skills("Spring", 50);  
  skills_5: Skills = new Skills("C++", 90);  
  skills_6: Skills = new Skills("TypeScript", 65);  
  skills_7: Skills = new Skills("Java", 65);  
  skills_8: Skills = new Skills("GIT", 70);  

   constructor() { }

  ngOnInit(): void {
  }
}
