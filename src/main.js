import App from './App.vue'
import '../src/index.css'
import { createApp } from 'vue';
import router from './Router/index.js';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

createApp(App).use(router).mount('#app');
