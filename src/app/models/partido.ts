export interface Partido {
    id?:number;
    fecha:string;
    golesLocal:number;
    golesVisitante:number;
    equipoLocalId:number;
    equipoVisitanteId:number;
    ligaId:number;
}