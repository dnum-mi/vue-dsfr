<script>
import { defineComponent } from 'vue'

import { getRandomId } from '../../utils/random-utils.js'

import DsfrNavigationMegaMenuCategory from './DsfrNavigationMegaMenuCategory.vue'

export default defineComponent({
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
    {{ title }}
  </button>
  <div
    :id="id"
    data-testid="mega-menu-wrapper"
    class="fr-collapse fr-mega-menu"
    tabindex="-1"
    ref="collapse"
    @transitionend="onTransitionEnd"
    :class="{
      'fr-collapse--expanded': cssExpanded, // Need to use a separate data to add/remove the class after a RAF
      'fr-collapsing': collapsing,
    }"
  >
    <div class="fr-container  fr-container--fluid  fr-container-lg">
      <button
        class="fr-link--close fr-link"
        aria-controls="mega-menu-695"
        @click="$emit('toggle-id', id)"
      >
        Fermer
      </button>
      <div class="fr-grid-row fr-grid-row-lg--gutters">
        <div class="fr-col-12 fr-col-lg-8 fr-col-offset-lg-4--right fr-mb-4v">
          <div class="fr-mega-menu__leader">
            <h4 class="fr-h4 fr-mb-2v">
              {{ title }}
            </h4>
            <p class="fr-hidden fr-displayed-lg">
              {{ description }}
              <!-- @slot Slot par défaut pour le contenu de la description du mega-menu. Sera dans `<p class="fr-text--sm">` -->
              <slot name="description" />
            </p>
            <RouterLink
              vi
              class="fr-link fr-icon-arrow-right-line fr-link--icon-right fr-link--align-on-content"
              :to="link.to"
            >
              {{ link.text }}
            </RouterLink>
          </div>
        </div>
        <!-- @slot Slot par défaut pour le contenu du mega-menu. Sera dans `<div class="fr-grid-row fr-grid-row--gutters">` -->
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
</style>
