<script lang="ts" setup>
import type { DsfrCheckboxProps } from './DsfrCheckbox.types'

import { computed } from 'vue'

import { useRandomId } from '../../utils/random-utils'

export type { DsfrCheckboxProps }

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DsfrCheckboxProps>(), {
  id: () => useRandomId('basic', 'checkbox'),
  hint: '',
  errorMessage: '',
  validMessage: '',
  label: '',
  readonlyOpacity: 0.75,
})

/**
 * Slots disponibles pour DsfrCheckbox
 */
defineSlots<{
  /**
   * Slot pour personnaliser tout le contenu de la balise <label>
   */
  label?: () => any
  /**
   * Slot pour indiquer que le champ est obligatoire
   */
  'required-tip'?: () => any
}>()

const message = computed(() => props.errorMessage || props.validMessage)
const messageId = computed(() => message.value ? useRandomId('message', 'checkbox') : undefined)

const additionalMessageClass = computed(() => props.errorMessage ? 'fr-error-text' : 'fr-valid-text')
const modelValue = defineModel()
</script>

<template>
  <div
    class="fr-fieldset__element"
    :class="{ 'fr-fieldset__element--inline': inline, readonly }"
  >
    <div
      class="fr-checkbox-group"
      :class="{
        'fr-checkbox-group--error': errorMessage,
        'fr-checkbox-group--valid': !errorMessage && validMessage,
        'fr-checkbox-group--sm': small,
      }"
    >
      <input
        :id="id"
        v-model="modelValue"
        :name="name"
        type="checkbox"
        :value="value"
        :checked="modelValue === true || (Array.isArray(modelValue) && modelValue.includes(value))"
        :indeterminate
        :required
        v-bind="$attrs"
        :data-testid="`input-checkbox-${id}`"
        :data-test="`input-checkbox-${id}`"
        :tabindex="readonly ? -1 : undefined"
        :aria-describedby="messageId"
      >
      <label
        :for="id"
        class="fr-label"
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
          v-if="hint"
          class="fr-hint-text"
        >
          {{ hint }}
        </span>
      </label>
      <div
        v-if="message"
        :id="messageId"
        class="fr-messages-group"
        aria-live="assertive"
        role="alert"
      >
        <p
          class="fr-message--info  flex  items-center"
          :class="additionalMessageClass"
        >
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fr-fieldset__element.readonly {
  pointer-events: none;
  cursor: not-allowed;
  opacity: v-bind('readonlyOpacity');
}

/* Styles temporaires pour visualiser l'état indeterminate (en attente DSFR 1.15.0) */
:deep(input[type="checkbox"]:indeterminate + label::before) {
  background-color: var(--blue-france-sun-113-625, #000091);
  border-color: var(--blue-france-sun-113-625, #000091);
}

:deep(input[type="checkbox"]:indeterminate + label::after) {
  /* Tiret horizontal blanc sur fond bleu, remplace le checkmark SVG DSFR */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath stroke='%23fff' stroke-width='2.5' stroke-linecap='round' d='M6 12h12'/%3E%3C/svg%3E");
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
