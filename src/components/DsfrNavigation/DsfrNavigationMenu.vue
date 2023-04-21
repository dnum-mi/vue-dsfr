<script>
import { defineComponent } from 'vue'

// import '@gouvfr/dsfr/dist/component/navigation/navigation.module.js'

import { getRandomId } from '../../utils/random-utils.js'
import DsfrNavigationMenuItem from './DsfrNavigationMenuItem.vue'
import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'
import { useCollapsable } from '@/composables'

export default defineComponent({
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

  setup () {
    const {
      collapse,
      collapsing,
      cssExpanded,
      doExpand,
      adjust,
      onTransitionEnd,
    } = useCollapsable()

    return {
      collapse,
      collapsing,
      cssExpanded,
      doExpand,
      adjust,
      onTransitionEnd,
    }
  },

  computed: {
    expanded () {
      return this.id === this.expandedId
    },
  },

  watch: {
    /*
     * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js
     */
    expanded (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.doExpand(newValue)
      }
    },
  },

  mounted () {
    // NavigationMenu can be expanded by default
    // We need to trigger the expand animation at mounted
    if (this.expanded) {
      this.doExpand(true)
    }
  },
})
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
    ref="collapse"
    class="fr-collapse fr-menu"
    data-testid="navigation-menu"
    :class="{ 'fr-collapse--expanded': cssExpanded, 'fr-collapsing': collapsing }"
    @transitionend="onTransitionEnd(expanded)"
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
