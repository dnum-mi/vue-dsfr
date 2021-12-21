<script>
import { defineComponent } from 'vue'

import DsfrInput from './DsfrInput.vue'

import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrInputGroup',
  components: {
    DsfrInput,
  },

  props: {
    id: {
      type: String,
      default: undefined,
    },
    descriptionId: {
      type: String,
      default () {
        return getRandomId('input', 'message-desc')
      },
    },
    label: {
      type: String,
      default: '',
    },
    labelVisible: Boolean,
    modelValue: {
      type: String,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: 'Placeholder',
    },
    errorMessage: {
      type: String,
      default: undefined,
    },
    validMessage: {
      type: String,
      default: undefined,
    },
  },

  emits: ['update:modelValue'],

  computed: {
    message () {
      return this.errorMessage || this.validMessage
    },
    messageClass () {
      return this.errorMessage ? 'fr-error-text' : 'fr-valid-text'
    },
    messageIcon () {
      return this.errorMessage ? 'ri-alert-line' : 'ri-checkbox-circle-line'
    },
  },

})
</script>

<template>
  <div
    class="fr-input-group"
    :class="{
      'fr-input-group--error': errorMessage,
      'fr-input-group--valid': validMessage,
    }"
  >
    <slot />
    <DsfrInput
      v-if="modelValue !== undefined"
      :is-valid="!!validMessage"
      :is-invalid="!!errorMessage"
      :label="label"
      :description-id="descriptionId"
      :label-visible="labelVisible"
      :model-value="modelValue"
      :placeholder="placeholder"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
    <p
      v-if="message"
      :id="descriptionId"
      :class="messageClass"
    >
      <v-icon
        :name="messageIcon"
        scale="0.8"
        class="message-icon"
      />
      <span>{{ message }}</span>
    </p>
  </div>
</template>

<style src="./input.main.css" />

<style scoped>
.message-icon {
  margin-right: 0.25rem;
}
</style>
