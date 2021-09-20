import { createApp } from 'vue'
import OhVueIcon from 'oh-vue-icons/dist/v3/icon.es'
import {
  RiCheckboxCircleLine,
} from 'oh-vue-icons/icons'

import './main.css'
import './assets/fonts-dsfr.css'
import VueDsfr from './index.js'

import App from './App.vue'

OhVueIcon.add(
  RiCheckboxCircleLine,
)

createApp(App)
  .use(VueDsfr)
  .mount('#app')
