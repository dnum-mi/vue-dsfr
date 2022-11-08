<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrTableCell',

  props: {
    field: {
      type: [String, Object],
      default: undefined,
    },
    cellAttrs: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    isObject () {
      return typeof this.field === 'object' && this.field !== null
    },
    isComponent () {
      return (this.isObject && this.field.component) ? this.field.component : false
    },
    isString () {
      return typeof this.field === 'string'
    },
  },
})
</script>

<template>
  <td v-bind="cellAttrs">
    <component
      :is="isComponent"
      v-if="isComponent"
      v-bind="field"
      :on-click="field.onClick() || false"
    >
      {{ field.text }}
    </component>
    <template v-else>
      {{ isString ? field : field.text }}
    </template>
  </td>
</template>
