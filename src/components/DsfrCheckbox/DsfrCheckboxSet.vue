<script lang="ts" setup>
import { InputHTMLAttributes, computed } from 'vue'

import DsfrCheckbox from './DsfrCheckbox.vue'
import { getRandomId } from '../../utils/random-utils'

import type { DsfrCheckboxProps } from './DsfrCheckbox.vue'

const props = withDefaults(defineProps<{
  titleId?: string
  disabled?: boolean,
  inline?: boolean,
  required?: boolean,
  small?: boolean,
  errorMessage?: string
  validMessage?: string
  legend?: string
  options?:(DsfrCheckboxProps & InputHTMLAttributes)[]
  modelValue?: string[],
}>(), {
  titleId: () => getRandomId('checkbox', 'group'),
  errorMessage: '',
  validMessage: '',
  legend: '',
  options: () => [],
  modelValue: () => [],
})

const emit = defineEmits<{(e: 'update:modelValue', payload: string[]): void}>()

const message = computed(() => {
  return props.errorMessage || props.validMessage
})
const additionalMessageClass = computed(() => {
  return props.errorMessage ? 'fr-error-text' : 'fr-valid-text'
})

const onChange = ({ name, checked }: { name: string, checked: boolean }) => {
  const selected = checked
    ? [...props.modelValue, name]
    : props.modelValue.filter(val => val !== name)
  emit('update:modelValue', selected)
}
</script>

<template>
  <div class="fr-form-group">
    <fieldset
      class="fr-fieldset"
      :class="{
        'fr-fieldset--error': errorMessage,
        'fr-fieldset--valid': validMessage,
        'fr-fieldset--inline': inline
      }"
      :disabled="disabled"
    >
      <legend
        :id="titleId"
        class="fr-fieldset__legend fr-text--regular"
      >
        <!-- @slot Slot pour personnaliser tout le contenu de la balise <legend> cf. [DsfrInput](/?path=/story/composants-champ-de-saisie-champ-simple-dsfrinput--champ-avec-label-personnalise). Une **rte le même nom pour une légende simple** (texte sans mise en forme) -->
        <slot name="legend">
          {{ legend }}
          <!-- @slot Slot pour indiquer que le champ est obligatoire. Par défaut, met une astérisque si `required` est à true (dans un `<span class="required">`) -->
          <slot name="required-tip">
            <span
              v-if="required"
              class="required"
            >&nbsp;*</span>
          </slot>
        </slot>
      </legend>
      <div
        class="fr-fieldset__content"
        role="group"
        :aria-labelledby="titleId"
      >
        <DsfrCheckbox
          v-for="option in options"
          :id="option.id"
          :key="option.id || option.name"
          :name="option.name"
          :label="option.label"
          :disabled="option.disabled"
          :small="small"
          :model-value="modelValue.includes(option.name)"
          :hint="option.hint"
          @update:model-value="onChange({ name: option.name, checked: $event })"
        />
      </div>
      <div
        v-if="message"
        class="fr-messages-group"
      >
        <p
          class="fr-message--info  flex  items-center"
          :class="additionalMessageClass"
        >
          <span>{{ message }}</span>
        </p>
      </div>
    </fieldset>
  </div>
</template>
