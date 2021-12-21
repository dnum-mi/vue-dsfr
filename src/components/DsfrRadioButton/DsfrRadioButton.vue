<template>
  <div class="fr-radio-group">
    <input
      :id="id"
      type="radio"
      role="radio"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      :aria-checked="modelValue === value"
      :disabled="disabled"
      @click="$emit('update:modelValue', value)"
    >
    <label
      :for="id"
      class="fr-label"
    >
      {{ label }}
      <span
        v-if="hint"
        class="fr-hint-text"
      >
        {{ hint }}
      </span>
    </label>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrRadioButton',
  props: {
    id: {
      type: String,
      default () {
        return getRandomId('basic', 'checkbox')
      },
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    disabled: Boolean,
    hint: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],
})
</script>

<style src="./radio.main.css" />
