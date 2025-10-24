<script lang="ts" setup>
import type { DsfrSearchBarProps } from './DsfrSearchBar.types'

import { useRandomId } from '../../utils/random-utils'
import DsfrButton from '../DsfrButton/DsfrButton.vue'
import DsfrInput from '../DsfrInput/DsfrInput.vue'

export type { DsfrSearchBarProps }

withDefaults(defineProps<DsfrSearchBarProps>(), {
  id: () => useRandomId('search', 'input'),
  label: '',
  buttonText: '',
  modelValue: '',
  placeholder: 'Rechercher',
})

const emit = defineEmits<{
  'update:modelValue': [payload: string | number | undefined]
  search: [payload: string]
}>()
</script>

<template>
  <div
    class="fr-search-bar"
    :class="{ 'fr-search-bar--lg': large }"
    role="search"
  >
    <DsfrInput
      :id="id"
      type="search"
      :placeholder="placeholder"
      :model-value="modelValue"
      :label="label"
      :disabled="disabled"
      :aria-disabled="disabled"
      @update:model-value="emit('update:modelValue', $event)"
      @keydown.enter="emit('search', modelValue)"
    />
    <DsfrButton
      title="Rechercher"
      :disabled="disabled"
      :aria-disabled="disabled"
      @click="emit('search', modelValue)"
    >
      <template v-if="buttonText">
        {{ buttonText }}
      </template>
      <span
        v-else
        class="fr-sr-only"
      >
        Rechercher
      </span>
    </DsfrButton>
  </div>
</template>

<style>
.fr-search-bar > .fr-label + .fr-input {
  margin: 0;
}

/**
 * Obligé de faire ça car la couleur est codée en dur dans le DSFR
 * sans prendre en compte que ce champ pouvait être disabled.
 */
.fr-search-bar .fr-input:disabled {
  box-shadow: inset 0 -2px 0 0 var(--border-disabled-grey);
  color: var(--text-disabled-grey);
}
</style>
