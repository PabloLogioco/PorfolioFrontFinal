import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TitularM } from 'src/Modelos/titular';

@Injectable({
  providedIn: 'root'
})
export class TitularService {
  //
  URL: string = 'http://localhost:8080/';
  //

  constructor( private http:HttpClient ) { }
  
  public ObtenerTitular(): Observable<TitularM> { 
    return this.http.get<TitularM>(this.URL + 'verTitular');
  }  

  public modificaTitular(tit: TitularM): Observable<any> {
    return this.http.put(this.URL + 'modificaTitular', tit);
  }
/*
  public getUrlFoto(): Observable<string> {
    return this.http.get<string>(this.URL + 'getUrlFoto');
  }
*/
}
