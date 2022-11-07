import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as glob from 'src/global'; // importa variables globales

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  
//  titulo: string = "Proyecto final #YoProgramo 2022";
  titulo: string = glob.titulo;
  fecha: string = "";
  hora: string = "";
  logx: string = ""; // texto para el boton para logear y habilitar edicion
  cambioSegundos: boolean = true;
  BKSegundos: number = -1; // memoriza segundo actual 
  
  constructor( private router: Router) { 
  }

  ngOnInit(): void {
    this.fecha = this.ObtieneFecha();
    this.hora = this.ObtieneHora();
    setInterval(() => this.tick(), 300); // tick cada 300 mSegundos
    this.logx = glob.edicionHabilitada ? "LogOut" : "LogIn";
  }

  navegaALogin(): void {
    if (!glob.edicionHabilitada) {
      this.router.navigate(['login']);
    } else {
      glob.setHabilitaEdicion(false);
      location.reload(); // recarga la página
    }
  } // navegaALogin(): void  

  navegavegaAAgregaEstudio(): void {
    this.router.navigate(['agregaEstudio']);
  }

  private tick(): void {
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
