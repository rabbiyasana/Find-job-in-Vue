import { createApp } from 'vue'
import App from './App.vue'
import '../src/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add all solid icons to the library so you can use them in your templates
library.add(fas)
const app = createApp(App)

// Register FontAwesomeIcon component globally
app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app')