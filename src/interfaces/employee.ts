import type { User } from "./auth";

export interface EmployeeState extends User {
    status: string;
    data:   User[];
    total:  number;
}

