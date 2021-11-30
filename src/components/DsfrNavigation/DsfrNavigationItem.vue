<script>
import { getRandomId } from '../../utils/random-utils.js'

export default {
  name: 'DsfrNavigationItem',

  props: {
    id: {
      type: String,
      default: () => getRandomId('nav', 'item'),
    },
    active: Boolean,
  },
}
</script>

<template>
  <li
    :id="id"
    class="fr-nav__item"
    :class="{ 'fr-nav__item--active': active }"
  >
    <slot />
  </li>
</template>

<style scoped>
.fr-nav__item--active :deep(.fr-nav__link) {
  box-shadow: inset 0 -2px 0 0 var(--bf500);
}
</style>
