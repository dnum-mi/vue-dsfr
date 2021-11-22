<script>
import { getRandomId } from '../../utils/random-utils.js'

import DsfrNavigationMegaMenuCategory from './DsfrNavigationMegaMenuCategory.vue'

export default {
  name: 'DsfrNavigationMegaMenu',

  components: {
    DsfrNavigationMegaMenuCategory,
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
    description: {
      type: String,
      default: '',
    },
    link: {
      type: Object,
      default: () => ({ to: '#', text: 'Voir toute la rubrique' }),
    },
    menus: {
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
    {{ title }}
  </button>
  <div
    :id="id"
    class="fr-collapse fr-mega-menu"
    tabindex="-1"
    :class="{ 'fr-collapse--expanded': expanded }"
  >
    <div class="fr-container">
      <button
        class="fr-link--close fr-link"
        aria-controls="mega-menu-695"
        @click="$emit('toggle-id', id)"
      >
        <VIcon
          scale="0.85"
          :style="{ top: '0.05em', position: 'relative' }"
          name="ri-close-line"
        />
        Fermer
      </button>
      <div class="fr-grid-row fr-grid-row--gutters">
        <div class="fr-col-12 fr-mb-4v">
          <h4 class="fr-h4 fr-mb-2v">
            {{ title }}
          </h4>
          <p class="fr-text--sm">
            {{ description }}
            <slot name="description" />
          </p>
          <a
            vi
            class="fr-link fr-link--icon-right"
            :to="link.to"
          >
            {{ link.text }}
            <VIcon name="ri-arrow-right-line" />
          </a>
        </div>
        <slot />
        <DsfrNavigationMegaMenuCategory
          v-for="(menu, idx) of menus"
          :key="idx"
          v-bind="menu"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fr-collapse--expanded {
  max-height: none !important;
}

.fr-nav__btn::after {
  display: none;
  content: '';
}
</style>
