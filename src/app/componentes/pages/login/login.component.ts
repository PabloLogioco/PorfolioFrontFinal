import { Component, OnInit } from '@angular/core';
import * as glob from 'src/global'; // importa variables globales
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';
import { Login } from 'src/Modelos/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  usuarioIngr: string = "";
  contraseniaIngr: string = "";
  login: Login | any;

  constructor(private datosBack: LoginService, 
              private router: Router,
              private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.datosBack.buscarLogin().subscribe(data => {
      this.login = data;
    });
  }

  public Ingresar(): void {
    if ((this.usuarioIngr == this.login[0].usuario) && (this.contraseniaIngr == this.login[0].contrasenia)) {
      glob.setHabilitaEdicionPar(true);
      glob.setHabilitaEdicionTotal(true);
      this.router.navigate(['loginOK']);
    } else {
      this.router.navigate(['loginError']);
    }
  } //   Ingresar(): void {

  public cancelar(): void {
    this.router.navigate(['home']);
  } //   cancelar(): void {

  public habilitaEdicionParcial(): void {
    glob.setHabilitaEdicionPar(true);
    // (PUERTA TRASERA) Verifica entrada de usuario y contraseña
    // y lo compara con BD->login oculto; para habilitar edicion
    // en caso de no saber usuario y contrasera normal
    if ((this.usuarioIngr == this.login[1].usuario) && (this.contraseniaIngr == this.login[1].contrasenia)) {
      glob.setHabilitaEdicionTotal(true);
      this.router.navigate(['loginOK']);
    } else {
      this.router.navigate(['loginParcial']);
    }
  }
}

///////////////////////////////////////////////////////////////////

/*  esto funciona bien cargando datos delde JSON
Ingresar(): void {
  if ((this.usuarioIngr == this.login.usuario) && (this.contraseniaIngr == this.login.contrasenia)) {
    glob.setHabilitaEdicionPar(true);
    glob.setHabilitaEdicionTotal(true);
    this.router.navigate(['loginOK']);
  } else {
    this.router.navigate(['home']);
  }
} //   Ingresar(): void {
*/

/*
    // directo para muestra del martes
    if ((this.usuarioIngr == "p") && (this.contraseniaIngr == "l")) {
      glob.setHabilitaEdicionPar(true);
      glob.setHabilitaEdicionTotal(true);
      this.router.navigate(['loginOK']);
    } else {
      this.router.navigate(['home']);
    }
*/

/*
export class LoginComponent implements OnInit {

  usuarioIngr: string="";
  contraseniaIngr: string="";
  titular: any;

  constructor(private datosPorfolio: PorfolioService, 
              private router: Router,
              private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.datosPorfolio.ObtenerTitular().subscribe(data => {
      this.titular = data;
    });
}

  Ingresar(): void {
    if ((this.usuarioIngr == this.titular.usuario) && (this.contraseniaIngr == this.titular.contrasenia)) {
      glob.setHabilitaEdicionPar(true);
      glob.setHabilitaEdicionTotal(true);
      this.router.navigate(['loginOK']);
    } else {
      this.router.navigate(['home']);
    }
  } //   Ingresar(): void {

  cancelar(): void {
    this.router.navigate(['home']);
  } //   cancelar(): void {

  habilitaEdicionParcial(): void {
    glob.setHabilitaEdicionPar(true);
    this.router.navigate(['home']);
  }
}
*/


/* 
  form: FormGroup;

  constructor(private datosPorfolio: PorfolioService, 
              private router: Router,
              private formBuilder: FormBuilder ) {
    this.form=this.formBuilder.group(
      {
        email:['', Validators.required, Validators.email],
        password:['',[Validators.required, Validators.minLength(8)]],
        deviceInfo: this.formBuilder.group( {
          deviceId: ["17867868768"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          NotificationToken: ["67657575eececc34"]
        } )
      }
    )
  }

  ngOnInit(): void {

  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  onEnviar(event:Event) {
    event.preventDefault;

//    this.autenticacionService.iniciarSesion(this.form.value).subscribe(data=>{
//      console.log("DATA: " JSON.stringify(data));
//    })

  }
*/