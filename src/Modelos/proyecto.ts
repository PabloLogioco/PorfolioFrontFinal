export class Proyecto {
    id? : number; // no obligatorio, es automático
    anio : string;
    descripcion : string;

    constructor( anio: string, descripcion: string) {
        this.anio = anio;
        this.descripcion = descripcion;
    }
}