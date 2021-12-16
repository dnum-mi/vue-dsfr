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
      <v-icon
        :name="messageIcon"
        class="message-icon"
      />
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
.message-icon {
  margin-right: 0.25rem;
}

.fr-checkbox-group {
  color: var(--text-default-grey);
}

.fr-checkbox-group input[type="checkbox"] + label {
  margin-left: 0;
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
  border: 1px solid var(--text-default-grey);
  color: transparent;
  outline-offset: 2px;
  outline-width: 2px;
  outline-color: #0a76f6;

  input:focus-visible + label & {
    outline-style: solid;
  }

  input[type="checkbox"]:checked + label & {
    --blend: var(--background-active-blue-france-blend);
    background-color: var(--background-active-blue-france);
    color: var(--text-inverted-grey);
  }

  input[type="checkbox"]:disabled + label & {
    box-shadow: inset 0 0 0 1px var(--border-disabled-grey);
  }

  input[type="checkbox"]:disabled:checked + label,
  input[type="checkbox"][disabled]:checked + label & {
    --blend: var(--background-disabled-grey-blend);
    background-color: var(--background-disabled-grey);
    color: var(--text-disabled-grey);
  }
}
</style>
