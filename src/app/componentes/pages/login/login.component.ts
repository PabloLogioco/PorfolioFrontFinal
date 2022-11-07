import { Component, OnInit } from '@angular/core';
import * as glob from 'src/global'; // importa variables globales
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string="";
  contrasenia: string="";

  constructor(private router: Router) { }

  ngOnInit(): void {
//    glob.setHabilitaEdicion(!glob.edicionHabilitada);
  }

  Ingresar(): void {
    if((this.usuario == glob.usuario) && (this.contrasenia == glob.cantrasenia)) {
      glob.setHabilitaEdicion(true);
    }
//    console.log(this.usuario);

    this.router.navigate(['home']);
  }
}
