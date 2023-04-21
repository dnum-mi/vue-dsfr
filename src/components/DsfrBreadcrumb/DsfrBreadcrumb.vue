<script>
import { defineComponent } from 'vue'

// Ne fonctionne pas dans Nuxt
// import '@gouvfr/dsfr/dist/component/breadcrumb/breadcrumb.module.js'

import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrBreadcrumb',

  props: {
    breadcrumbId: {
      type: String,
      default () {
        return getRandomId('breadcrumb')
      },
    },
    links: {
      type: Array,
      default: () => [{ text: '' }],
    },
  },

  data () {
    return {
      collapsing: false,
      // Need to handle a separate data to add/remove the class after a RAF
      cssExpanded: false,
      expanded: false,
    }
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
  <nav
    role="navigation"
    class="fr-breadcrumb"
    aria-label="vous êtes ici :"
  >
    <button
      v-show="!expanded"
      class="fr-breadcrumb__button"
      :aria-expanded="expanded"
      :aria-controls="breadcrumbId"
      @click="expanded = !expanded"
    >
      Voir le fil d’Ariane
    </button>
    <div
      :id="breadcrumbId"
      ref="collapse"
      class="fr-collapse"
      :class="{
        'fr-collapse--expanded': cssExpanded, // Need to use a separate data to add/remove the class after a RAF
        'fr-collapsing': collapsing,
      }"
      @transitionend="onTransitionEnd"
    >
      <ol class="fr-breadcrumb__list">
        <li
          v-for="(link, index) in links"
          :key="index"
          class="fr-breadcrumb__item"
          :data-testid="`lis`"
        >
          <component
            :is="'RouterLink'"
            v-if="link.to"
            class="fr-breadcrumb__link"
            :to="link.to"
            :aria-current="index === links.length - 1 ? 'page' : undefined"
          >
            {{ link.text }}
          </component>
          <a
            v-if="!link.to"
            class="fr-breadcrumb__link"
            :aria-current="index === links.length - 1 ? 'page' : undefined"
          >{{ link.text }}</a>
        </li>
      </ol>
    </div>
  </nav>
</template>
