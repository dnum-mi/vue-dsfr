<script lang="ts" setup>
import type { DsfrHeaderMenuLinkProps } from './DsfrHeaderMenuLink.vue'

import DsfrHeaderMenuLink from './DsfrHeaderMenuLink.vue'

export type {
  DsfrHeaderMenuLinkProps,
}

withDefaults(defineProps<{
  links?: DsfrHeaderMenuLinkProps[]
  navAriaLabel?: string
}>(), {
  links: () => [],
  navAriaLabel: 'Menu secondaire',
})

const emit = defineEmits<{ linkClick: [event: MouseEvent] }>()
</script>

<template>
  <nav
    role="navigation"
    :aria-label="navAriaLabel"
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
  </nav>
</template>
