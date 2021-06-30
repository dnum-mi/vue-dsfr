<template>
  <label
    :class="{
      'fr-label': true,
      'invisible': !labelVisible,
    }"
    :for="id"
  >
    {{ label }}
  </label>
  <input
    :id="id"
    type="search"
    class="fr-input"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @keydown.esc="$emit('update:modelValue', '')"
  >
</template>

<script>
import { defineComponent } from 'vue'

import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrInput',
  props: {
    id: {
      type: String,
      default: getRandomId('search', 'input'),
    },
    label: {
      type: String,
      default: '',
    },
    labelVisible: Boolean,
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>

</style>
