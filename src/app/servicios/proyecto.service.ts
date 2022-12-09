import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/Modelos/proyecto';
import * as glob from 'src/global'; // importa variables globales

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  
  constructor( private http:HttpClient ) { }

  public ObtenerProyectos():Observable<Proyecto> { // Proyecto
    return this.http.get<Proyecto>(glob.URL_Global + 'verProyectos');
  }

  public modificaProyecto(proy: Proyecto): Observable<any> {
    return this.http.put(glob.URL_Global + 'modificaProyecto', proy);
  }

  public borraProyecto(id: number): Observable<any> {
    return this.http.delete(glob.URL_Global + "borraProyecto/" + id);
  }

  public newProyecto(proy: Proyecto): Observable<any> {
    return this.http.post(glob.URL_Global + "newProyecto", proy);
  }
}
