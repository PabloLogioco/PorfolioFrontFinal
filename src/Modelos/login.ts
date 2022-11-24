export class Login {
    id?: number; // no obligatorio, es automático
    usuario: string;
    contrasenia: string;
    
    constructor( usuario: string, contrasenia: string ) {
        this.usuario = usuario;
        this.contrasenia = contrasenia;
    }    
}