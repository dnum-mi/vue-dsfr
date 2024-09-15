<script lang="ts">
import { computed } from 'vue'
import { getRandomId } from '../../utils/random-utils'

import DsfrCheckbox from './DsfrCheckbox.vue'

import type { DsfrCheckboxSetProps } from './DsfrCheckbox.types'

export type { DsfrCheckboxSetProps }
</script>

<script lang="ts" setup>
const props = withDefaults(defineProps<DsfrCheckboxSetProps>(), {
  titleId: () => getRandomId('checkbox', 'group'),
  errorMessage: '',
  validMessage: '',
  legend: '',
  options: () => [],
  modelValue: () => [],
})

const message = computed(() => {
  return props.errorMessage || props.validMessage
})
const additionalMessageClass = computed(() => {
  return props.errorMessage ? 'fr-error-text' : 'fr-valid-text'
})

const ariaLabelledby = computed(() => message.value ? `${props.titleId} messages-${props.titleId}` : props.titleId)

const modelValue = defineModel()
</script>

<template>
  <div class="fr-form-group">
    <fieldset
      class="fr-fieldset"
      :class="{
        'fr-fieldset--error': errorMessage,
        'fr-fieldset--valid': !errorMessage && validMessage,
      }"
      :disabled="disabled"
      :aria-labelledby="ariaLabelledby"
      :aria-invalid="ariaInvalid"
      :role="(errorMessage || validMessage) ? 'group' : undefined"
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

      <slot>
        <DsfrCheckbox
          v-for="option in options"
          :id="option.id"
          :key="option.id || option.name"
          v-model="modelValue"
          :value="option.value"
          :name="option.name"
          :label="option.label"
          :disabled="option.disabled"
          :aria-disabled="option.disabled"
          :small="small"
          :inline="inline"
          :hint="option.hint"
        />
      </slot>
      <div
        v-if="message"
        :id="`messages-${titleId}`"
        class="fr-messages-group"
        role="alert"
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
