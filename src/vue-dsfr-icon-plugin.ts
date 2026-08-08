import type { IconifyJSON } from '@iconify/vue'
import type { Plugin } from 'vue'

import { vueDsfrIconCollectionsKey } from './components/VIconOffline/injection-key'
import VIconOffline from './components/VIconOffline/VIconOffline.vue'

/**
 * Fournit des collections Iconify locales à VIconOffline.
 *
 * Les collections doivent être générées par l’application avec vue-dsfr-icons.
 */
export function createVueDsfrIconPlugin (collections: readonly IconifyJSON[]): Plugin {
  return {
    install (app) {
      app.provide(vueDsfrIconCollectionsKey, collections)
      if (!app.component('VIconOffline')) {
        app.component('VIconOffline', VIconOffline)
      }
    },
  }
}
