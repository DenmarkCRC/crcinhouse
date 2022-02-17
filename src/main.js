import { createApp } from 'vue'

import './index.css' //TailWindCss requirement

import App from './App.vue'
import router from './router/index.js'

createApp(App).use(router).mount('#app')
