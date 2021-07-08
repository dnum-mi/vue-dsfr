<template>
  <div class="fr-form-group">
    <fieldset
      class="fr-fieldset"
      :class="{ 'fr-fieldset--error': errorMessage, 'fr-fieldset--inline': inline }"
      :disabled="disabled"
    >
      <legend
        v-if="legend"
        id="radio-legend"
        class="fr-fieldset__legend"
      >
        {{ legend }}
      </legend>

      <div class="fr-fieldset__content">
        <DsfrRadioButton
          v-for="option in options"
          :key="option.value"
          :label="option.label"
          :disabled="option.disabled"
          :model-value="modelValue"
          :value="option.value"
          :hint="option.hint"
          @update:modelValue="$emit('update:modelValue', $event)"
        />
      </div>
      <p
        v-if="message"
        class="fr-message-text  flex  items-center"
        :class="additionalMessageClass"
      >
        <v-icon :name="messageIcon" />
        <span class="line-1">{{ message }}</span>
      </p>
    </fieldset>
  </div>
</template>

<script>
import DsfrRadioButton from './DsfrRadioButton.vue'
import VIcon from 'oh-vue-icons/dist/v3/icon.es'
import {
  RiErrorWarningLine,
} from 'oh-vue-icons/icons'

VIcon.add(RiErrorWarningLine)

export default {
  name: 'DsfrRadioButtonSet',
  components: {
    DsfrRadioButton,
    VIcon,
  },
  props: {
    disabled: Boolean,
    inline: Boolean,
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
      return this.errorMessage ? 'fr-error-text' : 'fr-valid-text'
    },
    messageIcon () {
      return this.errorMessage ? 'ri-error-warning-line' : 'ri-checkbox-circle-line'
    },
  },
}
</script>

<style scoped>
.line-1 {
  margin-left: 0.25rem;
  line-height: 1rem;
}
.fr-fieldset__legend {
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
}

.fr-fieldset--inline .fr-fieldset__content {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: -0.75rem 0;
}

.fr-fieldset--inline .fr-radio-group {
  display: inline-flex;
}

.fr-fieldset--error :deep(.fr-label) {
  color: var(--error);
}

.fr-fieldset--error :deep(.fr-hint-text) {
  color: var(--error);
}
</style>
