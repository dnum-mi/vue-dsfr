<script>
import { defineComponent } from 'vue'

import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrSelect',

  props: {
    required: Boolean,
    selectId: {
      type: String,
      default () {
        return getRandomId('select')
      },
    },
    modelValue: {
      type: [String, Number],
      default: undefined,
    },
    label: {
      type: String,
      default: 'label par défaut du champ select',
    },
    options: {
      type: Array,
      default: () => [],
    },
    description: {
      type: String,
      default: undefined,
    },
    successMessage: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    disabled: Boolean,
  },

  emits: ['update:modelValue'],

  computed: {
    message () {
      return this.errorMessage || this.successMessage
    },
    messageType () {
      return this.errorMessage ? 'error' : 'valid'
    },
  },
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
            v-if="$attrs.required"
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
      name="select"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.value)"
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

<style src="@gouvfr/dsfr/dist/component/select/select.main.min.css" />
