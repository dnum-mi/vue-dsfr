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
    hint: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue', 'blur', 'focus', 'keydown'],

  computed: {
    rich () {
      return !!this.img
    },
  },
})
</script>

<template>
  <div
    class="fr-radio-group"
    :class="rich ? 'fr-radio-rich' : ''"
  >
    <input
      :id="id"
      type="radio"
      role="radio"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      v-bind="$attrs"
      :aria-checked="modelValue === value"
      @click="$emit('update:modelValue', value)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      @keydown="$emit('keydown', $event)"
    >
    <label
      :for="id"
      class="fr-label"
    >
      {{ label }} {{ $attrs.required ? '*' : '' }}
      <span
        v-if="hint"
        class="fr-hint-text"
      >
        {{ hint }}
      </span>
    </label>
    <div
      v-if="img"
      class="fr-radio-rich__img"
    >
      <img
        :src="img"
        alt=""
      >
    </div>
  </div>
</template>

<style src="@gouvfr/dsfr/dist/component/radio/radio.main.min.css" />
