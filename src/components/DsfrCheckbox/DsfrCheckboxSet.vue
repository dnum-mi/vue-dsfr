<script>
import { defineComponent } from 'vue'

import DsfrCheckbox from './DsfrCheckbox.vue'
import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrCheckboxSet',

  components: {
    DsfrCheckbox,
  },

  props: {
    titleId: {
      type: String,
      default () {
        return getRandomId('checkbox', 'group')
      },
    },
    disabled: Boolean,
    inline: Boolean,
    required: Boolean,
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
    options: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: Array,
      default: () => [],
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

  methods: {
    onChange ({ name, checked }) {
      const selected = checked
        ? [...this.modelValue, name]
        : this.modelValue.filter(val => val !== name)
      this.$emit('update:modelValue', selected)
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
        class="fr-fieldset__element"
        role="group"
        :aria-labelledby="titleId"
      >
        <DsfrCheckbox
          v-for="option in options"
          :id="option.id"
          :key="option.id || option.name"
          data-testid="t-checkbox"
          :name="option.name"
          :label="option.label"
          :disabled="option.disabled"
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
