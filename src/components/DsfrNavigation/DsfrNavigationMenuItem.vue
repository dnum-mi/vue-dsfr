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
    :aria-current="active ? 'page' : undefined"
  >
    <slot />
  </li>
</template>
