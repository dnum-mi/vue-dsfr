<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

import { getRandomId } from '../../utils/random-utils'

import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'
import DsfrNavigationMenu from './DsfrNavigationMenu.vue'
import DsfrNavigationMegaMenu from './DsfrNavigationMegaMenu.vue'

import type { DsfrNavigationMenuLinks, DsfrNavigationProps } from './DsfrNavigation.types'

export type { DsfrNavigationMenuLinks, DsfrNavigationProps }

const props = withDefaults(defineProps<DsfrNavigationProps>(), {
  id: () => getRandomId('menu'),
  label: 'Menu principal',
  navItems: () => [],
})

const expandedMenuId = ref<string | undefined>(undefined)

const toggle = (id: string | undefined) => {
  if (id === expandedMenuId.value) {
    expandedMenuId.value = undefined
    return
  }
  expandedMenuId.value = id
}

const onDocumentClick = (e: MouseEvent) => {
  handleElementClick(e.target as HTMLElement)
}

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    toggle(expandedMenuId.value)
  }
}

const handleElementClick = (el: HTMLElement) => {
  if (el === document.getElementById(props.id)) {
    return
  }

  if (!el?.parentNode) {
    toggle(expandedMenuId.value)
    return
  }

  handleElementClick(el.parentNode as HTMLElement)
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
          v-if="(navItem as SimpleLink).to && (navItem as SimpleLink).text"
          v-bind="navItem"
          :expanded-id="expandedMenuId"
          @toggle-id="toggle($event)"
        />
        <!-- @vue-ignore -->
        <DsfrNavigationMenu
          v-else-if="(navItem as MenuItem).title && (navItem as MenuItem).links"
          v-bind="(navItem as MenuItem)"
          :expanded-id="expandedMenuId"
          @toggle-id="toggle($event)"
        />
        <!-- @vue-ignore -->
        <DsfrNavigationMegaMenu
          v-else-if="(navItem as MegaMenuItem).title && (navItem as MegaMenuItem).menus"
          v-bind="(navItem as MegaMenuItem)"
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
