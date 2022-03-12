<script setup>
import { getRandomId } from '../../utils/random-utils.js'

// import '@gouvfr/dsfr/dist/component/sidemenu/sidemenu.module.js'

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
</script>

<template>
  <nav
    class="fr-sidemenu"
    aria-label="Menu latéral"
  >
    <div class="fr-sidemenu__inner">
      <button
        class="fr-sidemenu__btn"
        :aria-controls="id"
        aria-expanded="false"
      >
        {{ buttonLabel }}
      </button>
      <div
        :id="id"
        class="fr-collapse"
      >
        <div class="fr-sidemenu__title">
          {{ headingTitle }}
        </div>
        <!-- @slot Slot par défaut du contenu du menu latéral -->
        <slot>
          <DsfrSideMenuList
            :menu-items="menuItems"
            @toggle-expand="$emit('toggle-expand', $event)"
          />
        </slot>
      </div>
    </div>
  </nav>
</template>

<style src="@gouvfr/dsfr/dist/component/sidemenu/sidemenu.main.css" />
