<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrTableCell',

  props: {
    field: {
      type: [String, Object],
      default: undefined,
    },
  },

  computed: {
    isObject () {
      return typeof this.field === 'object'
    },
    isComponent () {
      return this.isObject ? this.field.component : false
    },
    classField () {
      return {
        label: typeof this.field === 'object',
        [this.field.color]: true,
      }
    },
  },
})
</script>

<template>
  <td>
    <component
      :is="isComponent"
      v-if="isComponent"
      v-bind="field"
    />
    <span v-else>
      {{ field }}
    </span>
  </td>
</template>

<style scoped>
.label {
  display: inline-block;
  width: 7rem;
  text-align: center;
  border-radius: 2rem;
}
</style>
