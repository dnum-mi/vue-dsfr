<script lang="ts" setup>
import DsfrHeaderMenuLink, { type DsfrHeaderMenuLinkProps } from './DsfrHeaderMenuLink.vue'

withDefaults(defineProps<{
  links?: DsfrHeaderMenuLinkProps[]
  navAriaLabel?: string
}>(), {
  links: () => [],
  navAriaLabel: 'Menu secondaire',
})

defineEmits<{(e: 'linkClick'): void}>()
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
          :on-click="() => $emit('linkClick')"
        />
      </li>
    </ul>
  </nav>
</template>
