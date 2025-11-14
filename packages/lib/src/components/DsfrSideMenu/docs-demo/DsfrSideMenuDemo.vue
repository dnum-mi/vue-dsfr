<script lang="ts" setup>
import { ref } from 'vue'

import DsfrSideMenu from '../DsfrSideMenu.vue'

const headingTitle = 'Titre de la rubrique'
const menuItems = ref([
  {
    id: '11',
    to: '/rubrique-1',
    text: 'Premier titre de niveau 1',
  },
  {
    id: '12',
    text: 'Deuxième titre de niveau 1',
    active: true,
    menuItems: [
      {
        id: '21',
        to: '/rubrique-2/sous-rubrique-1',
        text: 'Premier titre de niveau 2',
      },
      {
        id: '22',
        text: 'Deuxième titre de niveau 2',
        active: true,
        menuItems: [
          {
            id: '31',
            to: '/rubrique-2/sous-rubrique-2/sous-sous-rubrique-1',
            text: 'Premier titre de niveau 3',
          },
          {
            id: '32',
            to: '/rubrique-2/sous-rubrique-2/sous-sous-rubrique-2',
            text: 'Deuxième titre de niveau 3',
            active: true,
          },
        ],
      },
    ],
  },
])
</script>

<template>
  <div class="fr-container fr-my-2w">
    <h2>SideMenu</h2>

    <DsfrSideMenu
      :heading-title="headingTitle"
      :menu-items="menuItems"
    />
  </div>
</template>
