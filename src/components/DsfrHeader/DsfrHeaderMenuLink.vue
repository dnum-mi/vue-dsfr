<script lang="ts" setup>
import { computed } from 'vue'
import VIcon from '../VIcon/VIcon.vue'

import type { DsfrHeaderMenuLinkProps } from './DsfrHeader.types'

export type { DsfrHeaderMenuLinkProps }

const props = withDefaults(defineProps<DsfrHeaderMenuLinkProps>(), {
  icon: undefined,
  iconAttrs: () => ({}),
  onClick: () => undefined,
  target: '_self',
  label: '',
  href: undefined,
  to: undefined,
  path: '',
})

const isPathString = computed(() => {
  return typeof props.path === 'string'
})
const isExternalLink = computed(() => {
  return props.href?.startsWith('http') || (isPathString.value && (props.path as string).startsWith('http'))
})
const isMailto = computed(() => {
  return props.href?.startsWith('mailto') || (isPathString.value && (props.path as string).startsWith('mailto'))
})
const is = computed(() => {
  if (props.button) {
    return 'button'
  }
  return isExternalLink.value || isMailto.value ? 'a' : 'RouterLink'
})

const actualHref = computed(() => {
  if (!isExternalLink.value && !isMailto.value) {
    return undefined
  }
  return props.href !== undefined ? props.href : props.path
})
const actualTo = computed(() => {
  if (isExternalLink.value || isMailto.value) {
    return undefined
  }
  return props.to || props.path
})
const linkData = computed(() => {
  return actualTo.value ? { to: actualTo.value } : { href: actualHref.value }
})
const dsfrIcon = computed(() => typeof props.icon === 'string' && props.icon.startsWith('fr-icon-'))
const defaultScale = 1
const iconProps = computed(() => typeof props.icon === 'string'
  ? { name: props.icon, scale: defaultScale, ...(props.iconAttrs ?? {}) }
  : { scale: defaultScale, ...(props.icon ?? {}), ...(props.iconAttrs ?? {}) },
)
</script>

<template>
  <component
    :is="is"
    class="fr-btn"
    :class="{
      'fr-btn--icon-right': dsfrIcon && iconRight,
      'fr-btn--icon-left': dsfrIcon && !iconRight,
      [String(icon)]: dsfrIcon,
    }"
    v-bind="linkData"
    :target="target"
    @click.stop="onClick($event)"
  >
    <template
      v-if="!dsfrIcon && (icon || iconAttrs?.name) && !iconRight"
    >
      <VIcon
        class="fr-mr-1w"
        v-bind="iconProps"
      />
    </template>

    {{ label }}

    <template
      v-if="!dsfrIcon && (icon || iconAttrs?.name) && iconRight"
    >
      <VIcon
        class="fr-ml-1w"
        v-bind="iconProps"
      />
    </template>
  </component>
</template>
