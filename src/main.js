// import { createApp } from 'vue'
import App from './App.vue'
import '../src/index.css'
import { createApp } from 'vue';

import router from './Router/index.js';


createApp(App).use(router).mount('#app');
