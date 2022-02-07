import {createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'
import Classification from '../components/Classification.vue'
import Add from '../components/Add.vue'
import Twitter from '../components/Twitter.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/classification',
            component: Classification,
        },
        {
            path: '/add',
            component: Add,
        },
        {
            path: '/twitter',
            component: Twitter,
        }
    ]
})

export default router