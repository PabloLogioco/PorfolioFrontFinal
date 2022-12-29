import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as glob from 'src/global'; // importa variables globales
import { TitularService } from 'src/app/servicios/titular.service';
import { TitularM } from 'src/Modelos/titular';
import { LoginService } from 'src/app/servicios/login.service';
import { Login } from 'src/Modelos/login';

@Component({
  selector: 'app-edita-titular',
  templateUrl: './edita-titular.component.html',
  styleUrls: ['./edita-titular.component.css']
})
export class EditaTitularComponent implements OnInit {

  datosTitular: TitularM = new TitularM("", "", "");
  cargando: boolean = true; // marca final de carga de datos
  datosLogBD: Login | any; // deben ser de la clase Login
  datosLogNuevos: Login = new Login("", "");

  constructor(  private datosBack:TitularService, 
                private router: Router,
                private datosLogin: LoginService ) { }

  ngOnInit(): void {
    this.datosBack.ObtenerTitular().subscribe(
      { next: data => { 
          this.datosTitular = data;
          console.log("Datos del Titular OK");
        },
        error: _err => {
          console.log("Error en datos del Titular");
        }
      }
    );
    this.datosLogin.buscarLogin().subscribe(
      { next: logBD => { 
          this.datosLogBD = logBD;
          console.log("Datos de login OK");
          this.cargando = false;

          if (glob.edicionTotal) { // carga usuario y contr. segun edicion
            this.datosLogNuevos.usuario = this.datosLogBD[0].usuario;
            this.datosLogNuevos.contrasenia = this.datosLogBD[0].contrasenia;
          } else {
            this.datosLogNuevos.usuario = "Censurada";
            this.datosLogNuevos.contrasenia = "Censurada";
          }
        },
        error: _err => {
          console.log("Error en datos de login");
        }
      }
    );
  }

  public editaTitular(): void {
    if(glob.edicionTotal) { // llama al servicio y rutea a home
      this.datosBack.modificaTitular(this.datosTitular).subscribe();
      this.datosLogNuevos.id = 1; // siempre es 1
      this.datosLogin.modificarLogin(this.datosLogNuevos).subscribe();
    }
    this.router.navigate(['actualizaBD']);
  } //   editaTitular(): void {

  public cancelar(): void { // rutea a home
    this.router.navigate(['home']);
  } //   cancelar(): void {
}
