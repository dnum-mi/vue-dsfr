<script lang="ts" setup>
import type { DsfrRadioButtonProps } from './DsfrRadioButton.types'

import { computed } from 'vue'

import { useRandomId } from '../../utils/random-utils'
import DsfrPictogram from '../DsfrPictogram/DsfrPictogram.vue'

export type { DsfrRadioButtonProps }

const props = withDefaults(defineProps<DsfrRadioButtonProps>(), {
  id: () => useRandomId('basic', 'radio'),
  modelValue: '',
  label: '',
  hint: '',
  img: undefined,
  svgPath: undefined,
  rich: false,
  svgAttrs: () => ({ viewBox: '0 0 80 80', width: '80px', height: '80px' }),
})

defineEmits<{ (e: 'update:modelValue', payload: string | number | boolean): void }>()

defineSlots<{
  /**
   * Slot pour personnaliser tout le contenu de la balise <label>
   */
  label: (props: { label: string }) => any
  /**
   * Slot pour indiquer que le champ est obligatoire. Par défaut, met une astérisque si `required` est à true (dans un `<span class="required">`)
   */
  'required-tip': (props: Record<string, never>) => any
}>()

const richComputed = computed(() => props.rich || (!!props.img || !!props.svgPath))
</script>

<template>
  <div
    class="fr-fieldset__element"
    :class="{ 'fr-fieldset__element--inline': inline }"
  >
    <div
      class="fr-radio-group"
      :class="{
        'fr-radio-rich': richComputed,
        'fr-radio-group--sm': small,
      }"
    >
      <input
        :id="id"
        type="radio"
        :name="name"
        :value="value"
        :checked="modelValue === value"
        :disabled="disabled"
        v-bind="$attrs"
        @click="$emit('update:modelValue', value)"
      >
      <label
        :for="id"
        class="fr-label"
      >
        <slot
          name="label"
          :label="label"
        >
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
        v-if="img || svgPath"
        class="fr-radio-rich__pictogram"
      >
        <DsfrPictogram
          :img-src="img"
          :svg-path="svgPath"
          :svg-attrs="svgAttrs"
          :title="imgTitle"
        />
      </div>
    </div>
  </div>
</template>
