<script lang="ts" setup>
import { getRandomId } from '../../utils/random-utils'

import DsfrInput from '../DsfrInput/DsfrInput.vue'
import DsfrButton from '../DsfrButton/DsfrButton.vue'

withDefaults(defineProps<{
  id?: string
  label?: string
  labelVisible?: boolean
  large?: boolean
  buttonText?: string
  modelValue?: string
  placeholder?: string
}>(), {
  id: () => getRandomId('search', 'input'),
  label: '',
  buttonText: '',
  modelValue: '',
  placeholder: 'Rechercher',
})

// eslint-disable-next-line func-call-spacing
defineEmits<{
  (e: 'update:modelValue', payload: string): void,
  (e: 'search', payload: string): void,
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
      :label-visible="false"
      :label="label"
      @update:model-value="$emit('update:modelValue', $event)"
      @keydown.enter="$emit('search')"
    />
    <DsfrButton
      title="Rechercher"
      @click="$emit('search')"
    >
      {{ buttonText }}
    </DsfrButton>
  </div>
</template>

<style>
.fr-search-bar > .fr-label + .fr-input {
  margin: 0;
}
</style>
