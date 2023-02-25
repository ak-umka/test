import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Function1 from '../views/Function1.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/function1'
        },
        {
            path: '/function1',
            name: 'Function1',
            component: Function1
        },
        {
            path: '/function2',
            name: 'Function2',
            component: () => import('../views/Function2.vue')
        },
        {
            path: '/function3',
            name: 'Function3',
            component: () => import('../views/Function3.vue')
        },
    ]
})

export default router