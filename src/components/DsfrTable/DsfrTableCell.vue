<script lang="ts" setup>
import type { DsfrTableCellProps } from './DsfrTable.types'

import { computed } from 'vue'

export type { DsfrTableCellProps }

const props = withDefaults(defineProps<DsfrTableCellProps>(), {
  cellAttrs: () => ({}),
})

const component = computed(() => {
  return (typeof props.field === 'object' && props.field !== null && props.field.component) ? props.field.component : false
})
const isPrimitive = computed(() => {
  return ['string', 'number', 'boolean'].includes(typeof props.field)
})
</script>

<template>
  <td v-bind="cellAttrs">
    <component
      :is="component"
      v-if="component"
      v-bind="typeof field === 'object' ? field : {}"
    >
      {{ (field as Record<string, any>).text }}
    </component>
    <template v-else>
      {{ isPrimitive ? field : (field as Record<string, any>).text }}
    </template>
  </td>
</template>
