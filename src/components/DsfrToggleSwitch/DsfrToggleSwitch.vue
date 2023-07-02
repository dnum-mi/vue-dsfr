<script lang="ts" setup>
import { computed } from 'vue'

import { getRandomId } from '../../utils/random-utils'

const props = withDefaults(defineProps<{
  modelValue?: boolean
  inputId?: string
  hint?: string
  label?: string
  disabled?: boolean
}>(), {
  inputId: () => getRandomId('toggle'),
  hint: '',
  label: '',
})

defineEmits<{(e: 'update:modelValue', payload: boolean): void}>()

const labelId = computed(() => {
  return `${props.inputId}-hint-text`
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
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
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
