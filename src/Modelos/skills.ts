export class Skills {
    id?: number; // no obligatorio, es automático
    titulo: string;
    valor: number;
    
    constructor( titulo: string, valor: number ) {
        this.titulo = titulo;
        this.valor = valor;
    }    
}