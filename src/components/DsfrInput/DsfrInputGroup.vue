<script lang="ts" setup>
import { computed } from 'vue'

import { useRandomId } from '../../utils/random-utils'

import DsfrInput from './DsfrInput.vue'
import type { DsfrInputGroupProps } from './DsfrInput.types'

export type { DsfrInputGroupProps }

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DsfrInputGroupProps>(), {
  inputGroupId: () => useRandomId('input-group', ''),
  descriptionId: () => useRandomId('input', 'group'),
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

function getDescriptionIdFromArray (messages: string[], baseId: string): string {
  return Array.from(Array.from({ length: messages.length })).map((_, idx) => `${baseId}-${idx + 1}`).join(' ')
}
const descId = computed(() => {
  if (!props.errorMessage && !props.validMessage) {
    return undefined
  }
  if (Array.isArray(props.errorMessage)) {
    return getDescriptionIdFromArray(props.errorMessage, props.descriptionId)
  }
  if (typeof props.errorMessage === 'string') {
    return props.descriptionId
  }
  if (typeof props.validMessage === 'string') {
    return props.descriptionId
  }
  if (Array.isArray(props.validMessage)) {
    return getDescriptionIdFromArray(props.validMessage, props.descriptionId)
  }
  return undefined
})
</script>

<template>
  <div
    class="fr-input-group"
    :class="[
      {
        'fr-input-group--disabled': 'disabled' in $attrs,
        'fr-input-group--error': errorMessage,
        'fr-input-group--valid': (validMessage && !errorMessage),
      },
      wrapperClass,
    ]"
    :data-testid="inputGroupId"
  >
    <slot name="before-input" />
    <!-- @slot Slot par défaut pour le contenu du groupe de champ -->
    <slot
      :is-valid="!!validMessage"
      :is-invalid="!!errorMessage"
      :description-id="descId"
    />
    <DsfrInput
      v-if="!$slots.default"
      v-bind="$attrs"
      :is-valid="!!validMessage"
      :is-invalid="!!errorMessage"
      :label="label"
      :hint="hint"
      :description-id="descId"
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
          v-for="(message, idx) in errorMessage"
          :id="`${descriptionId}-${idx + 1}`"
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
        v-else-if="Array.isArray(validMessage)"
      >
        <p
          v-for="(message, idx) in validMessage"
          :id="`${descriptionId}-${idx + 1}`"
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
