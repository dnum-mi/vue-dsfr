<script lang="ts" setup>
import { computed } from 'vue'

import DsfrInput from './DsfrInput.vue'

import { getRandomId } from '../../utils/random-utils'

const props = withDefaults(defineProps<{
  descriptionId?: string
  hint?: string
  labelVisible?: boolean
  label?: string
  labelClass?: string
  modelValue?: string
  placeholder?: string
  errorMessage?: string
  validMessage?: string
  wrapperClass?: string
}>(), {
  descriptionId: () => getRandomId('basic', 'input'),
  hint: '',
  label: '',
  labelClass: '',
  modelValue: '',
  wrapperClass: '',
  errorMessage: undefined,
  validMessage: undefined,
})

defineEmits<{(e: 'update:modelValue', payload: string): void}>()

const message = computed(() => props.errorMessage || props.validMessage)
const messageClass = computed(() => props.errorMessage ? 'fr-error-text' : 'fr-valid-text')
</script>

<template>
  <div
    class="fr-input-group"
    :class="{
      'fr-input-group--error': errorMessage,
      'fr-input-group--valid': validMessage,
    }"
  >
    <slot name="before-input" />
    <slot />
    <DsfrInput
      v-if="!$slots.default"
      v-bind="$attrs"
      :is-valid="!!validMessage"
      :is-invalid="!!errorMessage"
      :label="label"
      :hint="hint"
      :description-id="descriptionId"
      :label-visible="labelVisible"
      :model-value="modelValue"
      :placeholder="placeholder"
      @update:model-value="$emit('update:modelValue', $event)"
    />
    <div
      v-if="message"
      class="fr-messages-group"
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
