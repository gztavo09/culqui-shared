import { createRouter, createWebHistory } from 'vue-router';
import Cookie from 'js-cookie'
import { useAuthStore } from "@/store/auth";

const routes = [
    { 
        path: '/', 
        name: 'home', 
        component: () => import(/* webpackChunkName: "home" */ '../views/HomePage.vue'),
        meta: {
            requiresAuth: true
        }
    },
    { 
        path: '/login', 
        name: 'login', 
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginPage.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'notfound', 
        component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFoundPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach(async(to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    let cookie = Cookie.get('user')
    const { setUser } = useAuthStore();
    if (requiresAuth && !cookie) {
        next('/login')
    } else {
        if (cookie) {
            try {
                const user = JSON.parse(cookie);
                await setUser(user)
            } catch (error) {
                console.error("Error al obtener la información del usuario desde la cookie:", error);
            }
        }
        next()
    }
})


export default router;