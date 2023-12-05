<script lang="ts" setup>
import { computed } from 'vue'

import type { DsfrTableCellProps } from './DsfrTable.types'

export type { DsfrTableCellProps }

const props = withDefaults(defineProps<DsfrTableCellProps>(), {
  cellAttrs: () => ({}),
})

const component = computed(() => {
  return (typeof props.field === 'object' && props.field !== null && props.field.component) ? props.field.component : false
})
const isString = computed(() => {
  return typeof props.field === 'string'
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
      {{ isString ? field : (field as Record<string, any>).text }}
    </template>
  </td>
</template>
