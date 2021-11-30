<script>
import { getRandomId } from '../../utils/random-utils.js'

export default {
  name: 'DsfrNavigationMenuItem',

  props: {
    id: {
      type: String,
      default: () => getRandomId('menu', 'item'),
    },
    active: Boolean,
  },
}
</script>

<template>
  <li
    :id="id"
    class="fr-menu__item"
    :class="{ 'fr-menu__item--active': active }"
  >
    <slot />
  </li>
</template>

<style scoped>
.fr-menu__item {
  position: relative;
}

.fr-menu__item--active {
  color: var(--bf500);
}

.fr-menu__item--active::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 2px;
    margin: 1rem 0;
    background-color: currentColor;
}
</style>
