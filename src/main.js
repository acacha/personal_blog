import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Instagram from './Instagram.vue'

const app = createApp(App)

const routes = [
    { path: '/', component: App },
    { path: '/instagram', component: Instagram },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

app.use(router)

app.mount('#app')


