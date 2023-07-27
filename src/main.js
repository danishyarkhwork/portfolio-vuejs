import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/img/favicon.png'
import './assets/img/apple-touch-icon.png'

import './assets/vendor/aos/aos.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'

import './assets/css/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
