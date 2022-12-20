import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from 'src/Modelos/skills';
import * as glob from 'src/global'; // importa variables globales

@Injectable({
  providedIn: 'root'
})

export class SkillsService {
  [x: string]: any;
  
  constructor( private http:HttpClient ) { }

  public ObtenerSkills(): Observable<Skills> { 
    return this.http.get<Skills>(glob.URL_Global + 'verSkills');
  }

  public modificaSkills(skills: Skills): Observable<any> {
    return this.http.put(glob.URL_Global + 'modificaSkills', skills);
  }

}
