<script>
import { defineComponent } from 'vue'

import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrToggleSwitch',

  props: {
    modelValue: Boolean,
    inputId: {
      type: String,
      default () {
        return getRandomId('toggle')
      },
    },
    hint: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    disabled: Boolean,
  },

  emits: ['update:modelValue'],
})
</script>

<template>
  <div class="fr-toggle">
    <input
      :id="inputId"
      :disabled="disabled"
      type="checkbox"
      :checked="modelValue"
      :data-testid="inputId"
      class="fr-toggle__input"
      :aria-describedby="`${inputId}-hint-text`"
      @input="$emit('update:modelValue', $event.target.checked)"
    >
    <label
      class="fr-toggle__label"
      :for="inputId"
      data-fr-checked-label="Activé"
      data-fr-unchecked-label="Désactivé"
    >{{ label }}<span
      v-if="modelValue"
      class="after"
    ><VIcon name="ri-check-line" /></span></label>
    <p
      v-if="hint"
      :id="`${inputId}-hint-text`"
      class="fr-hint-text"
    >
      {{ hint }}
    </p>
  </div>
</template>

<style src="./toggle.main.css" />

<style scoped>
.fr-toggle__label {
  color: var(--text-default-grey);
}

.fr-toggle__label::after {
  content: '';
}

.fr-toggle__label::before {
  content: '';
  margin-right: 0;
}

.after {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  text-indent: -9999px;
  z-index: 2001;
  color: var(--bf500)
}
</style>
