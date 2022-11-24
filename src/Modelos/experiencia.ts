export class Experiencia {
    id? : number; // no obligatorio, es automático
    desde : string;
    hasta : string;
    empresa : string;
    descripcion : string;

    constructor( desde: string, hasta: string, empresa: string, descripcion: string) {
        this.desde = desde;
        this.hasta = hasta;
        this.empresa = empresa;
        this.descripcion = descripcion;
    }
}