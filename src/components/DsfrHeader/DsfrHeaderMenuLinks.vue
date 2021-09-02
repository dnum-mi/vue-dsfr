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
        :to="quickLink.path"
        :class="{
          'flex': true,
          'reverse': quickLink.iconRight,
        }"
      >
        <VIcon
          v-if="quickLink.icon"
          :name="quickLink.icon"
          :class="{
            'icon-right': quickLink.iconRight,
            'icon-left': !quickLink.iconRight,
          }"
        />
        <span>{{ quickLink.label }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DsfrMenuLinks',
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
