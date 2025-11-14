<script lang="ts" setup generic="T = string">
import type { DsfrTagProps } from './DsfrTags.types'

import { computed } from 'vue'

import VIcon from '../VIcon/VIcon.vue'

const props = withDefaults(defineProps<DsfrTagProps<T>>(), {
  label: undefined,
  link: undefined,
  tagName: 'p',
  icon: undefined,
  disabled: undefined,
})

defineEmits<{
  /** Émis lors de la sélection et désélection du tag */
  select: [[unknown, boolean]]
}>()

const isExternalLink = computed(() => typeof props.link === 'string' && props.link.startsWith('http'))
const is = computed(() => {
  return props.link
    ? (isExternalLink.value ? 'a' : 'RouterLink')
    : (((props.disabled && props.tagName === 'p') || props.selectable) ? 'button' : props.tagName)
})
const linkProps = computed(() => {
  return { [isExternalLink.value ? 'href' : 'to']: props.link }
})

const dsfrIcon = computed(() => typeof props.icon === 'string' && props.icon.startsWith('fr-icon-'))
const defaultScale = computed(() => props.small ? 0.65 : 0.9)
const iconProps = computed(() => typeof props.icon === 'string'
  ? { scale: defaultScale.value, name: props.icon }
  : { scale: defaultScale.value, ...props.icon },
)
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
    :aria-pressed="selectable ? selected : undefined"
    v-bind="{ ...linkProps, ...$attrs }"
    @click="!disabled && selectable && $emit('select', [value, selected || false])"
  >
    <VIcon
      v-if="props.icon && !dsfrIcon"
      :label="iconOnly ? label : undefined"
      :class="{ 'fr-mr-1v': !iconOnly }"
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
  color: var(--success-425-625);
  background-color: var(--success-975-75);
}
.error {
  color: var(--error-425-625);
  background-color: var(--error-950-100);
}
.warning {
  color: var(--warning-425-625);
  background-color: var(--warning-950-100);
}
.info {
  color: var(--info-425-625);
  background-color: var(--info-950-100);
}
</style>
