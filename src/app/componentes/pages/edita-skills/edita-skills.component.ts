import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/Modelos/skills';
import * as glob from 'src/global'; // importa variables globales
import { ActivatedRoute, Router } from '@angular/router'
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-edita-skills',
  templateUrl: './edita-skills.component.html',
  styleUrls: ['./edita-skills.component.css']
})

export class EditaSkillsComponent implements OnInit {

  listaSkills: Skills | any; // toda la lista de skills del back
  skills: Skills | any; // el item skills a editar
  idAEditar: number = 0;  // ID del elemento a editar

  constructor(  private datosBack:SkillsService, private route: ActivatedRoute,
                private router2: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe( /// recupera id pasado por ruta
      (params: any) => {
        if(params.id) {
            this.idAEditar = params.id;
        }
      }
    )
    this.datosBack.ObtenerSkills().subscribe(data => { // trae datos del back, llena la lista
      this.listaSkills = data;
      for (let index = 0; index < this.listaSkills.length; index++) { // busca elemento a editar
        const element = this.listaSkills[index];
        if (element.id == this.idAEditar) {
          this.skills = element;
        }
      }
    });
  }

  public suma(): void { // suma % del grafico
    if(this.skills.valor < 100) {
      this.skills.valor++;
    }
  }

  public resta(): void { // resta % del grafico
    if(this.skills.valor > 0) {
      this.skills.valor--;
    }
  }

  public guardaSkills(): void {
    if(glob.edicionTotal) {      // guarda item ingresado en BD usando el servicio.
      this.datosBack.modificaSkills(this.skills).subscribe();
    }
    this.router2.navigate(['actualizaBD']);
  }

  public cancelar(): void { // no graba datos y retorna a home
    this.router2.navigate(['home']);
  }
}
