import { createApp } from 'vue'
import OhVueIcon from 'oh-vue-icons/dist/v3/icon.es'
import {
  RiCheckboxCircleLine,
  RiNotification3Line,
} from 'oh-vue-icons/icons'

import '@/main.css'
import '@/assets/fonts-dsfr.css'
import VueDsfr from '@/index.js'
import router from './router.js'

import App from './App.vue'

OhVueIcon.add(
  RiCheckboxCircleLine,
  RiNotification3Line,
)

createApp(App)
  .use(router)
  .use(VueDsfr)
  .mount('#app')

window.dsfr = {
  verbose: true,
  mode: 'manual',
}