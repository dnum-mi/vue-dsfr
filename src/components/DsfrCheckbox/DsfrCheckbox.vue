<script>
import { defineComponent } from 'vue'

import { getRandomId } from '../../utils/random-utils'

export default defineComponent({
  name: 'DsfrCheckBox',
  props: {
    id: {
      type: String,
      default () {
        return getRandomId('basic', 'checkbox')
      },
    },
    name: {
      type: String,
      required: true,
    },
    required: Boolean,
    modelValue: Boolean,
    small: Boolean,
    label: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    validMessage: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],

  computed: {
    message () {
      return this.errorMessage || this.validMessage
    },
    additionalMessageClass () {
      return this.errorMessage ? 'fr-error-text' : 'fr-valid-text'
    },
  },
})
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
      @change="$emit('update:modelValue', $event.target.checked)"
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
