import { createApp } from 'vue'

import {
  RiCheckboxCircleLine,
  RiNotification3Line,
} from 'oh-vue-icons/icons/ri/index.js'

// import '@/main.css'
// import '@gouvfr/dsfr/dist/dsfr.min.css'
import '@gouvfr/dsfr/dist/core/core.main.min.css'
// import '@gouvfr/dsfr/dist/scheme/scheme.min.css'
import '@gouvfr/dsfr/dist/component/link/link.main.min.css'
import '@gouvfr/dsfr/dist/component/form/form.main.min.css'
import '@gouvfr/dsfr/dist/utility/utility.main.min.css'
// import '@gouvfr/dsfr/dist/utility/icons/icons.main.min.css'

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
