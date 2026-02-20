<script lang="ts" setup>
import type { DsfrHeaderMenuLinkProps } from './DsfrHeaderMenuLink.vue'

import DsfrHeaderMenuLink from './DsfrHeaderMenuLink.vue'

export type {
  DsfrHeaderMenuLinkProps,
}

withDefaults(defineProps<{
  links?: DsfrHeaderMenuLinkProps[]
  navAriaLabel?: string
  wrapperTag?: 'div' | 'nav'
}>(), {
  links: () => [],
  navAriaLabel: 'Menu secondaire',
  wrapperTag: 'div',
})

const emit = defineEmits<{ linkClick: [event: MouseEvent] }>()
</script>

<template>
  <component
    :is="wrapperTag"
    :role="wrapperTag === 'nav' ? 'navigation' : undefined"
    :aria-label="wrapperTag === 'nav' ? navAriaLabel : undefined"
  >
    <ul
      class="fr-btns-group"
    >
      <li
        v-for="(quickLink, index) in links"
        :key="index"
      >
        <DsfrHeaderMenuLink
          v-bind="quickLink"
          :on-click="($event) => { emit('linkClick', $event); quickLink.onClick?.($event) }"
        />
      </li>
    </ul>
  </component>
</template>
