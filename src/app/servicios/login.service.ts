import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/Modelos/login';
import * as glob from 'src/global'; // importa variables globales

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor( private http:HttpClient ) { }

  public buscarLogin(): Observable<Login> { 
    return this.http.get<Login>(glob.URL_Global + 'buscarLogin'); 
  }

  public modificarLogin(log: Login): Observable<any> {
    return this.http.put(glob.URL_Global + 'modificarLogin', log);
  }
}
