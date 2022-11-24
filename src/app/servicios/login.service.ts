import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/Modelos/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //
  URL: string = 'http://localhost:8080/';
  //

  constructor( private http:HttpClient ) { }

  public buscarLogin(): Observable<Login> { 
    return this.http.get<Login>(this.URL + 'buscarLogin'); 
  }

  public modificarLogin(log: Login): Observable<any> {
    return this.http.put(this.URL + 'modificarLogin', log);
  }
}
