<script>
import { defineComponent } from 'vue'

// import '@gouvfr/dsfr/dist/component/navigation/navigation.module.js'

import { getRandomId } from '../../utils/random-utils.js'
import DsfrNavigationMenuItem from './DsfrNavigationMenuItem.vue'
import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'

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

  data () {
    return {
      collapsing: false,
      // Need to handle a separate data to add/remove the class after a RAF
      cssExpanded: false,
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
        if (newValue === true) {
          // unbound
          // @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L33
          this.$refs.collapse.style.setProperty('--collapse-max-height', 'none')
        }
        // We need to wait for the next RAF to be sure the CSS variable will be set
        // DSFR use RAF too https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/api/modules/render/renderer.js#L22
        window.requestAnimationFrame(() => {
          this.collapsing = true
          this.adjust()
          // We need to wait for the next RAF to be sure the animation will be triggered
          window.requestAnimationFrame(() => {
            this.cssExpanded = newValue
          })
        })
      }
    },
  },

  methods: {
    /*
     * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L61
     */
    adjust () {
      this.$refs.collapse.style.setProperty('--collapser', 'none')
      const height = this.$refs.collapse.offsetHeight
      this.$refs.collapse.style.setProperty('--collapse', -height + 'px')
      this.$refs.collapse.style.setProperty('--collapser', '')
    },
    /*
     * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L25
     */
    onTransitionEnd () {
      this.collapsing = false
      if (this.expanded === false) {
        this.$refs.collapse.style.removeProperty('--collapse-max-height')
      }
    },
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
    @transitionend="onTransitionEnd"
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
