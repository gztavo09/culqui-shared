import '@/styles/global.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'

createApp(App)
    .use(VueQueryPlugin)
    .use(createPinia())
    .use(router)
    .mount('#app')
