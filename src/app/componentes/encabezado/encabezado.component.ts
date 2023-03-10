import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as glob from 'src/global'; // importa variables globales
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],

  animations: [ // metadatos para la animacion de la foto
    trigger('animaciones', [
      state('active', style( {
        transform: 'translateX(30px)'
       })),
       state('inactive', style( {
        transform: 'translateX(10px)'
       })),
       transition('inactive => active', animate('1000ms ease-in' )),
       transition('active => inactive', animate('1000ms ease-out' ))
    ])
  ]
})
export class EncabezadoComponent implements OnInit {
  titulo: string = glob.titulo; // copia de variable global
  fecha: string = "";
  hora: string = "";
  logx: string = ""; // texto para el boton login
  BKSegundos: number = -1; // memoriza segundo actual 
  muestra: boolean = glob.edicionHabilitada; // habilita ver paginas de edicion, sin modificar datos
  editiTotal: boolean = glob.edicionTotal; // babilita edicion de datos
  state: string = 'inactive'; // animacion del logos, estado inicial

  constructor( private router: Router) { 
  }

  ngOnInit(): void {
    this.fecha = this.ObtieneFecha();
    this.hora = this.ObtieneHora();
    setInterval(() => this.tick(), 300); // tick cada 300 mSegundos
    this.logx = glob.edicionHabilitada ? "LogOut" : "LogIn";
  
    setInterval( () => {
      if(this.state == 'active') {
        this.state = 'inactive';
      }else {
        this.state = 'active';
      }
    }, 1000);
  }

  public navegaALogin(): void {
    if (!glob.edicionHabilitada) {
      this.router.navigate(['logIn']);
    } else {
      glob.setHabilitaEdicionPar(false);
      glob.setHabilitaEdicionTotal(false);
      /// location.reload(); // recarga la página
      this.router.navigate(['logOut']);
    }
  } // navegaALogin(): void  

  private tick(): void { // actualiza fecha, hora...
    let fechaDate: Date = new Date();
    let segundos: number = fechaDate.getSeconds();

    if(this.BKSegundos != segundos) {
      this.BKSegundos = segundos;
      this.fecha = this.ObtieneFecha();
      this.hora = this.ObtieneHora();
    }
  } // funcion tick llamada cada 300 mSeg.

  private ObtieneFecha(): string { // funcion para cargar fecha
    let fechaDate: Date = new Date();
    let semana: string[] = ["Domingo", "Lunes", "Martes", "Miercoles", 
                            "Jueves", "Viernes", "Sabado"];
    let mes: string[] = ["Enero", "Febrero", "Marzo", "Abril",
                          "Mayo", "Junio", "Julio", "Agosto",
                          "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let dia = semana[fechaDate.getDay()];                        
    dia += " " + fechaDate.getDate();
    dia += " de " + mes[fechaDate.getMonth()]; 
    dia += " de " + fechaDate.getUTCFullYear();
    return dia;
  } // function ObtieneFechaHora()
  
  private ObtieneHora(): string { // funcion para retornar la hora
    let fechaDate: Date = new Date();
    let hora: number = fechaDate.getHours();
    let minutos: number = fechaDate.getMinutes();
    let segundos: number = fechaDate.getSeconds();
  
    let segundosS: string = String(segundos);
    segundosS = ("0" + segundos).slice(-2); // muestra siempre 2 digitos
    
    let minutosS: string = String(minutos); // muestra siempre 2 digitos
    minutosS = ("0" + minutos).slice(-2);
  
    return hora + ":" + minutosS + ":" + segundosS;
  } // function ObtieneHora()
}

