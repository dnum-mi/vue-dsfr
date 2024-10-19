<script lang="ts" setup>
import { computed } from 'vue'
import { getRandomId } from '../../utils/random-utils'

import type { DsfrSelectProps } from './DsfrSelect.types'

export type { DsfrSelectProps }

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DsfrSelectProps>(), {
  selectId: () => getRandomId('select'),
  modelValue: undefined,
  options: () => [],
  label: '',
  name: undefined,
  description: undefined,
  successMessage: '',
  errorMessage: '',
  defaultUnselectedText: 'Sélectionner une option',
})

defineEmits<{ (e: 'update:modelValue', payload: string | number): void }>()

const message = computed(() => {
  return props.errorMessage || props.successMessage
})
const messageType = computed(() => {
  return props.errorMessage ? 'error' : 'valid'
})
</script>

<template>
  <div
    class="fr-select-group"
    :class="{ [`fr-select-group--${messageType}`]: message }"
  >
    <label
      class="fr-label"
      :for="selectId"
    >
      <!-- @slot Slot pour personnaliser tout le contenu de la balise <label> cf. [DsfrInput](/?path=/story/composants-champ-de-saisie-champ-simple-dsfrinput--champ-avec-label-personnalise). Une **props porte le même nom pour un label simple** (texte sans mise en forme) -->
      <slot name="label">
        {{ label }}
        <!-- @slot Slot pour indiquer que le champ est obligatoire. Par défaut, met une astérisque si `required` est à true (dans un `<span class="required">`) -->
        <slot name="required-tip">
          <span
            v-if="required"
            class="required"
          >&nbsp;*</span>
        </slot>
      </slot>

      <span
        v-if="description"
        class="fr-hint-text"
      >{{ description }}</span>
    </label>

    <select
      :id="selectId"
      :class="{ [`fr-select--${messageType}`]: message }"
      class="fr-select"
      :name="name || selectId"
      :disabled="disabled"
      :aria-disabled="disabled"
      :required="required"
      v-bind="$attrs"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
    >
      <option
        :selected="modelValue == null || !options.some(option => typeof option !== 'object' ? option !== modelValue : option.value === modelValue)"
        disabled
        hidden
      >
        {{ defaultUnselectedText }}
      </option>

      <option
        v-for="(option, index) in options"
        :key="index"
        :selected="modelValue === option || (typeof option === 'object' && option!.value === modelValue)"
        :value="typeof option === 'object' ? option!.value : option"
        :disabled="!!(typeof option === 'object' && option!.disabled)"
        :aria-disabled="!!(typeof option === 'object' && option!.disabled)"
      >
        {{ typeof option === 'object' ? option!.text : option }}
      </option>
    </select>

    <p
      v-if="message"
      :id="`select-${messageType}-desc-${messageType}`"
      :class="`fr-${messageType}-text`"
    >
      {{ message }}
    </p>
  </div>
</template>
