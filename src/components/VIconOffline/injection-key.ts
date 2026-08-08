import type { IconifyJSON } from '@iconify/vue'
import type { InjectionKey } from 'vue'

export const vueDsfrIconCollectionsKey: InjectionKey<readonly IconifyJSON[]> = Symbol('vue-dsfr-icon-collections')
