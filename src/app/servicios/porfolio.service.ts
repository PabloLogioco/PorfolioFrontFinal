import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'  // futuros eventos

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor( private http:HttpClient) { }

  ObtenerDatos():Observable<any> { // obtine archivo de datos .json
    // console.log("El servicio porfolio esta iniciado");
//    return this.http.get('./assets/datos/Datos.json');
    return this.http.get('./assets/datos/Datos.json');
  }
}
