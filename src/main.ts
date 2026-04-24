import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/globals.css'
import router from './router'

document.documentElement.classList.add('dark')

createApp(App).use(router).mount("#app")
