<script lang="ts" setup>
import { computed } from 'vue'

import DsfrInput from './DsfrInput.vue'

import { getRandomId } from '../../utils/random-utils'

import type { DsfrInputGroupProps } from './DsfrInput.types'

export type { DsfrInputGroupProps }

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DsfrInputGroupProps>(), {
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

const message = computed(() => props.errorMessage || props.validMessage)
const messageClass = computed(() => props.errorMessage ? 'fr-error-text' : 'fr-valid-text')
</script>

<template>
  <div
    class="fr-input-group"
    :class="[
      {
        'fr-input-group--error': errorMessage,
        'fr-input-group--valid': validMessage,
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
      :description-id="(message && descriptionId) || undefined"
      :label-visible="labelVisible"
      :model-value="modelValue"
      :placeholder="placeholder"
      @update:model-value="$emit('update:modelValue', $event)"
    />
    <div
      v-if="message"
      class="fr-messages-group"
      role="alert"
      aria-live="polite"
    >
      <p
        :id="descriptionId"
        :data-testid="descriptionId"
        :class="messageClass"
      >
        <span>{{ message }}</span>
      </p>
    </div>
  </div>
</template>
