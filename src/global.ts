//
export var edicionHabilitada: boolean = false; // habilita ver paginas de edicion, sin modificar datos
export var edicionTotal: boolean = false;       // babilita edicion de datos
export var titulo: string = "Proyecto final #YoProgramo 2022"; // titulo del componente "encabezado"
export var URL_Global: string = 'http://localhost:8080/'; // URL local del BackEnd
//export var URL_Global: string = 'https://porfoliojpl.onrender.com'; // URL del BackEnd

export function setHabilitaEdicionPar( hab:boolean ): void {
    edicionHabilitada = hab;
}

export function setHabilitaEdicionTotal( hab: boolean): void {
    edicionTotal = hab;
}