<script lang="ts" setup>
import { getRandomId } from '../../utils/random-utils'

import DsfrInput from './DsfrInput.vue'
import type { DsfrInputGroupProps } from './DsfrInput.types'

export type { DsfrInputGroupProps }

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<DsfrInputGroupProps>(), {
  descriptionId: () => getRandomId('basic', 'input'),
  hint: '',
  label: '',
  labelClass: '',
  modelValue: '',
  wrapperClass: '',
  placeholder: undefined,
  errorMessage: undefined,
  validMessage: undefined,
})

defineEmits<{ (e: 'update:modelValue', payload: string): void }>()
</script>

<template>
  <div
    class="fr-input-group"
    :class="[
      {
        'fr-input-group--error': errorMessage,
        'fr-input-group--valid': (validMessage && !errorMessage),
      },
      wrapperClass,
    ]"
  >
    <slot name="before-input" />
    <!-- @slot Slot par défaut pour le contenu du groupe de champ -->
    <slot />
    <DsfrInput
      v-if="!$slots.default"
      v-bind="$attrs"
      :is-valid="!!validMessage"
      :is-invalid="!!errorMessage"
      :label="label"
      :hint="hint"
      :description-id="((errorMessage || validMessage) && descriptionId) || undefined"
      :label-visible="labelVisible"
      :model-value="modelValue"
      :placeholder="placeholder"
      @update:model-value="$emit('update:modelValue', $event)"
    />
    <div
      class="fr-messages-group"
      role="alert"
      aria-live="polite"
    >
      <template
        v-if="Array.isArray(errorMessage)"
      >
        <p
          v-for="message in errorMessage"
          :id="descriptionId"
          :key="message"
          :data-testid="descriptionId"
          class="fr-error-text"
        >
          {{ message }}
        </p>
      </template>
      <p
        v-else-if="errorMessage"
        :id="descriptionId"
        :key="errorMessage"
        :data-testid="descriptionId"
        class="fr-error-text"
      >
        {{ errorMessage }}
      </p>

      <template
        v-if="Array.isArray(validMessage)"
      >
        <p
          v-for="message in validMessage"
          :id="descriptionId"
          :key="message"
          :data-testid="descriptionId"
          class="fr-valid-text"
        >
          {{ message }}
        </p>
      </template>
      <p
        v-else-if="validMessage"
        :id="descriptionId"
        :key="validMessage"
        :data-testid="descriptionId"
        class="fr-valid-text"
      >
        {{ validMessage }}
      </p>
    </div>
  </div>
</template>
