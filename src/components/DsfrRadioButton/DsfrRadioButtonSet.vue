<script lang="ts" setup>
import { computed } from 'vue'

import { useRandomId } from '../../utils/random-utils'

import DsfrRadioButton from './DsfrRadioButton.vue'
import type { DsfrRadioButtonSetProps } from './DsfrRadioButton.types'

export type { DsfrRadioButtonSetProps }

const props = withDefaults(defineProps<DsfrRadioButtonSetProps>(), {
  titleId: () => useRandomId('radio-button', 'group'),
  errorMessage: '',
  validMessage: '',
  legend: '',
  hint: '',
  options: () => [],
})

const emit = defineEmits<{ (e: 'update:modelValue', payload: string | number | boolean): void }>()

const message = computed(() => props.errorMessage || props.validMessage)
const additionalMessageClass = computed(() => props.errorMessage ? 'fr-error-text' : 'fr-valid-text')

const onChange = ($event: string) => {
  if ($event === props.modelValue) {
    return
  }
  emit('update:modelValue', $event)
}

const describedByElement = computed(() => message.value ? `messages-${props.titleId}` : undefined)
</script>

<template>
  <div class="fr-form-group">
    <fieldset
      class="fr-fieldset"
      :class="{
        'fr-fieldset--error': errorMessage,
        'fr-fieldset--valid': validMessage,
      }"
      :disabled="disabled"
      :aria-labelledby="titleId"
      :aria-describedby="describedByElement"
      :aria-invalid="ariaInvalid"
      :role="(errorMessage || validMessage) ? 'group' : undefined"
    >
      <legend
        v-if="legend || $slots.legend || hint || $slots.hint"
        :id="titleId"
        class="fr-fieldset__legend fr-fieldset__legend--regular"
      >
        <!-- @slot Slot pour personnaliser tout le contenu de la balise <legend> cf. [DsfrInput](/?path=/story/composants-champ-de-saisie-champ-simple-dsfrinput--champ-avec-label-personnalise). Une **props porte le même nom pour une légende simple** (texte sans mise en forme) -->
        <slot name="legend">
          {{ legend }}
          <span
            v-if="hint || $slots.hint"
            class="fr-hint-text"
          >
            <slot name="hint">
              {{ hint }}
            </slot>
          </span>
          <!-- @slot Slot pour indiquer que le champ est obligatoire. Par défaut, met une astérisque si `required` est à true (dans un `<span class="required">`) -->
          <slot name="required-tip">
            <span
              v-if="required"
              class="required"
            >&nbsp;*</span>
          </slot>
        </slot>
      </legend>

      <slot>
        <DsfrRadioButton
          v-for="(option, i) of options"
          :key="typeof option.value === 'boolean' ? i : (option.value || i)"
          :name="name"
          :aria-disabled="option.disabled"
          v-bind="option"
          :small="small"
          :inline="inline"
          :model-value="modelValue"
          @update:model-value="onChange($event as string)"
        />
      </slot>

      <div
        v-if="message"
        :id="`messages-${titleId}`"
        class="fr-messages-group"
        aria-live="assertive"
        role="alert"
      >
        <p
          class="fr-message  fr-message--info  flex  items-center"
          :class="additionalMessageClass"
        >
          {{ message }}
        </p>
      </div>
    </fieldset>
  </div>
</template>
