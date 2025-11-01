<script lang="ts" setup>
import type { DsfrSideMenuProps } from './DsfrSideMenu.types'

import { ref, watch } from 'vue'

import { useCollapsable } from '../../composables'
import { useRandomId } from '../../utils/random-utils'

import DsfrSideMenuList from './DsfrSideMenuList.vue'

export type { DsfrSideMenuProps }

defineSlots<{
  /**
   * Contenu personnalisé du menu latéral (remplace la liste des éléments par défaut)
   */
  default?: any
}>()

withDefaults(defineProps<DsfrSideMenuProps>(), {
  buttonLabel: 'Dans cette rubrique',
  id: () => useRandomId('sidemenu'),
  sideMenuListId: () => useRandomId('sidemenu', 'list'),
  collapseValue: '-492px',
  // @ts-expect-error this is really undefined
  menuItems: () => undefined,
  headingTitle: '',
  titleTag: 'h3',
  focusOnExpanding: true,
})

const emit = defineEmits<{
  /** Événement émis lors du basculement de l'expansion d'un élément de menu */
  toggleExpand: [payload: string]
}>()

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

const expanded = ref(false)

/*
 * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js
 */
watch(expanded, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    doExpand(newValue)
  }
})
</script>

<template>
  <nav
    class="fr-sidemenu"
    :aria-labelledby="id"
  >
    <div class="fr-sidemenu__inner">
      <button
        class="fr-sidemenu__btn"
        :aria-controls="id"
        :aria-expanded="expanded"
        @click.prevent.stop="expanded = !expanded"
      >
        {{ buttonLabel }}
      </button>
      <div
        :id="id"
        ref="collapse"
        class="fr-collapse"
        :class="{
          'fr-collapse--expanded': cssExpanded, // Need to use a separate data to add/remove the class after a requestAnimationFrame (RAF)
          'fr-collapsing': collapsing,
        }"
        @transitionend="onTransitionEnd(expanded, focusOnExpanding)"
      >
        <component
          :is="titleTag"
          class="fr-sidemenu__title"
        >
          {{ headingTitle }}
        </component>
        <!-- @slot Slot par défaut du contenu du menu latéral -->
        <slot>
          <DsfrSideMenuList
            :id="sideMenuListId"
            :menu-items="menuItems"
            @toggle-expand="emit('toggleExpand', $event)"
          />
        </slot>
      </div>
    </div>
  </nav>
</template>
