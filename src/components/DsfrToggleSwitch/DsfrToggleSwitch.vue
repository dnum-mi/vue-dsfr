<script>
import { defineComponent } from 'vue'

// import '@gouvfr/dsfr/dist/component/toggle/toggle.module.js'

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

  computed: {
    labelId () {
      return `${this.inputId}-hint-text`
    },
  },
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
      :aria-describedby="labelId"
      @input="$emit('update:modelValue', $event.target.checked)"
    >
    <label
      :id="labelId"
      class="fr-toggle__label"
      :for="inputId"
      data-fr-checked-label="Activé"
      data-fr-unchecked-label="Désactivé"
      style="--toggle-status-width: 3.55208125rem;"
    >
      {{ label }}
    </label>
    <p
      v-if="hint"
      :id="`${inputId}-hint-text`"
      class="fr-hint-text"
    >
      {{ hint }}
    </p>
  </div>
</template>
