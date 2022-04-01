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
      {{ label }} {{ required ? '*' : '' }}
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
