import { Icon } from '@iconify/vue'
import { createApp } from 'vue'

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
  .component('Icon', Icon)
  .use(VueDsfr)
  .mount('#app')

window.dsfr = {
  verbose: true,
  mode: 'manual',
}
