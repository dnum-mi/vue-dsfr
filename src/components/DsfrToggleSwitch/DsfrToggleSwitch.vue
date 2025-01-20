<script lang="ts" setup>
import { computed } from 'vue'

import { useRandomId } from '../../utils/random-utils'

import type { DsfrToggleSwitchProps } from './DsfrToggleSwitch.types'

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
})

defineEmits<{ (e: 'update:modelValue', payload: boolean): void }>()

const labelId = computed(() => {
  return `${props.inputId}-hint-text`
})
</script>

<template>
  <div
    class="fr-toggle"
    :class="{
      'fr-toggle--label-left': labelLeft,
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
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
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
  </div>
</template>
