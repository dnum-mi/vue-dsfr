import type { IconifyJSON } from '@iconify/vue'
import type { InjectionKey } from 'vue'

export const vueDsfrIconCollectionsKey: InjectionKey<readonly IconifyJSON[]> = Symbol('vue-dsfr-icon-collections')

/**
 * Quand actif, `VIcon` résout ses icônes depuis les collections locales
 * (voir `vueDsfrIconCollectionsKey`) avant de recourir au registre Iconify en ligne.
 */
export const vueDsfrPreferOfflineIconsKey: InjectionKey<boolean> = Symbol('vue-dsfr-prefer-offline-icons')
