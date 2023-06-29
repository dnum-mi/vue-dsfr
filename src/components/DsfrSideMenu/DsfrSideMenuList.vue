<script lang="ts" setup>
import { onMounted, watch } from 'vue'

import { useCollapsable } from '../../composables'

import DsfrSideMenuListItem, { DsfrSideMenuListItemProps } from './DsfrSideMenuListItem.vue'
import DsfrSideMenuButton from './DsfrSideMenuButton.vue'
import { RouteLocationRaw } from 'vue-router'

export type DsfrSideMenuListProps = {
  id: string
  collapsable?: boolean
  expanded?: boolean
  menuItems?:(
    DsfrSideMenuListItemProps & Partial<DsfrSideMenuListProps & {to?: RouteLocationRaw, text?: string}>
      & { menuItems?: (DsfrSideMenuListItemProps & Partial<DsfrSideMenuListProps & {to?: RouteLocationRaw, text?: string}>)[] }
  )[]
}

const props = withDefaults(defineProps<DsfrSideMenuListProps>(), {
  menuItems: () => [],
})

defineEmits<{(e: 'toggle-expand', payload: string): void}>()

const {
  collapse,
  collapsing,
  cssExpanded,
  doExpand,
  onTransitionEnd,
} = useCollapsable()

watch(() => props.expanded, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    doExpand(newValue)
  }
})

onMounted(() => {
  if (props.expanded) {
    doExpand(true)
  }
})

const isExternalLink = (to: string | RouteLocationRaw | undefined) => {
  return typeof to === 'string' && to.startsWith('http')
}
const is = (to: string | RouteLocationRaw | undefined) => {
  return isExternalLink(to) ? 'a' : 'RouterLink'
}
const linkProps = (to: string | RouteLocationRaw | undefined) => {
  return { [isExternalLink(to) ? 'href' : 'to']: to }
}
</script>

<template>
  <div
    :id="id"
    ref="collapse"
    :class="{
      'fr-collapse': collapsable,
      'fr-collapsing': collapsing,
      'fr-collapse--expanded': cssExpanded
    }"
    @transitionend="onTransitionEnd(!!expanded)"
  >
    <ul
      class="fr-sidemenu__list"
    >
      <!-- @slot Slot par défaut pour le contenu d’une liste du menu latéral -->
      <slot />

      <DsfrSideMenuListItem
        v-for="(menuItem, i) of menuItems"
        :key="i"
        :active="menuItem.active"
      >
        <component
          :is="is(menuItem.to)"
          v-if="!menuItem.menuItems"
          class="fr-sidemenu__link"
          :aria-current="menuItem.active ? 'page' : undefined"
          v-bind="linkProps(menuItem.to)"
        >
          {{ menuItem.text }}
        </component>

        <template v-if="menuItem.menuItems">
          <DsfrSideMenuButton
            :active="!!menuItem.active"
            :expanded="!!menuItem.expanded"
            :control-id="(menuItem.id as string)"
            @toggle-expand="$emit('toggle-expand', $event)"
          >
            {{ menuItem.text }}
          </DsfrSideMenuButton>
          <DsfrSideMenuList
            v-if="menuItem.menuItems"
            :id="(menuItem.id as string)"
            collapsable
            :expanded="menuItem.expanded"
            :menu-items="menuItem.menuItems"
            @toggle-expand="$emit('toggle-expand', $event)"
          />
        </template>
      </DsfrSideMenuListItem>
    </ul>
  </div>
</template>

<style lang="css">
/* Missing in DSFR */
.fr-sidemenu .fr-accordion .fr-collapse {
  padding: 0 1rem 0 1rem;
}
.fr-sidemenu .fr-accordion .fr-collapse--expanded {
  padding-bottom: 0;
  padding-top: 0;
}
</style>
