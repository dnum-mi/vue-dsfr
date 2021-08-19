<template>
  <ul
    class="fr-links-group"
  >
    <li
      v-for="quickLink in links"
      :key="quickLink.path"
    >
      <router-link
        class="fr-link"
        :href="quickLink.path"
      >
        <VIcon
          v-if="quickLink.icon && !quickLink.iconRight"
          :name="quickLink.icon"
          style="margin-right: 0.25rem"
        />
        {{ quickLink.label }}
        <VIcon
          v-if="quickLink.icon && quickLink.iconRight"
          :name="quickLink.icon"
          style="margin-left: 0.25rem"
        />
      </router-link>
    </li>
  </ul>
</template>

<script>
import VIcon from 'oh-vue-icons/dist/v3/icon.es'

export default {
  name: 'DsfrMenuLinks',
  components: {
    VIcon,
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
  flex-direction: row;
  overflow: initial;
  max-width: none;
  max-height: none;
}
</style>
