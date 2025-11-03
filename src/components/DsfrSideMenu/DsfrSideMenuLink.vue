<script lang="ts" setup>
import type { DsfrSideMenuLinkProps } from './DsfrSideMenu.types'

import { computed } from 'vue'

export type { DsfrSideMenuLinkProps }

const props = withDefaults(defineProps<DsfrSideMenuLinkProps>(), {
  to: '',
})

defineSlots<{
  /** Slot par défaut pour le contenu d'une liste du menu latéral */
  default?: () => any
}>()

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
const is = computed(() => {
  return isExternalLink.value ? 'a' : 'RouterLink'
})
const linkProps = computed(() => {
  return { [isExternalLink.value ? 'href' : 'to']: props.to }
})
</script>

<template>
  <component
    :is="is"
    :aria-current="active ? 'page' : undefined"
    class="fr-sidemenu__link"
    v-bind="linkProps"
  >
    <slot />
  </component>
</template>
