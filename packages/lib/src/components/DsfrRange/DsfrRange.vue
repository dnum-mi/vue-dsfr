<script lang="ts" setup>
import type { DsfrRangeProps } from './DsfrRange.types'

import { computed, onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue'

import { useRandomId } from '../../utils/random-utils'

const props = withDefaults(defineProps<DsfrRangeProps>(), {
  id: () => useRandomId('range'),
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

defineSlots<{
  /** Pour un libellé plus personnalisé du champ */
  label: (props: Record<string, never>) => any
  /** Pour une indication plus personnalisée sur le champ */
  hint: (props: Record<string, never>) => any
  /** Pour remplacer l’astérisque par autre chose pour un champ requis */
  'required-tip': (props: Record<string, never>) => any
  /** Pour les messages d’erreur ou de succès */
  messages?: (props: Record<string, never>) => any
}>()

const input = useTemplateRef('input')
const inputWidth = ref()
let resizeObserver: ResizeObserver | null = null

const double = computed(() => props.lowerValue !== undefined)
const stepped = computed(() => props.step !== undefined)

const outputStyle = computed(() => {
  if (props.lowerValue === undefined) {
    const translateXValue = (props.modelValue - props.min) / (props.max - props.min) * inputWidth.value
    return `transform: translateX(${translateXValue}px) translateX(-${translateXValue / inputWidth.value * 100}%);`
  }
  // Pour le mode double : calculer la position au milieu des deux valeurs
  const middleValue = (props.modelValue + props.lowerValue) / 2
  const translateXValue = (middleValue - props.min) / (props.max - props.min) * inputWidth.value
  return `transform: translateX(${translateXValue}px) translateX(-${translateXValue / inputWidth.value * 100}%);`
})

const rangeStyle = computed(() => {
  const range = props.max - props.min

  const ratioRight = (props.modelValue - props.min) / range
  const ratioLeft = ((props.lowerValue ?? 0) - props.min) / range

  const innerPadding = props.small ? 12 : 24
  const stepWidth = (inputWidth.value - innerPadding) / (range / (props.step ?? 1 + 1))
  const paddingRight = double.value ? 32 * (1 - ratioRight) : 0

  return {
    '--progress-right': `${(ratioRight * inputWidth.value + paddingRight).toFixed(2)}px`,
    ...(double.value ? { '--progress-left': `${(ratioLeft * inputWidth.value).toFixed(2)}px` } : {}),
    ...(stepped.value ? { '--step-width': `${Math.floor(stepWidth)}px` } : {}),
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

  // Observer le redimensionnement de l'input avec ResizeObserver natif
  if (input.value && 'ResizeObserver' in window) {
    resizeObserver = new ResizeObserver((entries) => {
      const { width } = entries[0]?.contentRect || {}
      if (width !== undefined) {
        inputWidth.value = width
      }
    })

    resizeObserver.observe(input.value)
  }
})

onUnmounted(() => {
  // Nettoyer l'observer au démontage
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
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
        <slot name="required-tip">
          <span
            v-if="$attrs.required"
            class="required"
          >&nbsp;*</span>
        </slot>
      </slot>
      <span
        v-if="hint"
        class="fr-hint-text"
      >
        {{ hint }}
      </span>
    </label>
    <div
      class="fr-range"
      data-fr-js-range="true"
      :class="{
        'fr-range--sm': small,
        'fr-range--step': stepped,
        'fr-range--double': double,
        'fr-range-group--disabled': disabled,
      }"
      :data-fr-prefix="prefix ?? undefined"
      :data-fr-suffix="suffix ?? undefined"
      :style="rangeStyle"
    >
      <span
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
      v-if="message || $slots.messages"
      :id="`${id}-messages`"
      class="fr-messages-group"
      aria-live="polite"
      role="alert"
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
