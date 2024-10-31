<script lang="ts" setup>
import { computed, onMounted, watch } from 'vue'

import { useCollapsable } from '../../composables'
import { getRandomId } from '../../utils/random-utils'

import DsfrNavigationMenuItem from './DsfrNavigationMenuItem.vue'
import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'
import type { DsfrNavigationMenuProps } from './DsfrNavigation.types'

export type { DsfrNavigationMenuProps }

const props = withDefaults(defineProps<DsfrNavigationMenuProps>(), {
  id: () => getRandomId('menu'),
  links: () => [],
  expandedId: '',
})

defineEmits<{ (event: 'toggleId', id: string): void }>()

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const expanded = computed(() => props.id === props.expandedId)

watch(expanded, (newValue, oldValue) => {
  // @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js
  if (newValue !== oldValue) {
    doExpand(newValue)
  }
})

onMounted(() => {
  // NavigationMenu can be expanded by default
  // We need to trigger the expand animation at mounted
  if (expanded.value) {
    doExpand(true)
  }
})
</script>

<template>
  <button
    class="fr-nav__btn"
    :aria-expanded="expanded"
    :aria-current="active || undefined"
    :aria-controls="id"
    @click="$emit('toggleId', id)"
  >
    <span>{{ title }}</span>
  </button>
  <div
    :id="id"
    ref="collapse"
    class="fr-collapse fr-menu"
    data-testid="navigation-menu"
    :class="{ 'fr-collapse--expanded': cssExpanded, 'fr-collapsing': collapsing }"
    @transitionend="onTransitionEnd(expanded)"
  >
    <ul
      class="fr-menu__list"
    >
      <!-- @slot Slot par défaut pour le contenu de l’item de liste. Sera dans `<ul class="fr-menu__list">` -->
      <slot />
      <DsfrNavigationMenuItem
        v-for="(link, idx) of links"
        :key="idx"
      >
        <DsfrNavigationMenuLink
          v-bind="link"
          @toggle-id="$emit('toggleId', expandedId)"
        />
      </DsfrNavigationMenuItem>
    </ul>
  </div>
</template>
