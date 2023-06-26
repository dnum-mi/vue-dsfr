<script lang="ts" setup>
import { TdHTMLAttributes, computed } from 'vue'

export type DsfrTableCellProps = {
  field?: string | Record<string, any>
  cellAttrs?: TdHTMLAttributes
}

const props = withDefaults(defineProps<DsfrTableCellProps>(), {
  field: undefined,
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
      v-bind="field"
    >
      {{ field.text }}
    </component>
    <template v-else>
      {{ isString ? field : field.text }}
    </template>
  </td>
</template>
