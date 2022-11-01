export enum LEVELS {
    "INFO",
    "URGENTE",
    "BLOCKING",
}

export interface ITask {
    title: string;
    descripcion: string;
    completed: boolean;
    level: LEVELS;
}