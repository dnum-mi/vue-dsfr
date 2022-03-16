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

  computed: {
    expanded () {
      return this.expandedId === this.id
    },
  },

  methods: {
    toggleExpanded () {
      this.$emit('expand', this.id)
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
        @click="toggleExpanded()"
      >
        <span>{{ title }}</span>
      </button>
    </h3>
    <div
      :id="id"
      class="fr-collapse"
      :class="{ 'fr-collapse--expanded': expanded }"
    >
      <slot />
    </div>
  </section>
</template>

<style src="@gouvfr/dsfr/dist/component/accordion/accordion.main.css" />

<style scoped>
.fr-collapse--expanded {
  max-height: none !important;
}
</style>
