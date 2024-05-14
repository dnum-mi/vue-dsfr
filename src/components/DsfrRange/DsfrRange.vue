<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'

import { getRandomId } from '../../utils/random-utils'

import type { DsfrRangeProps } from './DsfrRange.types'

const props = withDefaults(defineProps<DsfrRangeProps>(), {
  id: () => getRandomId('range'),
  min: 0,
  max: 100,
  modelValue: 0,
  lowerValue: undefined,
  hint: undefined,
  message: undefined,
  prefix: undefined,
  suffix: undefined,
  step: undefined,
})

const emit = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
  (e: 'update:lowerValue', payload: string | number): void
}>()

const input = ref<HTMLInputElement>()
const output = ref<HTMLSpanElement>()
const inputWidth = ref()

const double = computed(() => props.lowerValue !== undefined)

const outputStyle = computed(() => {
  if (props.lowerValue === undefined) {
    const translateXValue = (props.modelValue - props.min) / (props.max - props.min) * inputWidth.value
    return `transform: translateX(${translateXValue}px) translateX(-${props.modelValue}%);`
  }
  const translateXValue = (props.modelValue + props.lowerValue - props.min) / 2 / (props.max - props.min) * inputWidth.value
  return `transform: translateX(${translateXValue}px) translateX(-${props.lowerValue + ((props.modelValue - props.lowerValue) / 2)}%);`
})

const rangeStyle = computed(() => {
  const progressRight = (props.modelValue - props.min) / (props.max - props.min) * inputWidth.value - (double.value ? 12 : 0)
  const progressLeft = ((props.lowerValue ?? 0) - props.min) / (props.max - props.min) * inputWidth.value

  return {
    '--progress-right': `${progressRight + 24}px`,
    ...(double.value ? { '--progress-left': `${progressLeft + 12}px` } : {}),
  }
})

watch([() => props.modelValue, () => props.lowerValue], ([upper, lower]) => {
  if (lower === undefined) {
    return
  }

  if (double.value && upper < lower) {
    emit('update:lowerValue', upper)
  }
  if (double.value && lower > upper) {
    emit('update:modelValue', lower)
  }
})

const outputValue = computed(() => {
  return (props.prefix ?? '')
    .concat(double.value ? `${props.lowerValue} - ` : '')
    .concat(`${props.modelValue}`)
    .concat(props.suffix ?? '')
})

onMounted(() => {
  inputWidth.value = input.value?.offsetWidth
})
</script>

<template>
  <div
    :id="`${id}-group`"
    class="fr-range-group"
    :class="{ 'fr-range-group--error': message }"
  >
    <label
      :id="`${id}-label`"
      class="fr-label"
    >
      <slot name="label">
        {{ label }}
      </slot>
      <span class="fr-hint-text">
        <slot name="hint">
          {{ hint }}
        </slot>
      </span>
    </label>
    <div
      class="fr-range"
      data-fr-js-range="true"
      :class="{
        'fr-range--sm': small,
        'fr-range--double': double,
        'fr-range-group--disabled': disabled,
      }"
      :data-fr-prefix="prefix ?? undefined"
      :data-fr-suffix="suffix ?? undefined"
      :style="rangeStyle"
    >
      <span
        ref="output"
        class="fr-range__output"
        data-fr-js-range-output="true"
        :style="outputStyle"
      >{{ outputValue }}</span>
      <input
        v-if="double"
        :id="`${id}-2`"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="lowerValue"
        :disabled="disabled"
        :aria-disabled="disabled"
        :aria-labelledby="`${id}-label`"
        :aria-describedby="`${id}-messages`"
        @input="emit('update:lowerValue', +($event.target as HTMLInputElement)?.value)"
      >
      <input
        :id="id"
        ref="input"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="modelValue"
        :disabled="disabled"
        :aria-disabled="disabled"
        :aria-labelledby="`${id}-label`"
        :aria-describedby="`${id}-messages`"
        @input="emit('update:modelValue', +($event.target as HTMLInputElement)?.value)"
      >

      <span
        v-if="!hideIndicators"
        class="fr-range__min"
        aria-hidden="true"
        data-fr-js-range-limit="true"
      >{{ min }}</span>
      <span
        v-if="!hideIndicators"
        class="fr-range__max"
        aria-hidden="true"
        data-fr-js-range-limit="true"
      >{{ max }}</span>
    </div>
    <div
      :id="`${id}-messages`"
      class="fr-messages-group"
      aria-live="polite"
    >
      <slot name="messages">
        <p
          v-if="message"
          :id="`${id}-message-error`"
          class="fr-message fr-message--error"
        >
          {{ message }}
        </p>
      </slot>
    </div>
  </div>
</template>
