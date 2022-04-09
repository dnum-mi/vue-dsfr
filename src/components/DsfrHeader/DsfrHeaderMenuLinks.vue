<script>
import { defineComponent } from 'vue'

import DsfrHeaderMenuLink from './DsfrHeaderMenuLink.vue'

export default defineComponent({
  name: 'DsfrHeaderMenuLinks',
  components: {
    DsfrHeaderMenuLink,
  },

  props: {
    links: {
      type: Array,
      default: () => undefined,
    },
  },
})
</script>

<template>
  <ul
    class="fr-btns-group"
  >
    <li
      v-for="(quickLink, index) in links"
      :key="index"
    >
      <DsfrHeaderMenuLink
        v-bind="quickLink"
      />
    </li>
  </ul>
</template>
