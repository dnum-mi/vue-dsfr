import '@gouvfr/dsfr/dist/core/core.main.min.css'
import '@gouvfr/dsfr/dist/component/component.main.min.css'
import '@gouvfr/dsfr/dist/utility/utility.main.min.css'
import '@gouvminint/vue-dsfr/styles'

import '@gouvfr/dsfr/dist/scheme/scheme.min.css'
import '@gouvfr/dsfr/dist/utility/icons/icons.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { addCollection } from '@iconify/vue'


import App from './App.vue'
import router from './router/index'
import iconCollections from './icon-collections'

import './main.css'

// Ajouter les collections d'icônes pour éviter les appels réseau
iconCollections.forEach((collection: any) => {
  addCollection(collection)
})

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
