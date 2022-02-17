import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import Contacts from '../views/Contacts.vue'

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/Contacts', name: 'Contacts', component: Contacts }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 