<script lang="ts" setup>
import { inject, onMounted, ref, toRef, watch } from 'vue'

import { getRandomId } from '../../utils/random-utils'
import { useCollapsable } from '../../composables'
import type { DsfrAccordionProps } from './DsfrAccordion.types'
import { registerTabKey } from './injection-key'

export type { DsfrAccordionProps }

const props = withDefaults(
  defineProps<DsfrAccordionProps>(),
  {
    id: () => getRandomId('accordion'),
    title: 'Sans intitulé',
    titleTag: 'h3',
  },
)

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const isStandaloneActive = ref()

const useAccordion = inject(registerTabKey)!
const { isActive, expand } = useAccordion?.(toRef(() => props.title)) ?? { isActive: isStandaloneActive, expand: () => isStandaloneActive.value = !isStandaloneActive.value }

onMounted(() => {
  // Accordion can be expanded by default
  // We need to trigger the expand animation on mounted
  if (isActive.value) {
    doExpand(true)
  }
})

watch(isActive, (newValue, oldValue) => {
  /*
  * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js
  */
  if (newValue !== oldValue) {
    doExpand(newValue)
  }
})
</script>

<template>
  <section class="fr-accordion">
    <component
      :is="titleTag"
      class="fr-accordion__title"
    >
      <button
        class="fr-accordion__btn"
        :aria-expanded="isActive"
        :aria-controls="id"
        type="button"
        @click="expand()"
      >
        <!-- @slot Slot pour le contenu personnalisé du titre de l’accordéon. Une **props du même nom est utilisable pour du texte simple** sans mise en forme. -->
        <slot name="title">
          {{ title }}
        </slot>
      </button>
    </component>
    <div
      :id="id"
      ref="collapse"
      class="fr-collapse"
      :class="{
        'fr-collapse--expanded': cssExpanded, // Need to use a separate data to add/remove the class after a RAF
        'fr-collapsing': collapsing,
      }"
      @transitionend="onTransitionEnd(isActive)"
    >
      <!-- @slot Slot par défaut pour le contenu de l’accordéon: sera dans `<div class="fr-collapse">` -->
      <slot />
    </div>
  </section>
</template>
