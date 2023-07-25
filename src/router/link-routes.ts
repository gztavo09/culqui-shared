export interface RouterLink {
    name: string;
    path: string;
    title: string;
}

export const routeLinks: RouterLink[] = [
    {
        path: '/', name: 'home', title: 'Home - Empleados'
    },
    {
        path: '/login', name: 'login', title: 'Inicio de sesión'
    }
]