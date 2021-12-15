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
    :type="type"
    class="fr-input"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @keydown.esc="$emit('update:modelValue', '')"
    v-bind="$attrs"
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
      default () {
        return getRandomId('basic', 'input')
      },
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
    type: {
      type: String,
      default: 'text',
    },
  },
  emits: ['update:modelValue', 'keydown', 'input'],
})
</script>

<style scoped>
.fr-label {
  font-size: 1rem;
  display: block;
  color: var(--g800);

  &.invisible {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
}

.fr-input {
  margin: 0.5rem 0 0 0;
  border: 0;
  border-radius: 0.25rem 0.25rem 0 0;
  padding: 0.5rem;
  max-height: none;
  font-size: 1rem;
  box-shadow: inset 0 -2px 0 0 var(--g600);
  color: var(--g800);
  background-color: var(--g200);

  &::placeholder {
    font-style: italic;
    color: var(--g600-g400);
    opacity: 1;
  }
}
</style>
