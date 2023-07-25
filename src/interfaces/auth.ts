export interface AuthState {
    status: string;
    data:   AuthData;
}

export interface AuthData {
    token: string;
    user:  User;
}

export interface User {
    id:           number;
    nombre:       string;
    correo:       string;
    cargo:        string;
    departamento: string;
    oficina:      string;
    estadoCuenta: EstadoCuenta;
}

export enum EstadoCuenta {
    Activada = "Activada",
    Desactivada = "Desactivada",
}