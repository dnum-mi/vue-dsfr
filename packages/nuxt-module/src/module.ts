import * as components from '@gouvminint/vue-dsfr'
import { addComponent, addImports, defineNuxtModule, useLogger } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * Whether to enable the module
   * @default true
   */
  enabled?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'vue-dsfr',
    configKey: 'vueDsfr',
    version: '3.0.0',
    compatibility: {
      nuxt: '>=4.0.0'
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {
    enabled: true
  },
  setup (options /* , nuxt*/) {
    const logger = useLogger('vue-dsfr')

    // Skip if disabled
    if (!options.enabled) {
      logger.info('Vue DSFR module is disabled')
      return
    }

    logger.info('Setting up Vue DSFR module for Nuxt 4')

    // Code pour intégrer `@gouvminint/vue-dsfr`
    let componentCount = 0
    let composableCount = 0

    for (const name in components) {
      if (name === 'default') {
        continue
      }

      if (name.startsWith('Dsfr') || name === 'VIcon') {
        // Les composants de `@gouvminint/vue-dsfr` commencent par `Dsfr`
        addComponent({
          name,
          export: name,
          filePath: '@gouvminint/vue-dsfr',
        })
        componentCount++
      }
      else {
        // Ajoute les imports automatiques des composables
        addImports({
          name,
          as: name,
          from: '@gouvminint/vue-dsfr'
        })
        composableCount++
      }
    }

    logger.success(`Registered ${componentCount} components and ${composableCount} composables from Vue DSFR`)
  }
})
