<script lang="ts" setup>
import { ref, watch } from 'vue'

import { getRandomId } from '../../utils/random-utils'

import DsfrSideMenuList from './DsfrSideMenuList.vue'
import { useCollapsable } from '../../composables'
import { DsfrSideMenuListItemProps } from './DsfrSideMenuListItem.vue'

type DsfrSideMenuProps = {
  buttonLabel?: string
  id?: string
  collapseValue?: string
  menuItems?: DsfrSideMenuListItemProps[]
  headingTitle?: string
}

withDefaults(defineProps<DsfrSideMenuProps>(), {
  buttonLabel: 'Dans cette rubrique',
  id: () => getRandomId('sidemenu'),
  collapseValue: '-492px',
  menuItems: () => undefined,
  headingTitle: '',
})

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

defineEmits<{(e: 'toggle-expand', payload: string): void}>()

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
          'fr-collapse--expanded': cssExpanded, // Need to use a separate data to add/remove the class after a RAF
          'fr-collapsing': collapsing,
        }"
        @transitionend="onTransitionEnd(expanded)"
      >
        <div class="fr-sidemenu__title">
          {{ headingTitle }}
        </div>
        <!-- @slot Slot par défaut du contenu du menu latéral -->
        <slot>
          <DsfrSideMenuList
            :id="getRandomId('sidemenu', 'list')"
            :menu-items="menuItems"
            @toggle-expand="$emit('toggle-expand', $event)"
          />
        </slot>
      </div>
    </div>
  </nav>
</template>
