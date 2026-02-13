<script lang="ts" setup>
import type { DsfrToggleSwitchProps } from './DsfrToggleSwitch.types'

import { computed } from 'vue'

import { useRandomId } from '../../utils/random-utils'

export type { DsfrToggleSwitchProps }

const props = withDefaults(defineProps<DsfrToggleSwitchProps>(), {
  inputId: () => useRandomId('toggle'),
  hint: '',
  label: '',
  labelLeft: false,
  borderBottom: false,
  activeText: 'Activé',
  inactiveText: 'Désactivé',
  noText: false,
  name: undefined,
  status: undefined,
})

const emit = defineEmits<{
  /** Émis par le composant DsfrToggleSwitch */
  'update:modelValue': [payload: boolean]
}>()

const labelId = computed(() => {
  return `${props.inputId}-label`
})

const message = computed(() => {
  if (props.status === 'valid') {
    return props.validMessage
  }
  if (props.status === 'error') {
    return props.errorMessage
  }
  return undefined
})
</script>

<template>
  <div
    class="fr-toggle"
    :class="{
      [`fr-toggle--${status}`]: status,
      'fr-toggle--border-bottom': borderBottom,
    }"
  >
    <input
      :id="inputId"
      :disabled="disabled"
      :aria-disabled="disabled"
      type="checkbox"
      :checked="modelValue"
      :data-testid="inputId"
      class="fr-toggle__input"
      :aria-describedby="labelId"
      :name="name"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >
    <label
      :id="labelId"
      class="fr-toggle__label"
      :for="inputId"
      :data-fr-checked-label="noText ? undefined : activeText"
      :data-fr-unchecked-label="noText ? undefined : inactiveText"
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
    <div
      v-if="status"
      :id="`${labelId}-messages`"
      class="fr-messages-group"
      aria-live="polite"
    >
      <p
        :id="`${labelId}-message-${status}`"
        class="fr-message"
        :class="{
          'fr-message--error': status === 'error',
          'fr-message--valid': status === 'valid',
        }"
      >
        {{ message }}
      </p>
    </div>
  </div>
</template>
