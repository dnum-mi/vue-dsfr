<script lang="ts" setup>
import { useRandomId } from '../../utils/random-utils'

import type { DsfrNavigationItemProps } from './DsfrNavigation.types'

export type { DsfrNavigationItemProps }

withDefaults(defineProps<DsfrNavigationItemProps>(), {
  id: () => useRandomId('nav', 'item'),
})
</script>

<template>
  <li
    :id="id"
    class="fr-nav__item"
    :aria-current="active ? 'page' : undefined"
  >
    <!-- @slot Slot par défaut pour le contenu de l’item de liste. Sera dans `<li class="fr-nav__item">` -->
    <slot />
  </li>
</template>

<style scoped>
.fr-nav__item--active :deep(.fr-nav__link) {
  box-shadow: inset 0 -2px 0 0 var(--bf500);
}
</style>
