import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store/index.js";
import './modules/Axios/axios.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'audio-context-polyfill';
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(router).use(store).mount('#app')



