<template>
  <div class="fr-radio-group">
    <input
      :id="id"
      type="radio"
      :value="value"
      :checked="modelValue === value"
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

<style scoped>
.fr-label {
  color: var(--g800)
}

.fr-radio-group:first-child {
    margin-top: -0.75rem;
}

.fr-hint-text {
  margin: 0;
  grid-row: 2;
  grid-column: 1;
  display: block;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: var(--g600);
}

input[type="radio"] + label {
    position: relative;
    padding: 0.75rem 0;
    font-size: 1rem;
    line-height: 1.5rem;
    -webkit-tap-highlight-color: transparent;
    display: grid;
    display: -ms-grid;
    grid-row: 1;
    grid-column: 2;
    align-items: center;
    grid-template-columns: 1fr 2rem;
    text-align: left;
    direction: rtl;
    cursor: pointer;
}

input[type="radio"][disabled] + label,
fieldset[disabled] input[type="radio"] + label
 {
  color: var(--g600-g400);
  filter: grayscale(1);
  cursor: not-allowed;
}

input[type="radio"] + label::before {
    display: inline-block;
    content: "";
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
    flex-shrink: 0;
    border: 1px solid;
    border-radius: 50%;
    transform-origin: center;
    grid-row: 1;
    -ms-grid-row: 1;
    grid-column: 2;
    -ms-grid-column: 2;
    align-items: center;
    -ms-align-items: center;
    transition: transform 0.3s;
}

input[type="radio"] + label::before {
    outline-color: var(--focus);
    outline-offset: 2px;
    outline-width: 2px;
    unicode-bidi: plaintext;
}

input[type="radio"][disabled] + label::before,
fieldset[disabled] input[type="radio"] + label::before {
  background-color: var(--g200);
  border: 1px solid var(--g400);
  outline-style: none;
}

input[type="radio"]:checked + label::before {
  box-shadow: inset 0 0 0 5px var(--w);
  background-color: var(--bf500);
  border: 1px solid var(--bf500);
}

input[type="radio"]:focus:not(:focus-visible) + label::before {
    outline-style: none;
}

input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}
</style>
