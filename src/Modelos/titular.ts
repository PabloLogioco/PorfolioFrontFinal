export class TitularM {
    id?: number; // no obligatorio, es automático
    nombre: string;
    titulo: string;
    url_foto: string;
    
    constructor( nombre: string, titulo: string, url_foto: string ) {
        this.nombre = nombre;
        this.titulo = titulo;
        this.url_foto = url_foto;
    }    
}