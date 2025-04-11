import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import i18n from './i18n/pt'

createApp(App).use(router).use(i18n).mount('#app')
