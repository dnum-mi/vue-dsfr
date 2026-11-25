<script lang="ts" setup>
import type { DsfrInputGroupProps } from './DsfrInput.types'

import { computed } from 'vue'

import { useRandomId } from '../../utils/random-utils'

import DsfrInput from './DsfrInput.vue'

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

defineEmits<{
  /** Événement émis lors du changement de la valeur du champ de saisie */
  (e: 'update:modelValue', payload: string | number | undefined): void
}>()

defineSlots<{
  /** Slot pour ajouter du contenu avant le champ de saisie */
  'before-input'?: () => any
  /** Slot par défaut pour le contenu du groupe de champ. Reçoit les props `isValid`, `isInvalid`, et `descriptionId` */
  default?: (props: { isValid: boolean, isInvalid: boolean, descriptionId: string | undefined }) => any
}>()

function getDescriptionIdFromArray (messages: string[], baseId: string): string {
  return messages.map((_, idx) => `${baseId}-${idx + 1}`).join(' ')
}

/** Un message n’est considéré comme présent que s’il est non vide (chaîne ou tableau) */
function hasMessage (message: string | string[] | undefined): boolean {
  return Array.isArray(message) ? message.length > 0 : !!message
}

const hasError = computed(() => hasMessage(props.errorMessage))
const hasValid = computed(() => !hasError.value && hasMessage(props.validMessage))

const descId = computed(() => {
  const messages = hasError.value ? props.errorMessage : hasValid.value ? props.validMessage : undefined
  if (!messages) {
    return undefined
  }
  return Array.isArray(messages) ? getDescriptionIdFromArray(messages, props.descriptionId) : props.descriptionId
})
</script>

<template>
  <div
    class="fr-input-group"
    :class="[
      {
        'fr-input-group--disabled': 'disabled' in $attrs && $attrs.disabled !== false && $attrs.disabled !== undefined,
        'fr-input-group--error': hasError,
        'fr-input-group--valid': hasValid,
      },
      wrapperClass,
    ]"
    :data-testid="inputGroupId"
  >
    <slot name="before-input" />
    <slot
      :is-valid="hasValid"
      :is-invalid="hasError"
      :description-id="descId"
    />
    <DsfrInput
      v-if="!$slots.default"
      v-bind="$attrs"
      :is-valid="hasValid"
      :is-invalid="hasError"
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
        v-if="hasError && Array.isArray(errorMessage)"
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
        v-else-if="hasError && typeof errorMessage === 'string'"
        :id="descriptionId"
        :key="errorMessage"
        :data-testid="descriptionId"
        class="fr-error-text"
      >
        {{ errorMessage }}
      </p>

      <template
        v-else-if="hasValid && Array.isArray(validMessage)"
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
        v-else-if="hasValid && typeof validMessage === 'string'"
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
