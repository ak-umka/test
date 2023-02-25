import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/style.css'
import App from './App.vue'
import router from './router'
import Layout from "./components/Layout.vue";


const app = createApp(App)
app.component("default-layout", Layout);
app.use(createPinia())
app.use(router)

app.mount('#app')