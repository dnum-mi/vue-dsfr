<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import DsfrSideMenu from '@/components/DsfrSideMenu/DsfrSideMenu.vue'

const buttonLabel = 'Dans cette rubrique'
const headingTitle = 'Titre de la rubrique'
const route = useRoute()
const menuItems = ref([
  {
    id: '11',
    to: '/side-menu/rubrique-1',
    text: 'Premier titre de niveau 1',
    get active () {
      return route.fullPath.startsWith('/side-menu/rubrique-1')
    },
  },
  {
    id: '12',
    to: '/side-menu/rubrique-2',
    text: 'Deuxième titre de niveau 1',
    get active () {
      return route.fullPath.startsWith('/side-menu/rubrique-2')
    },
    menuItems: [
      {
        id: '21',
        to: '/side-menu/rubrique-2/sous-rubrique-1',
        text: 'Premier titre de niveau 2',
        get active () {
          return route.fullPath === '/side-menu/rubrique-2/sous-rubrique-1'
        },
      },
      {
        id: '22',
        text: 'Deuxième titre de niveau 2',
        get active () {
          return route.fullPath.startsWith('/side-menu/rubrique-2/sous-rubrique-2')
        },
        menuItems: [
          {
            id: '31',
            to: '/side-menu/rubrique-2/sous-rubrique-2/sous-sous-rubrique-1',
            text: 'Premier titre de niveau 3',
            get active () {
              return route.fullPath === '/side-menu/rubrique-2/sous-rubrique-2/sous-sous-rubrique-1'
            },
          },
          {
            id: '32',
            to: '/side-menu/rubrique-2/sous-rubrique-2/sous-sous-rubrique-2',
            text: 'Deuxième titre de niveau 3',
            get active () {
              return route.fullPath === '/side-menu/rubrique-2/sous-rubrique-2/sous-sous-rubrique-2'
            },
          },
        ],
      },
    ],
  },
])

function toggleExpandedForMenuWithId (menuItems, id: string) {
  menuItems.forEach(menuItem => {
    if (menuItem.id === id) {
      menuItem.expanded = !menuItem.expanded
      return
    }
    if (menuItem.menuItems) {
      toggleExpandedForMenuWithId(menuItem.menuItems, id)
    }
  })
}

function toggleExpand (id: string) {
  toggleExpandedForMenuWithId(menuItems.value, id)
}

</script>

<template>
  <DsfrSideMenu
    :heading-title="headingTitle"
    :button-label="buttonLabel"
    :menu-items="menuItems"
    @toggle-expand="toggleExpand"
  />
</template>
