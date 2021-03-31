import { createApp } from 'vue'
import './assets/style.scss'
import { FontAwesomeIcon } from '@/plugins/font-awesome'
import App from './App.vue'
const app = createApp(App)
app.component('fa', FontAwesomeIcon).mount('#app')
