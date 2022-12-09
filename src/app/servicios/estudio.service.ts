import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from 'src/Modelos/estudio';
import * as glob from 'src/global'; // importa variables globales

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  
  constructor( private http:HttpClient ) { }

  public ObtenerEstudios(): Observable<Estudio> { // Estudios
//    return this.http.get('./assets/datos/Estudios.json'); // lee archivo json local
    return this.http.get<Estudio>(glob.URL_Global + 'verEstudios');
  }

  public modificaEstudio(est: Estudio): Observable<any> {
    return this.http.put(glob.URL_Global + 'modificaEstudio', est);
  }

  public borraEstudio(id: number): Observable<any> {
    return this.http.delete(glob.URL_Global + "borraEstudio/" + id);
  }

  public newEstudio(est: Estudio): Observable<any> {
    return this.http.post(glob.URL_Global + "newEstudio", est);
  }
}
