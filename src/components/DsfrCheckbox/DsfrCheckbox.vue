<template>
  <div
    class="fr-checkbox-group"
    :class="{
      'fr-checkbox-group--error': errorMessage,
      'fr-checkbox-group--valid': validMessage,
    }"
  >
    <input
      :id="id"
      :name="name"
      type="checkbox"
      role="checkbox"
      :checked="modelValue"
      :aria-checked="modelValue"
      :disabled="disabled"
      :data-testid="`input-checkbox-${id}`"
      :data-test="`input-checkbox-${id}`"
      @change="$emit('update:modelValue', $event.target.checked)"
    >

    <label
      :for="id"
      class="fr-label"
    >
      <v-icon
        class="fr-checkbox__icon"
        name="ri-check-line"
      />
      {{ label }}
      <span
        v-if="hint"
        class="fr-hint-text"
      >
        {{ hint }}
      </span>
    </label>
    <p
      v-if="message"
      class="fr-message-text  flex  items-center"
      :class="additionalMessageClass"
    >
      <v-icon :name="messageIcon" />
      <span class="line-1">{{ message }}</span>
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrCheckBox',
  props: {
    id: {
      type: String,
      default () {
        return getRandomId('basic', 'checkbox')
      },
    },
    name: {
      type: String,
      required: true,
    },
    disabled: Boolean,
    modelValue: Boolean,
    label: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: '',
    },
    validMessage: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
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
})
</script>

<style scoped>
.fr-checkbox-group input[type="checkbox"] + label::before {
  display: none;
}

.fr-checkbox-group input[type="checkbox"] + label {
  margin-left: 0;
}

.fr-error-text::before {
  display: none;
  content: normal;
}

.fr-valid-text::before {
  display: none;
  content: normal;
}

.fr-message-text {
  margin-top: 0;
  line-height: 0.75rem;

  & span {
    margin-left: 0.25rem;
  }
}

.fr-checkbox__icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  border-radius: 0.25rem;
  grid-row: 1;
  grid-column: 2;
  transition: background-color 0.1s, color 0.1s;
  border: 1px solid var(--g800);
  color: var(--t-plain);
  outline-color: var(--focus);
  outline-offset: 2px;
  outline-width: 2px;

  @nest input:focus + label & {
    outline-style: solid;
  }

  @nest input[type="checkbox"]:checked + label & {
    outline-color: var(--focus);
    background-color: var(--bf500);
    color: var(--g100);
  }

  @nest input[type="checkbox"]:disabled + label & {
    outline-color: var(--focus);
    background-color: var(--g200);
    border: 1px solid var(--g400);
    cursor: not-allowed;
  }
}
</style>
