<script setup>
import { computed, ref, watch } from 'vue'

import { getRandomId } from '../../utils/random-utils.js'

// import '@gouvfr/dsfr/dist/component/sidemenu/sidemenu.module.js'

import DsfrSideMenuList from './DsfrSideMenuList.vue'

const props = defineProps({
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

const expanded = ref(false)
const collapsing = ref(false)
const collapseStyle = computed(() => {
  const baseStyle = {
    '--collapse': props.collapseValue,
  }
  if (expanded.value || collapsing.value) {
    baseStyle['--collapse-max-height'] = 'none'
  }
  return baseStyle
})
watch(expanded, (isExpanded) => {
  if (!isExpanded) {
    collapsing.value = true
    setTimeout(() => { collapsing.value = false }, 300)
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
        class="fr-collapse"
        :class="{'fr-collapse--expanded': expanded, 'fr-collapsing': collapsing}"
        :style="collapseStyle"
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
