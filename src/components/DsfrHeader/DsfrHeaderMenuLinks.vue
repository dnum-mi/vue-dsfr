<script lang="ts" setup>
import DsfrHeaderMenuLink from './DsfrHeaderMenuLink.vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

export type DsfrHeaderMenuLinkProps = {
  button?: boolean
  icon?: string | InstanceType<typeof VIcon>['$props']
  iconAttrs?: InstanceType<typeof VIcon>['$props'] & import('vue').HTMLAttributes
  iconRight?: boolean
  label?: string
  target?: string
  onClick?: ($event: MouseEvent) => void
  to?: import('vue-router').RouteLocationRaw
  href?: string
}

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
