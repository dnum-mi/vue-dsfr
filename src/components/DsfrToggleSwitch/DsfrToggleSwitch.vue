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

<style src="@gouvfr/dsfr/dist/component/toggle/toggle.main.css" />
