<script lang="ts" setup>
import { getRandomId } from '../../utils/random-utils'

export type DsfrNavigationMenuItem = {
  id?: string
  active?: boolean
}

withDefaults(defineProps<DsfrNavigationMenuItem>(), {
  id: () => getRandomId('menu', 'item'),
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
