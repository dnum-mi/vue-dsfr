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
      :checked="modelValue"
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
.fr-checkbox-group {
  position: relative;

  &:last-child {
      margin-bottom: -0.75rem;
  }
  &:first-child {
      margin-top: -0.75rem;
  }
}

.fr-hint-text {
  margin: 0;
  grid-row: 2;
  grid-column: 1;
  display: block;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: var(--g600);
}

.fr-checkbox-group--error::before {
  background-color: var(--error);
}
.fr-checkbox-group--error::before {
  content: "";
  position: absolute;
  top: 0.75rem;
  left: -0.5rem;
  width: 2px;
  height: 1.5rem;
  background-color: var(--error);
}
.fr-checkbox-group--valid::before {
  background-color: var(--success);
}
.fr-checkbox-group--valid::before {
  content: "";
  position: absolute;
  top: 0.75rem;
  left: -0.5rem;
  width: 2px;
  height: 1.5rem;
  background-color: var(--success);
}

.fr-checkbox-group--error {
  .fr-label,
  .fr-hint-text {
    color: var(--error);
  }
}

.fr-checkbox-group--valid {
  .fr-label,
  .fr-hint-text {
    color: var(--success);
  }
}

.fr-message-text {
  margin-top: 0;
  line-height: 0.75rem;

  & span {
    margin-left: 0.25rem;
  }
}

input[type="checkbox"] {
  position: absolute;
  opacity: 0;

  & + label {
    position: relative;
    padding: 0.75rem 0;
    -webkit-tap-highlight-color: transparent;
    display: grid;
    grid-row: 1;
    grid-column: 2;
    align-items: center;
    grid-template-columns: 1fr 2rem;
    text-align: left;
    direction: rtl;
  }
}

input[type="radio"][disabled] + label,
fieldset[disabled] input[type="radio"] + label
 {
  color: var(--g600-g400);
  filter: grayscale(1);
  cursor: not-allowed;
}
.fr-label {
  display: block;
  font-size: 1rem;
  line-height: 1.5rem;
  color: var(--g800);

  @nest input[type="checkbox"]:disabled + & {
    color: var(--g600-g400);
    cursor: not-allowed;
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

  @nest input[type="checkbox"]:checked + label & {
    background-color: var(--bf500);
    color: var(--g100);
  }

  @nest input[type="checkbox"]:disabled + label & {
    background-color: var(--g200);
    border: 1px solid var(--g400);
    cursor: not-allowed;
  }
}

</style>
