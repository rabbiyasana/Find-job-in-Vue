import App from './App.vue'
import '../src/index.css'
import { createApp } from 'vue';
import router from './Router/index.js';


import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoHeartCircleOutline, MdShareRound, BiPieChart,CoZapier  } from "oh-vue-icons/icons";

addIcons(IoHeartCircleOutline, MdShareRound, BiPieChart,CoZapier  );

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(router);
app.mount('#app');
