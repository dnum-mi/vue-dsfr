<script>
import { getRandomId } from '../../utils/random-utils.js'

export default {
  name: 'DsfrNavigationItem',

  props: {
    id: {
      type: String,
      default: () => getRandomId('menu'),
    },
    active: Boolean,
  },
}
</script>

<template>
  <li
    class="fr-nav__item"
    :class="{ 'fr-nav__item--active': active }"
  >
    <slot />
  </li>
</template>

<style scoped>
.fr-nav__btn::after {
  display: none;
  content: '';
}
</style>
