<script lang="ts" setup>
import { computed, onMounted, watch } from 'vue'

import { getRandomId } from '../../utils/random-utils'

import { useCollapsable } from '../../composables'
import DsfrNavigationMegaMenuCategory from './DsfrNavigationMegaMenuCategory.vue'

export type DsfrNavigationMegaMenuProps = {
  id?: string
  title: string
  description?: string
  link?: object
  menus?: string[]
  expandedId?: string
}

const props = withDefaults(defineProps<DsfrNavigationMegaMenuProps>(), {
  id: () => getRandomId('menu'),
  description: '',
  link: () => ({ to: '#', text: 'Voir toute la rubrique' }),
  menus: () => [],
  expandedId: '',
})

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const expanded = computed(() => {
  return props.id === props.expandedId
})

watch(expanded, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    /*
     * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js
     */
    doExpand(newValue)
  }
})

onMounted(() => {
  // NavigationMegaMenu can be expanded by default
  // We need to trigger the expand animation at mounted
  if (expanded.value) {
    doExpand(true)
  }
})

defineEmits<{(event: 'toggle-id', id: string): void}>()
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
    ref="collapse"
    data-testid="mega-menu-wrapper"
    class="fr-collapse fr-mega-menu"
    tabindex="-1"
    :class="{
      'fr-collapse--expanded': cssExpanded, // Need to use a separate data to add/remove the class after a RAF
      'fr-collapsing': collapsing,
    }"
    @transitionend="onTransitionEnd(expanded)"
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
