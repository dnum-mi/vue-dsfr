<script lang="ts" setup>
import { computed, onMounted, watch } from 'vue'

import { getRandomId } from '../../utils/random-utils'
import { useCollapsable } from '../../composables.js'

export interface DsfrAccordionProps {
  id?: string
  expandedId?: string | undefined
  title?: string
}

const props = withDefaults(defineProps<DsfrAccordionProps>(), { id: () => getRandomId('accordion'), expandedId: undefined, title: 'Sans intitulé' })

const emit = defineEmits<{(event: 'expand', id: string | undefined): void}>()

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const expanded = computed(() => props.expandedId === props.id)

onMounted(() => {
  // Accordion can be expanded by default
  // We need to trigger the expand animation on mounted
  if (expanded.value) {
    doExpand(true)
  }
})

watch(expanded, (newValue, oldValue) => {
  /*
  * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js
  */
  if (newValue !== oldValue) {
    doExpand(newValue)
  }
})

const toggleExpanded = () => {
  /*
   * Close current accordion if expanded
   */
  emit('expand', expanded.value ? undefined : props.id)
}
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
