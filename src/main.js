// import { createApp } from 'vue'
import App from './App.vue'
import '../src/index.css'

import Vue from 'vue';
import router from './Router';
// 

new Vue({
  router,
  render:h=>h(App)
}).$mount('#app');

