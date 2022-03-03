
<script>
import DsfrRadioButton from './DsfrRadioButton.vue'

export default {
  name: 'DsfrRadioButtonSet',

  components: {
    DsfrRadioButton,
  },

  props: {
    disabled: Boolean,
    inline: Boolean,
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
      return this.errorMessage ? 'fr-error-text' : 'fr-valid-text'
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
        id="radio-legend"
        class="fr-fieldset__legend"
      >
        {{ legend }}
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
          @update:modelValue="onChange"
        />
      </div>
      <p
        v-if="message"
        class="fr-message-text  flex  items-center"
        :class="additionalMessageClass"
      >
        <span class="line-1">{{ message }}</span>
      </p>
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
