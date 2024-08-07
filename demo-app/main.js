import { createApp } from 'vue'

import {
  RiCheckboxCircleLine,
  RiNotification3Line,
  RiGithubFill,
} from 'oh-vue-icons/icons'

import '@gouvfr/dsfr/dist/core/core.main.min.css'
import '@gouvfr/dsfr/dist/scheme/scheme.min.css'
import '@gouvfr/dsfr/dist/component/component.main.min.css'
import '@gouvfr/dsfr/dist/utility/utility.main.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons.main.min.css'

import VueDsfr from '@/index'
import router from './router.js'

import App from './App.vue'

createApp(App)
  .use(router)
  .use(VueDsfr, { icons: [RiCheckboxCircleLine, RiNotification3Line, RiGithubFill] })
  .mount('#app')

window.dsfr = {
  verbose: true,
  mode: 'manual',
}
