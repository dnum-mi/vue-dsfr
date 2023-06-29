<script lang="ts" setup>
import { computed } from 'vue'
import { getRandomId } from '../../utils/random-utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  required?: boolean
  disabled?: boolean
  selectId?: string
  description?: string
  modelValue?: string | number
  label?: string
  options?:(string | number | { value: string | number, text: string, disabled: boolean })[]
}>(), {
  selectId: () => getRandomId('select'),
  modelValue: undefined,
  options: () => [],
  label: '',
  description: undefined,
  successMessage: '',
  errorMessage: '',
})

defineEmits<{(e: 'update:modelValue', payload: string): void}>()

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
      :name="selectId"
      :disabled="disabled"
      :required="required"
      @change="$emit('update:modelValue',($event.target as HTMLInputElement)?.value)"
    >
      <option
        value=""
        :selected="modelValue == null"
        disabled
        hidden
      >
        Sélectionnez une option
      </option>

      <option
        v-for="(option, index) in options"
        :key="index"
        :selected="modelValue === option || (typeof option === 'object' && option.value === modelValue)"
        :value="typeof option === 'object' ? option.value : option"
        :disabled="!!(typeof option === 'object' && option.disabled)"
      >
        {{ typeof option === 'object' ? option.text : option }}
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
