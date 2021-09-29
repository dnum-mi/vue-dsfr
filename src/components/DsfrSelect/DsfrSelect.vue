<script>
import { getRandomId } from '../../utils/random-utils.js'

export default {
  name: 'DsfrSelect',

  props: {
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
}
</script>

<template>
  <div
    class="fr-select-group"
    :class="{
      'fr-select-group--error': errorMessage,
      'fr-select-group--valid': successMessage,
    }"
  >
    <label
      class="fr-label"
      :for="selectId"
    >
      {{ label }}
      <span class="fr-hint-text">{{ description }}</span>
    </label>
    <select
      :id="selectId"
      :class="{
        'fr-select--error': errorMessage,
        'fr-select--valid': successMessage,
      }"
      class="fr-select"
      name="select"
      :disabled="disabled"
    >
      <option
        value=""
        :selected="modelValue === undefined"
        disabled
        hidden
      >
        Selectionnez une option
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :selected="modelValue === option"
      >
        {{ option }}
      </option>
    </select>
    <p
      v-if="errorMessage"
      id="select-error-desc-error"
      class="fr-error-text"
    >
      {{ errorMessage }}
    </p>
    <p
      v-if="successMessage"
      id="select-valid-desc-valid"
      class="fr-valid-text"
    >
      {{ successMessage }}
    </p>
  </div>
</template>

<style src="./select.css" />

<style scoped>
.fr-select-group {
  position: relative;

  &:last-child {
      margin-bottom: -0.75rem;
  }
  &:first-child {
      margin-top: -0.75rem;
  }
}

.fr-label {
  color: var(--g800);
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

.fr-select-group--error {
  & .fr-label,
  & .fr-hint-text {
    color: var(--error);
  }
}

.fr-select-group--valid {
  & .fr-label,
  & .fr-hint-text {
    color: var(--success);
  }
}
</style>
