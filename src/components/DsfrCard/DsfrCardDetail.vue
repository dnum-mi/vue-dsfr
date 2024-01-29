<script lang="ts" setup>
import { computed } from 'vue'
import type { OhVueIcon as VIcon } from 'oh-vue-icons'

import type { DsfrCardDetailProps } from './DsfrCard.types'

const props = defineProps<DsfrCardDetailProps>()

const dsfrIcon = computed(() => {
  return props.icon && typeof props.icon === 'string' && props.icon.startsWith('fr-') ? props.icon : ''
})
const iconProps = computed(() => dsfrIcon.value ? undefined : typeof props.icon === 'string' ? { name: props.icon } : props.icon)
</script>

<template>
  <p
    class="fr-card__detail"
    :class="dsfrIcon ? {[String(icon)]: dsfrIcon} : {}"
  >
    <VIcon
      v-if="icon && !dsfrIcon"
      v-bind="iconProps"
    />
    <slot />
  </p>
</template>
