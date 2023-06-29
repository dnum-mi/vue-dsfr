<script lang="ts" setup>
import { computed, type HTMLAttributes } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { type RouteLocationRaw } from 'vue-router'

export type DsfrHeaderMenuLinkProps = {
  button?: boolean
  icon?: string
  iconAttrs?: HTMLAttributes
  iconRight?: boolean
  label?: string
  target?: string
  onClick?: ($event: MouseEvent) => void
  to?: RouteLocationRaw
  href?: string
}

const props = withDefaults(defineProps<DsfrHeaderMenuLinkProps>(), {
  icon: '',
  iconAttrs: () => ({}),
  onClick: () => undefined,
  target: '_self',
  label: '',
  href: undefined,
  to: undefined,
  path: '',
})

const is = computed(() => {
  if (props.button) {
    return 'button'
  }
  return isExternalLink.value || isMailto.value ? 'a' : 'RouterLink'
})
const isPathString = computed(() => {
  return typeof props.path === 'string'
})
const isExternalLink = computed(() => {
  return props.href?.startsWith('http') || (isPathString.value && props.path.startsWith('http'))
})
const isMailto = computed(() => {
  return props.href?.startsWith('mailto') || (isPathString.value && props.path.startsWith('mailto'))
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
</script>

<template>
  <component
    :is="is"
    class="fr-btn"
    v-bind="linkData"
    :target="target"
    @click.stop="onClick"
  >
    <VIcon
      v-if="(icon || iconAttrs) && !iconRight"
      :name="icon"
      class="fr-mr-1w"
      v-bind="iconAttrs"
    />

    {{ label }}

    <VIcon
      v-if="(icon || iconAttrs) && iconRight"
      :name="icon"
      class="fr-ml-1w"
      v-bind="iconAttrs"
    />
  </component>
</template>
