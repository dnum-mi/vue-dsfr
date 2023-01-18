
<script>
import { defineComponent } from 'vue'

import DsfrRadioButton from './DsfrRadioButton.vue'
import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrRadioButtonSet',

  components: {
    DsfrRadioButton,
  },

  props: {
    titleId: {
      type: String,
      default () {
        return getRandomId('radio-button', 'group')
      },
    },
    disabled: Boolean,
    inline: Boolean,
    required: Boolean,
    name: {
      type: String,
      default: 'no-name',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    validMessage: {
      type: String,
      default: '',
    },
    legend: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    options: {
      type: Array,
      default () { return [] },
    },
  },

  emits: ['update:modelValue'],

  computed: {
    message () {
      return this.errorMessage || this.validMessage
    },
    additionalMessageClass () {
      return this.errorMessage ? 'fr-message--error' : 'fr-message--valid'
    },
    messageIcon () {
      return this.errorMessage ? 'ri-alert-line' : 'ri-checkbox-circle-line'
    },
  },

  methods: {
    onChange ($event) {
      if ($event === this.modelValue) {
        return
      }
      this.$emit('update:modelValue', $event)
    },
  },
})
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
        <DsfrRadioButton
          v-for="(option, i) of options"
          :key="option.value || i"
          :name="name"
          v-bind="option"
          :model-value="modelValue"
          @update:model-value="onChange"
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
