import { createApp } from 'vue'
import App from './App.vue'
import store from './store'



createApp(App)
.use(store) //Se coloca el primero para que todos los demas elementos tengan acceso a él
.mount('#app')
