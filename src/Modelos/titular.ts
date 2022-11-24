export class TitularM {
    id?: number; // no obligatorio, es automático
    nombre: string;
    titulo: string;
    urlFoto: string;
    
    constructor( nombre: string, titulo: string, urlfoto: string ) {
        this.nombre = nombre;
        this.titulo = titulo;
        this.urlFoto = urlfoto;
    }    
}