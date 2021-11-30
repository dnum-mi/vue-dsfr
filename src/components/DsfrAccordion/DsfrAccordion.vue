<script>
import { getRandomId } from '../../utils/random-utils.js'

export default {
  name: 'DsfrAccordion',
  props: {
    id: {
      type: String,
      default () {
        return getRandomId('accordion')
      },
    },
    title: {
      type: String,
      default: 'Sans intitulé',
    },
  },

  data () {
    return {
      expanded: false,
    }
  },

  methods: {
    toggleExpanded () {
      this.expanded = !this.expanded
    },
  },

}
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
        <VIcon
          v-show="!expanded"
          name="ri-add-line"
        />
        <VIcon
          v-show="expanded"
          name="ri-subtract-line"
        />
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

<style src="./accordions.css" />

<style scoped>
.fr-accordion__btn {
  display: flex;
  justify-content: space-between;

  &::before {
    display: none;
    content: '';
  }
}

.fr-collapse {
  color: var(--g800);
}

.fr-collapse--expanded {
  max-height: none !important;
}
</style>
