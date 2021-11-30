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
          v-for="option of options"
          :key="option.value"
          :name="name"
          v-bind="option"
          @update:modelValue="onChange"
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
      return this.errorMessage ? 'ri-error-warning-line' : 'ri-checkbox-circle-line'
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

.fr-fieldset--inline {
  & .fr-fieldset__content {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: -0.75rem 0;
  }

  & :deep(.fr-radio-group) {
    display: inline-flex;
  }

  & :deep(.fr-radio-group:not(:last-child) input[type="radio" i] + label) {
    margin-right: 1.75rem;
  }
}

.fr-fieldset--error :deep(.fr-label) {
  color: var(--error);
}

.fr-fieldset--error :deep(.fr-hint-text) {
  color: var(--error);
}

.fr-fieldset--valid :deep(.fr-label) {
  color: var(--success);
}

.fr-fieldset--valid :deep(.fr-hint-text) {
  color: var(--success);
}
</style>
