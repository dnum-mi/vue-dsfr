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
    navAriaLabel: {
      type: String,
      default: 'Menu secondaire',
    },
  },
  emits: ['linkClick'],
})
</script>

<template>
  <nav
    role="navigation"
    :aria-label="navAriaLabel"
  >
    <ul
      class="fr-btns-group"
    >
      <li
        v-for="(quickLink, index) in links"
        :key="index"
      >
        <DsfrHeaderMenuLink
          v-bind="quickLink"
          :on-click="()=>$emit('linkClick')"
        />
      </li>
    </ul>
  </nav>
</template>
