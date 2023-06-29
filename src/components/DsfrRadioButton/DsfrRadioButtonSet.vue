<script lang="ts" setup>
import { computed } from 'vue'

import DsfrRadioButton, { type DsfrRadioButtonProps } from './DsfrRadioButton.vue'
import { getRandomId } from '../../utils/random-utils'

const props = withDefaults(defineProps<{
    titleId?: string,
    disabled?: boolean,
    inline?: boolean,
    required?: boolean,
    small?: boolean,
    name?: string,
    errorMessage?: string,
    validMessage?: string,
    legend?: string,
    modelValue: string | number,
    options?: DsfrRadioButtonProps[],
}>(), {
  titleId: () => getRandomId('radio-button', 'group'),
  errorMessage: '',
  validMessage: '',
  legend: '',
  name: 'no-name',
  options: () => [],
})

const emit = defineEmits<{(e: 'update:modelValue', payload: string | number): void}>()

const message = computed(() => props.errorMessage || props.validMessage)
const additionalMessageClass = computed(() => props.errorMessage ? 'fr-error-text' : 'fr-valid-text')

const onChange = ($event: string) => {
  if ($event === props.modelValue) {
    return
  }
  emit('update:modelValue', $event)
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
        v-if="legend"
        :id="titleId"
        class="fr-fieldset__legend fr-text--regular"
      >
        <!-- @slot Slot pour personnaliser tout le contenu de la balise <legend> cf. [DsfrInput](/?path=/story/composants-champ-de-saisie-champ-simple-dsfrinput--champ-avec-label-personnalise). Une **props porte le même nom pour une légende simple** (texte sans mise en forme) -->
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
        role="radiogroup"
      >
        <!-- @vue-ignore -->
        <DsfrRadioButton
          v-for="(option, i) of options"
          :key="option.value || i"
          :name="name"
          v-bind="option"
          :small="small"
          :model-value="modelValue"
          @update:model-value="onChange($event as string)"
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
          <span class="line-1">{{ message }}</span>
        </p>
      </div>
    </fieldset>
  </div>
</template>

<style>
.fr-fieldset--error .fr-radio-group .fr-label::before {
  box-shadow: inset 0 0 0 1px var(--border-plain-error), inset 0 0 0 12px var(--background-default-grey), inset 0 0 0 12px var(--border-plain-success)
}

.fr-fieldset--valid .fr-radio-group .fr-label::before {
  box-shadow: inset 0 0 0 1px var(--border-plain-success), inset 0 0 0 12px var(--background-default-grey), inset 0 0 0 12px var(--border-plain-success)
}
</style>
