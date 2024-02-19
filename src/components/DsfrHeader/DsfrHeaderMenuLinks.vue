<script lang="ts" setup>
import DsfrHeaderMenuLink, { type DsfrHeaderMenuLinkProps } from './DsfrHeaderMenuLink.vue'

withDefaults(defineProps<{
  links?: DsfrHeaderMenuLinkProps[]
  navAriaLabel?: string
}>(), {
  links: () => [],
  navAriaLabel: 'Menu secondaire',
})

const emit = defineEmits<{'linkClick': [event: MouseEvent]}>()
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
          :on-click="($event) => {emit('linkClick', $event); quickLink.onClick?.($event)}"
        />
      </li>
    </ul>
  </nav>
</template>
