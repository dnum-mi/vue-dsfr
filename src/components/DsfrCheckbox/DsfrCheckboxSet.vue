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
        {{ legend }}
      </legend>
      <div
        class="fr-fieldset__content"
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
          :model-value="modelValue.includes(option.value)"
          :hint="option.hint"
          @update:model-value="onChange({ name: option.name, checked: $event })"
        />
      </div>
      <p
        v-if="message"
        class="fr-message-text  flex  items-center"
        :class="additionalMessageClass"
      >
        <v-icon
          :name="messageIcon"
          class="message-icon"
        />
        <span>{{ message }}</span>
      </p>
    </fieldset>
  </div>
</template>

<script>
import DsfrCheckbox from './DsfrCheckbox.vue'
import { getRandomId } from '../../utils/random-utils.js'

export default {
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
        : this.modelValue.filter(val => val !== name)
      this.$emit('update:modelValue', selected)
    },
  },
}
</script>

<style src="./DsfrCheckboxSet.css" />

<style scoped>
.message-icon {
  margin-right: 0.25rem;
}

.fr-error-text::before,
.fr-valid-text::before {
  display: none;
  content: normal;
}

.fr-message-text {
  & span {
    margin-left: 0.25rem;
  }

  line-height: 0.75rem;
}
</style>
