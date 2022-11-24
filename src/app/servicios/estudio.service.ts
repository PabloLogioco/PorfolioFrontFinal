import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from 'src/Modelos/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  //
  URL: string = 'http://localhost:8080/';
  //

  constructor( private http:HttpClient ) { }

  public ObtenerEstudios(): Observable<Estudio> { // Estudios
//    return this.http.get('./assets/datos/Estudios.json');
    return this.http.get<Estudio>(this.URL + 'verEstudios');
  }

  public modificaEstudio(est: Estudio): Observable<any> {
    return this.http.put(this.URL + 'modificaEstudio', est);
  }

  public borraEstudio(id: number): Observable<any> {
    return this.http.delete(this.URL + "borraEstudio/" + id);
  }

  public newEstudio(est: Estudio): Observable<any> {
    return this.http.post(this.URL + "newEstudio", est);
  }
}
