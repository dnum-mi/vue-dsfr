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
    component () {
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
