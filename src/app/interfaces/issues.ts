export interface Main {
    total:  number;
    issues: Issue[];
}

export interface Issue {
    _id:         string;
    title:       string;
    description: string;
    __v?:        number;
    status:      Status;
}

export enum Status {
    Abierta = "abierta",
    Cerrada = "cerrada",
    EnProceso = "en proceso",
}
