import { Component, OnInit } from '@angular/core';
import * as glob from 'src/global'; // importa variables globales
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string="";
  contrasenia: string="";
  miPorfolio: any;
  usuar: string="";
  contr: string="";

  constructor(private datosPorfolio:PorfolioService, private router: Router) { }

  ngOnInit(): void {
    this.datosPorfolio.ObtenerDatos().subscribe(data => {
      this.miPorfolio = data;
    });
}

  Ingresar(): void {

    this.usuar = this.miPorfolio.usuario;
    this.contr = this.miPorfolio.cantrasenia;

    if((this.usuario == this.usuar) && (this.contrasenia == this.contrasenia)) {
      glob.setHabilitaEdicion(true);
    }
//    console.log(this.usuario);

    this.router.navigate(['home']);
  }
}
