import Home from './components/Home.vue'
import signUp from './components/signUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'signUp',
        component: signUp,
        path: '/signUp'
    },
    {
        name: 'loginPage',
        component: Login,
        path: '/login'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;