<template>
  <ul
    class="fr-links-group"
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

<script>
import DsfrHeaderMenuLink from './DsfrHeaderMenuLink.vue'

export default {
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
}
</script>

<style scoped>
.fr-link {
  font-size: 0.875rem;
  line-height: 1.5rem;
  min-height: 2rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  flex-direction: row;
  overflow: initial;
  max-width: none;
  max-height: none;
}
</style>
