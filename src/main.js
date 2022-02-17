import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './views/HomePage.vue'
import Contacts from './views/Contacts.vue'
import App from './App.vue'
import './index.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: HomePage },
        { path: '/Contacts', name: 'Contacts', component: Contacts }
    ]
})

createApp(App).use(router).mount('#app')
