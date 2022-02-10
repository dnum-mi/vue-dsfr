<script>
import '@gouvfr/dsfr/dist/component/navigation/navigation.module.js'

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
  </button>
  <div
    :id="id"
    class="fr-collapse fr-menu"
    data-testid="navigation-menu"
    :class="{ 'fr-collapse--expanded': expanded }"
  >
    <ul class="fr-menu__list">
      <!-- @slot Slot par défaut pour le contenu de l’item de liste. Sera dans `<ul class="fr-menu__list">` -->
      <slot />
      <DsfrNavigationMenuItem
        v-for="(link, idx) of links"
        :key="idx"
      >
        <DsfrNavigationMenuLink
          v-bind="link"
          @click="link.onClick"
          @toggle-id="$emit('toggle-id', expandedId)"
        />
      </DsfrNavigationMenuItem>
    </ul>
  </div>
</template>
