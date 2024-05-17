<script lang="ts" setup>
import { computed } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

import type { DsfrTagProps } from './DsfrTags.types'

export type { DsfrTagProps }

const props = withDefaults(defineProps<DsfrTagProps>(), {
  label: undefined,
  link: undefined,
  tagName: 'p',
  icon: undefined,
})

const isExternalLink = computed(() => typeof props.link === 'string' && props.link.startsWith('http'))
const is = computed(() => {
  return props.link
    ? (isExternalLink.value ? 'a' : 'RouterLink')
    : ((props.disabled && props.tagName === 'p') ? 'button' : props.tagName)
})
const linkProps = computed(() => {
  return { [isExternalLink.value ? 'href' : 'to']: props.link }
})

const dsfrIcon = computed(() => typeof props.icon === 'string' && props.icon.startsWith('fr-icon-'))
const defaultScale = 0.9
const iconProps = computed(() => dsfrIcon.value ? undefined : typeof props.icon === 'string' ? { name: props.icon, scale: defaultScale } : { scale: defaultScale, ...(props.icon ?? {}) })
</script>

<template>
  <component
    :is="is"
    class="fr-tag"
    :disabled="disabled"
    :class="{
      'fr-tag--sm': small,
      [icon as string]: dsfrIcon,
      'fr-tag--icon-left': dsfrIcon,
    }"
    v-bind="linkProps"
  >
    <VIcon
      v-if="props.icon && !dsfrIcon"
      :label="iconOnly ? label : undefined"
      class="fr-mr-1v"
      v-bind="iconProps"
    />
    <template v-if="!iconOnly">
      {{ label }}
    </template>
    <!-- @slot Slot par défaut pour le contenu du tag -->
    <slot />
  </component>
</template>

<style scoped>
.ov-icon {
  margin-top: 0.1rem;
}

.fr-tag {
  align-items: center;
}

.success {
  color: var(--success);
  background-color: var(--bg-success);
}
.error {
  color: var(--error);
  background-color: var(--bg-error);
}
.warning {
  color: var(--warning);
  background-color: var(--bg-warning);
}
.info {
  color: var(--info);
  background-color: var(--bg-info);
}
</style>
