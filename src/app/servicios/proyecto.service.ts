import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/Modelos/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  //
  URL: string = 'http://localhost:8080/';
  //

  constructor( private http:HttpClient ) { }

  public ObtenerProyectos():Observable<Proyecto> { // Proyecto
    return this.http.get<Proyecto>(this.URL + 'verProyectos');
  }

  public modificaProyecto(proy: Proyecto): Observable<any> {
    return this.http.put(this.URL + 'modificaProyecto', proy);
  }

  public borraProyecto(id: number): Observable<any> {
    return this.http.delete(this.URL + "borraProyecto/" + id);
  }

  public newProyecto(proy: Proyecto): Observable<any> {
    return this.http.post(this.URL + "newProyecto", proy);
  }
}
