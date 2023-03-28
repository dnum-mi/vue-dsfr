<script>
import { defineComponent } from 'vue'

// Ne fonctionne pas dans Nuxt
// import '@gouvfr/dsfr/dist/component/accordion/accordion.module.js'

import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrAccordion',
  props: {
    id: {
      type: String,
      default () {
        return getRandomId('accordion')
      },
    },
    expandedId: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: 'Sans intitulé',
    },
  },

  emits: ['expand'],

  data () {
    return {
      collapsing: false,
    }
  },

  computed: {
    expanded () {
      return this.expandedId === this.id
    },
  },

  watch: {
    /*
     * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js
     */
    expanded (newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue === true) {
          this.$refs.collapse.style.setProperty('--collapse-max-height', 'none')
        }
        this.collapsing = true
        this.adjust()
        setTimeout(() => {
          this.collapsing = false
          if (newValue === false) {
            this.$refs.collapse.style.removeProperty('--collapse-max-height')
          }
        }, 300)
      }
    },
  },

  methods: {
    toggleExpanded () {
      /*
       * Close current accordion if expanded
       */
      if (this.expanded) {
        this.$emit('expand', undefined)
      } else {
        this.$emit('expand', this.id)
      }
    },
    /*
     * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L61
     */
    adjust () {
      this.$refs.collapse.style.setProperty('--collapser', 'none')
      const height = this.$refs.collapse.offsetHeight
      this.$refs.collapse.style.setProperty('--collapse', -height + 'px')
      this.$refs.collapse.style.setProperty('--collapser', '')
    },
  },

})
</script>

<template>
  <section class="fr-accordion">
    <h3 class="fr-accordion__title">
      <button
        class="fr-accordion__btn"
        :aria-expanded="expanded"
        :aria-controls="id"
        type="button"
        @click="toggleExpanded()"
      >
        <!-- @slot Slot pour le contenu personnalisé du titre de l’accordéon. Une **props du même nom est utilisable pour du texte simple** sans mise en forme. -->
        <slot name="title">
          <span>{{ title }}</span>
        </slot>
      </button>
    </h3>
    <div
      :id="id"
      ref="collapse"
      class="fr-collapse"
      :class="{
        'fr-collapse--expanded': expanded,
        'fr-collapsing': collapsing,
      }"
    >
      <!-- @slot Slot par défaut pour le contenu de l’accordéon: sera dans `<div class="fr-collapse">` -->
      <slot />
    </div>
  </section>
</template>
