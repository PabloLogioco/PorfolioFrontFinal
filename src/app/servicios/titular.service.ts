import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TitularM } from 'src/Modelos/titular';
import * as glob from 'src/global'; // importa variables globales

@Injectable({
  providedIn: 'root'
})
export class TitularService {
  
  constructor( private http:HttpClient ) { }
  
  public ObtenerTitular(): Observable<TitularM> { 
    return this.http.get<TitularM>(glob.URL_Global + 'verTitular');
  }  

  public modificaTitular(tit: TitularM): Observable<any> {
    return this.http.put(glob.URL_Global + 'modificaTitular', tit);
  }
}