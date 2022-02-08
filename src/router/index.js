import {createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HelloWorld.vue'
import Classification from '../components/Classification.vue'
import Twitter from '../components/Twitter.vue'
import Music from '../components/Music.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/classification/from-lyrics',
            component: Classification,
        },
        {
            path: '/recommandation/from-twitter',
            component: Twitter,
        },
        {
            path: '/music/get',
            component: Music,
        }
    ]
})

export default router