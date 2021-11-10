<script>
import { getRandomId } from '../../utils/random-utils.js'
import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'

export default {
  name: 'DsfrNavigationMenu',

  components: {
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
      required: true,
    },
    expandedId: {
      type: String,
      default: undefined,
    },
  },

  emits: ['click'],

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
    @click="$emit('click', id)"
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
    :class="{ 'fr-collapse--expanded': expanded }"
  >
    <ul class="fr-menu__list">
      <li
        v-for="(link, idx) of links"
        :key="idx"
        class="fr-menu__item"
      >
        <DsfrNavigationMenuLink
          v-bind="link"
          @click="link.onClick"
        />
      </li>
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
