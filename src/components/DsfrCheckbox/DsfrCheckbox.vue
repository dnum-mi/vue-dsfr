<script lang="ts" setup>
import { computed } from 'vue'
import { getRandomId } from '../../utils/random-utils'

export type DsfrCheckboxProps = {
  id?: string
  name: string
  required?: boolean
  modelValue?: boolean
  small?: boolean
  label?: string
  errorMessage?: string
  validMessage?: string
  hint?: string
}

const props = withDefaults(defineProps<DsfrCheckboxProps>(), {
  id: () => getRandomId('basic', 'checkbox'),
  hint: '',
  errorMessage: '',
  validMessage: '',
  label: '',
})

const emit = defineEmits<{(event: 'update:modelValue', value: boolean): void}>()

const message = computed(() => props.errorMessage || props.validMessage)

const additionalMessageClass = computed(() => props.errorMessage ? 'fr-error-text' : 'fr-valid-text')

const emitNewValue = ($event: InputEvent) => {
  // @ts-ignore This is a checkbox input event, so `checked` property is present
  emit('update:modelValue', $event.target.checked)
}
</script>

<template>
  <div
    class="fr-checkbox-group"
    :class="{
      'fr-checkbox-group--error': errorMessage,
      'fr-checkbox-group--valid': validMessage,
      'fr-checkbox-group--sm': small,
    }"
  >
    <input
      :id="id"
      :name="name"
      type="checkbox"
      :checked="modelValue"
      v-bind="$attrs"
      :data-testid="`input-checkbox-${id}`"
      :data-test="`input-checkbox-${id}`"
      @change="emitNewValue($event as InputEvent)"
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
      class="fr-messages-group"
    >
      <p
        class="fr-message--info  flex  items-center"
        :class="additionalMessageClass"
      >
        {{ message }}
      </p>
    </div>
  </div>
</template>
