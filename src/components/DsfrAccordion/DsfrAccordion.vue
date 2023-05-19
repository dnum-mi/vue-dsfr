<script>
import { defineComponent } from 'vue'

// Ne fonctionne pas dans Nuxt
// import '@gouvfr/dsfr/dist/component/accordion/accordion.module.js'

import { getRandomId } from '../../utils/random-utils'
import { useCollapsable } from '@/composables'

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
      return this.expandedId === this.id
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
    // Accordion can be expanded by default
    // We need to trigger the expand animation at mounted
    if (this.expanded) {
      this.doExpand(true)
    }
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
        'fr-collapse--expanded': cssExpanded, // Need to use a separate data to add/remove the class after a RAF
        'fr-collapsing': collapsing,
      }"
      @transitionend="onTransitionEnd(expanded)"
    >
      <!-- @slot Slot par défaut pour le contenu de l’accordéon: sera dans `<div class="fr-collapse">` -->
      <slot />
    </div>
  </section>
</template>
