<script lang="ts" setup>
import { ref, onMounted, onUnmounted, Ref } from 'vue'
import { RouteLocationRaw } from 'vue-router'

import { getRandomId } from '../../utils/random-utils'

import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMenuLink, { type DsfrNavigationMenuLinkProps } from './DsfrNavigationMenuLink.vue'
import DsfrNavigationMenu, { type DsfrNavigationMenuProps } from './DsfrNavigationMenu.vue'
import DsfrNavigationMegaMenu, { type DsfrNavigationMegaMenuProps } from './DsfrNavigationMegaMenu.vue'

export type DsfrNavigationMenuLinks = (DsfrNavigationMenuLinkProps | DsfrNavigationMegaMenuProps | DsfrNavigationMenuProps)[]

type SimpleLink = { text?: string ; to?: RouteLocationRaw }
type MenuItem = { title?: string; active?: boolean; links?: DsfrNavigationMenuLinks }
type MegaMenuItem = { title?: string; description: string, link: SimpleLink, menus: { title?: string; active?: boolean; links?: DsfrNavigationMenuLinks }[]}

const props = withDefaults(defineProps<{
  id?: string
  label?: string
  navItems:(
    SimpleLink
    | MenuItem
    | MegaMenuItem
  )[]
}>(), {
  id: () => getRandomId('menu'),
  label: 'Menu principal',
  navItems: () => [],
})

const expandedMenuId: Ref<string | undefined> = ref(undefined)

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
