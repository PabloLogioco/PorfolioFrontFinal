export class Estudio {
    id?: number; // no obligatorio, es automático
    anio : string;
    institucion : string;
    descripcion : string;

    constructor( anio: string, institucion: string, descripcion: string) {
        this.anio = anio;
        this.institucion = institucion;
        this.descripcion = descripcion;
    }
}