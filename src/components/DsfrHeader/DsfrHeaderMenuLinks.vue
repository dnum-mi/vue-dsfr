<template>
  <ul
    class="fr-links-group"
  >
    <li
      v-for="quickLink in links"
      :key="quickLink.path"
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
  name: 'DsfrMenuLinks',
  components: {
    DsfrHeaderMenuLink,
  },
  props: {
    links: {
      type: Array,
      default: () => undefined,
    },
  },
  data () {
    return {}
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
  overflow: initial;
  max-width: none;
  max-height: none;
}

.icon-left {
  margin-right: 0.5rem
}
.icon-right {
  margin-left: 0.5rem
}

.flex {
  display: flex;
  align-items: center;
}

.reverse {
  flex-direction: row-reverse;
}
</style>
