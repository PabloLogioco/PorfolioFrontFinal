import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/Modelos/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  //
  URL: string = 'http://localhost:8080/';
  //

  constructor( private http:HttpClient ) { }

  public ObtenerExperiencias():Observable<Experiencia> { // Experiencias
    return this.http.get<Experiencia>(this.URL + 'verExperiencias');
  }  

  public modificaExperiencia(exp: Experiencia): Observable<any> {
    return this.http.put(this.URL + 'modificaExperiencia', exp);
  }

  public borraExperiencia(id: number): Observable<any> {
    return this.http.delete(this.URL + "borraExperiencia/" + id);
  }

  public newExperiencia(exp: Experiencia): Observable<any> {
    return this.http.post(this.URL + "newExperiencia", exp);
  }
}
