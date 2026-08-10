import type { IconifyJSON } from '@iconify/vue'
import type { Plugin } from 'vue'

import { vueDsfrIconCollectionsKey, vueDsfrPreferOfflineIconsKey } from './components/VIconOffline/injection-key'
import VIconOffline from './components/VIconOffline/VIconOffline.vue'

export interface VueDsfrIconPluginOptions {
  /**
   * Quand actif, `VIcon` tente de résoudre ses icônes depuis les collections
   * locales avant de recourir au registre Iconify en ligne.
   *
   * Utile en SSG/SSR pour garantir un SVG complet dès le HTML généré, y
   * compris pour les composants VueDsfr qui exposent une prop `icon` (par
   * exemple `DsfrButton` ou `DsfrTag`). Si une icône est absente des
   * collections locales, `VIcon` retombe silencieusement sur son
   * comportement en ligne habituel.
   *
   * Désactivé par défaut.
   */
  preferOffline?: boolean
}

/**
 * Fournit des collections Iconify locales à VIconOffline (et, si activé, à VIcon).
 *
 * Les collections doivent être générées par l’application avec vue-dsfr-icons.
 */
export function createVueDsfrIconPlugin (collections: readonly IconifyJSON[], options: VueDsfrIconPluginOptions = {}): Plugin {
  return {
    install (app) {
      app.provide(vueDsfrIconCollectionsKey, collections)
      app.provide(vueDsfrPreferOfflineIconsKey, options.preferOffline ?? false)
      if (!app.component('VIconOffline')) {
        app.component('VIconOffline', VIconOffline)
      }
    },
  }
}
