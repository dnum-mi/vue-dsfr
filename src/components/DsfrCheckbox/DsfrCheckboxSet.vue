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
        id="checkboxes-legend"
        class="fr-fieldset__legend fr-text--regular"
      >
        Légende de l'ensemble des champs
      </legend>
      <div class="fr-fieldset__content">
        <DsfrCheckbox
          v-for="option in options"
          :id="option.id"
          :key="option.id || option.name"
          data-testid="t-checkbox"
          :name="option.name"
          :label="option.label"
          :disabled="option.disabled"
          :model-value="option.checked"
          :hint="option.hint"
          @update:model-value="onChange({ name: option.name, checked: $event })"
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
import DsfrCheckbox from './DsfrCheckbox.vue'

export default {
  name: 'DsfrCheckboxSet',
  components: {
    DsfrCheckbox,
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
    messageIcon () {
      return this.errorMessage ? 'ri-error-warning-line' : 'ri-checkbox-circle-line'
    },
  },

  methods: {
    onChange ({ name, checked }) {
      const selected = checked
        ? [...this.modelValue, name]
        : [...this.modelValue.filter(val => val !== name)]
      this.$emit('update:modelValue', selected)
    },
  },
}
</script>

<style scoped>
.fr-fieldset legend {
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700!important;
}

.fr-fieldset--inline {
  & .fr-fieldset__content {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: -0.75rem 0;
  }

  & :deep(.fr-checkbox-group) {
    display: inline-flex;
  }

  & :deep(.fr-checkbox-group:not(:last-child) input[type="checkbox" i] + label) {
    margin-right: 1.75rem;
  }
}

.fr-fieldset--valid :deep(.fr-label) {
  color: var(--success);
}

.fr-fieldset--valid :deep(.fr-hint-text) {
  color: var(--success);
}

.fr-fieldset--error :deep(.fr-label) {
  color: var(--error);
}

.fr-fieldset--error :deep(.fr-hint-text) {
  color: var(--error);
}

.fr-message-text {
  line-height: 0.75rem;

  & span {
    margin-left: 0.25rem;
  }
}
</style>
