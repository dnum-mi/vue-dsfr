<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouteLocationNormalized } from 'vue-router'

import { getRandomId } from '../../utils/random-utils'

import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMenuLink, { type DsfrNavigationMenuLinkProps } from './DsfrNavigationMenuLink.vue'
import DsfrNavigationMenu, { type DsfrNavigationMenuProps } from './DsfrNavigationMenu.vue'
import DsfrNavigationMegaMenu, { type DsfrNavigationMegaMenuProps } from './DsfrNavigationMegaMenu.vue'

const props = withDefaults(defineProps<{
  id?: string
  label?: string
  navItems:(
    { text: string ; to?: RouteLocationNormalized }
    | { title: string ; links?: DsfrNavigationMenuLinkProps | DsfrNavigationMegaMenuProps | DsfrNavigationMenuProps }
  )[]
}>(), {
  id: () => getRandomId('menu'),
  label: 'Menu principal',
  navItems: () => [],
})

const expandedMenuId = ref(undefined)

const toggle = (id) => {
  if (id === expandedMenuId.value) {
    expandedMenuId.value = undefined
    return
  }
  expandedMenuId.value = id
}

const onDocumentClick = (e) => {
  handleElementClick(e.target)
}

const onKeyDown = (e) => {
  if (e.key === 'Escape') {
    toggle(expandedMenuId.value)
  }
}

const handleElementClick = (el) => {
  if (el === document.getElementById(props.id)) {
    return
  }

  if (!el?.parentNode) {
    toggle(expandedMenuId.value)
    return
  }

  handleElementClick(el.parentNode)
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('keydown', onKeyDown)
})
onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
  document.removeEventListener('keydown', onKeyDown)
})
</script>

<template>
  <nav
    :id="id"
    class="fr-nav"
    role="navigation"
    :aria-label="label"
  >
    <ul class="fr-nav__list">
      <!-- @slot Slot par défaut pour le contenu de la liste. Sera dans `<ul class="fr-nav__list">` -->
      <slot />
      <DsfrNavigationItem
        v-for="(navItem, idx) of navItems"
        :key="idx"
      >
        <DsfrNavigationMenuLink
          v-if="navItem.to && navItem.text"
          v-bind="navItem"
          :expanded-id="expandedMenuId"
          @toggle-id="toggle($event)"
        />
        <DsfrNavigationMenu
          v-else-if="navItem.title && navItem.links"
          v-bind="navItem"
          :expanded-id="expandedMenuId"
          @toggle-id="toggle($event)"
        />
        <DsfrNavigationMegaMenu
          v-else-if="navItem.title && navItem.menus"
          v-bind="navItem"
          :expanded-id="expandedMenuId"
          @toggle-id="toggle($event)"
        />
      </DsfrNavigationItem>
    </ul>
  </nav>
</template>

<style>
.fr-nav__list {
  position: relative;
}
</style>
