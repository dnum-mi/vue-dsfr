<script>
import { getRandomId } from '../../utils/random-utils.js'
import DsfrNavigationMenuItem from './DsfrNavigationMenuItem.vue'
import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'

export default {
  name: 'DsfrNavigationMenu',

  components: {
    DsfrNavigationMenuItem,
    DsfrNavigationMenuLink,
  },

  props: {
    id: {
      type: String,
      default: () => getRandomId('menu'),
    },
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      default: () => [],
    },
    expandedId: {
      type: String,
      default: undefined,
    },
  },

  emits: ['toggle-id'],

  computed: {
    expanded () {
      return this.id === this.expandedId
    },
  },
}
</script>

<template>
  <button
    class="fr-nav__btn"
    :aria-expanded="expanded"
    :aria-controls="id"
    @click="$emit('toggle-id', id)"
  >
    <span>{{ title }}</span>
    <VIcon
      name="ri-arrow-drop-down-line"
      class="arrow"
      scale="1.25"
    />
  </button>
  <div
    :id="id"
    class="fr-collapse fr-menu"
    data-testid="navigation-menu"
    :class="{ 'fr-collapse--expanded': expanded }"
  >
    <ul class="fr-menu__list">
      <slot />
      <DsfrNavigationMenuItem
        v-for="(link, idx) of links"
        :key="idx"
      >
        <DsfrNavigationMenuLink
          v-bind="link"
          @click="link.onClick"
        />
      </DsfrNavigationMenuItem>
    </ul>
  </div>
</template>

<style src="./navigation-vue-dsfr.css" />

<style scoped>
.fr-nav__btn::before,
.fr-nav__btn::after {
  display: none;
  content: '';
}

.fr-menu__list {
  list-style: none;
}

.fr-collapse--expanded {
  max-height: none !important;
}

.arrow {
  transition: transform 0.3s;

  [aria-expanded="true"] & {
    transform: rotate(-180deg);
  }
}
</style>
