<script lang="ts" setup>
import type { DsfrInputProps } from './DsfrInput.types'
import type { Ref } from 'vue'

import { computed, ref, useAttrs } from 'vue'

import { useRandomId } from '../../utils/random-utils'

export type { DsfrInputProps }

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<DsfrInputProps>(), {
  id: () => useRandomId('basic', 'input'),
  descriptionId: undefined,
  hint: '',
  label: '',
  labelClass: '',
  wrapperClass: '',
})

defineEmits<{
  /** Événement émis lors du changement de la valeur du champ de saisie */
  (e: 'update:modelValue', payload: string | number | undefined): void
}>()

defineSlots<{
  /** Slot pour personnaliser tout le contenu de la balise `<label>` */
  label?: () => any
  /** * Slot pour indiquer que le champ est obligatoire. Par défaut, met une astérisque si `required` est à true (dans un `<span class="required">`) */
  'required-tip'?: () => any
}>()

const value = defineModel<string | number>()

const attrs = useAttrs()

const __input: Ref<HTMLElement | null> = ref(null)
const focus = () => __input.value?.focus()

const isComponent = computed(() => props.isTextarea ? 'textarea' : 'input')
const wrapper = computed(() => props.isWithWrapper || attrs.type === 'date' || !!props.wrapperClass)
const finalLabelClass = computed(() => [
  'fr-label',
  { invisible: !props.labelVisible },
  props.labelClass,
])

defineExpose({
  /** Méthode pour mettre le focus sur le champ de saisie */
  focus,
})
</script>

<template>
  <label
    :class="finalLabelClass"
    :for="id"
  >
    <slot name="label">
      {{ label }}
      <slot name="required-tip">
        <span
          v-if="'required' in $attrs && $attrs.required !== false"
          class="required"
        >*</span>
      </slot>
    </slot>

    <span
      v-if="hint"
      class="fr-hint-text"
    >{{ hint }}</span>
  </label>

  <component
    :is="isComponent"
    v-if="!wrapper"
    :id="id"
    v-bind="$attrs"
    ref="__input"
    class="fr-input"
    :class="{
      'fr-input--error': isInvalid,
      'fr-input--valid': isValid,
    }"
    :value="value"
    :aria-describedby="descriptionId || undefined"
    @input="value = $event.target.value"
  />

  <div
    v-else
    :class="[
      { 'fr-input-wrap': isWithWrapper || $attrs.type === 'date' },
      wrapperClass,
    ]"
  >
    <component
      :is="isComponent"
      :id="id"
      v-bind="$attrs"
      ref="__input"
      class="fr-input"
      :class="{
        'fr-input--error': isInvalid,
        'fr-input--valid': isValid,
      }"
      :value="modelValue"
      :aria-describedby="descriptionId || undefined"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped>
.invisible {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
