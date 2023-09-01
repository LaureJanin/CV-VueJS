import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './view/Home.vue'
import Projects from './view/Projects.vue'
import About from './view/About.vue'
import Contact from './view/Contact.vue'
import './assets/main.css'

const routes = [
    { path: "/", component : Home },
    { path: "/projects", component : Projects },
    { path: "/about", component : About },
    { path: "/contact", component : Contact }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
