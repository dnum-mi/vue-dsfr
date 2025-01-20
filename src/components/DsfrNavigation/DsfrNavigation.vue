<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

import { useRandomId } from '../../utils/random-utils'

import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMegaMenu from './DsfrNavigationMegaMenu.vue'
import DsfrNavigationMenu from './DsfrNavigationMenu.vue'
import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'
import type {
  DsfrNavigationMegaMenuProps,
  DsfrNavigationMenuLinkProps,
  DsfrNavigationMenuLinks,
  DsfrNavigationMenuProps,
  DsfrNavigationProps,
} from './DsfrNavigation.types'

export type { DsfrNavigationMenuLinks, DsfrNavigationProps }

const props = withDefaults(defineProps<DsfrNavigationProps>(), {
  id: () => useRandomId('nav'),
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

const onDocumentClick = (e: MouseEvent) => {
  handleElementClick(e.target as HTMLElement)
}

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    toggle(expandedMenuId.value)
  }
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
        :id="navItem.id"
        :key="idx"
      >
        <DsfrNavigationMenuLink
          v-if="(navItem as DsfrNavigationMenuLinkProps).to && (navItem as DsfrNavigationMenuLinkProps).text"
          v-bind="navItem"
          :expanded-id="expandedMenuId"
          @toggle-id="toggle($event)"
        />
        <!-- @vue-ignore -->
        <DsfrNavigationMenu
          v-else-if="(navItem as DsfrNavigationMenuProps).title && (navItem as DsfrNavigationMenuProps).links"
          v-bind="(navItem as DsfrNavigationMenuProps)"
          :expanded-id="expandedMenuId"
          @toggle-id="toggle($event)"
        />
        <!-- @vue-ignore -->
        <DsfrNavigationMegaMenu
          v-else-if="(navItem as DsfrNavigationMegaMenuProps).title && (navItem as DsfrNavigationMegaMenuProps).menus"
          v-bind="(navItem as DsfrNavigationMegaMenuProps)"
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
