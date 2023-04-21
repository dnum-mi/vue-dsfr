<script setup>
import { ref, watch } from 'vue'

import { getRandomId } from '../../utils/random-utils.js'

import DsfrSideMenuList from './DsfrSideMenuList.vue'

defineProps({
  buttonLabel: {
    type: String,
    default: 'Dans cette rubrique',
  },
  id: {
    type: String,
    default () {
      return getRandomId('sidemenu')
    },
  },
  collapseValue: {
    type: String,
    default: '-492px',
  },
  menuItems: {
    type: Array,
    default: () => undefined,
  },
  headingTitle: {
    type: String,
    default: 'Titre de la rubrique',
  },
})

defineEmits(['toggle-expand'])

/** @type {Ref<HTMLElement>} */
const collapse = ref(null)
const expanded = ref(false)
const cssExpanded = ref(false)
const collapsing = ref(false)

/*
 * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js
 */
watch(expanded, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    if (newValue === true) {
      // unbound
      // @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L33
      collapse.value.style.setProperty('--collapse-max-height', 'none')
    }
    // We need to wait for the next RAF to be sure the CSS variable will be set
    // DSFR use RAF too https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/api/modules/render/renderer.js#L22
    window.requestAnimationFrame(() => {
      collapsing.value = true
      adjust()
      // We need to wait for the next RAF to be sure the animation will be triggered
      window.requestAnimationFrame(() => {
        cssExpanded.value = newValue
      })
    })
  }
})

/*
 * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L61
 */
const adjust = () => {
  collapse.value.style.setProperty('--collapser', 'none')
  const height = collapse.value.offsetHeight
  collapse.value.style.setProperty('--collapse', -height + 'px')
  collapse.value.style.setProperty('--collapser', '')
}
/*
 * @see https://github.com/GouvernementFR/dsfr/blob/main/src/core/script/collapse/collapse.js#L25
 */
const onTransitionEnd = () => {
  collapsing.value = false
  if (expanded.value === false) {
    collapse.value.style.removeProperty('--collapse-max-height')
  }
}
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
        @transitionend="onTransitionEnd"
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
