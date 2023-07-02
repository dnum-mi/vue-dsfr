<script setup lang="ts">
import type { RouteLocationNormalized } from 'vue-router'
import { ref, watch } from 'vue'

import { getRandomId } from '../../utils/random-utils'
import { useCollapsable } from '../../composables.js'

withDefaults(defineProps<{
  breadcrumbId?: string
  links?: { to?: RouteLocationNormalized, text: string }[]
}>(), {
  breadcrumbId: () => getRandomId('breadcrumb'),
  links: () => [{ text: '' }],
})

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const expanded = ref(false)

watch(expanded, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    /*
     * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js
     */
    doExpand(newValue)
  }
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
      @transitionend="onTransitionEnd(expanded)"
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
