<script lang="ts" setup>
import { useRandomId } from '../../utils/random-utils'

import type { DsfrNavigationMenuItemProps } from './DsfrNavigation.types'

export type { DsfrNavigationMenuItemProps }

withDefaults(defineProps<DsfrNavigationMenuItemProps>(), {
  id: () => useRandomId('menu', 'item'),
})
</script>

<template>
  <li
    :id="id"
    class="fr-menu__item"
    :aria-current="active ? 'page' : undefined"
  >
    <!-- @slot Slot par défaut pour le contenu de l’item de liste. Sera dans `<li class="fr-nav__item">` -->
    <slot />
  </li>
</template>
