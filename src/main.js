import { createApp } from 'vue'
import OhVueIcon from 'oh-vue-icons/dist/v3/icon.es'
import {
  RiCheckboxCircleLine,
} from 'oh-vue-icons/icons'

import App from './App.vue'

OhVueIcon.add(
  RiCheckboxCircleLine,
)

createApp(App)
  .component('v-icon', OhVueIcon)
  .mount('#app')
