<script lang="ts" setup>
import { computed } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

import type { DsfrTableHeaderProps } from './DsfrTable.types'

export type { DsfrTableHeaderProps }

const props = withDefaults(defineProps<DsfrTableHeaderProps>(), {
  header: '',
  headerAttrs: () => ({}),
  icon: undefined,
})

const dsfrIcon = computed(() => {
  return props.icon && typeof props.icon === 'string' && props.icon.startsWith('fr-') ? props.icon : ''
})
const iconProps = computed(() => dsfrIcon.value ? undefined : typeof props.icon === 'string' ? { name: props.icon } : props.icon)
</script>

<template>
  <th
    v-bind="headerAttrs"
    scope="col"
  >
    {{ header }}
    <VIcon
      v-if="icon && !dsfrIcon"
      v-bind="iconProps"
    />
    <span
      v-if="dsfrIcon"
      :class="{[String(icon)]: dsfrIcon}"
    />
  </th>
</template>
