import { createApp } from 'vue'

import {
  RiCheckboxCircleLine,
  RiNotification3Line,
} from 'oh-vue-icons/icons/ri/index.js'

import '@/main.css'
import '@/assets/fonts-dsfr.css'
import VueDsfr from '@/index.js'
import router from './router.js'

import App from './App.vue'

createApp(App)
  .use(router)
  .use(VueDsfr, { icons: [RiCheckboxCircleLine, RiNotification3Line] })
  .mount('#app')

window.dsfr = {
  verbose: true,
  mode: 'manual',
}
