import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/Modelos/experiencia';
import * as glob from 'src/global'; // importa variables globales

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  
  constructor( private http:HttpClient ) { }

  public ObtenerExperiencias():Observable<Experiencia> { // Experiencias
    return this.http.get<Experiencia>(glob.URL_Global + 'verExperiencias');
  }  

  public modificaExperiencia(exp: Experiencia): Observable<any> {
    return this.http.put(glob.URL_Global + 'modificaExperiencia', exp);
  }

  public borraExperiencia(id: number): Observable<any> {
    return this.http.delete(glob.URL_Global + "borraExperiencia/" + id);
  }

  public newExperiencia(exp: Experiencia): Observable<any> {
    return this.http.post(glob.URL_Global + "newExperiencia", exp);
  }
}
