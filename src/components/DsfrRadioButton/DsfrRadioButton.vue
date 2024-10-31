<script lang="ts" setup>
import { computed } from 'vue'

import { getRandomId } from '../../utils/random-utils'

import type { DsfrRadioButtonProps } from './DsfrRadioButton.types'

export type { DsfrRadioButtonProps }

const props = withDefaults(defineProps<DsfrRadioButtonProps>(), {
  id: () => getRandomId('basic', 'radio'),
  modelValue: '',
  label: '',
  hint: '',
  img: undefined,
  svgPath: undefined,
  svgAttrs: () => ({ viewBox: '0 0 80 80', width: '80px', height: '80px' }),
})

defineEmits<{ (e: 'update:modelValue', payload: string | number | boolean): void }>()

const defaultSvgAttrs = { viewBox: '0 0 80 80', width: '80px', height: '80px' }

const rich = computed(() => !!props.img || !!props.svgPath)
</script>

<template>
  <div
    class="fr-fieldset__element"
    :class="{ 'fr-fieldset__element--inline': inline }"
  >
    <div
      class="fr-radio-group"
      :class="{
        'fr-radio-rich': rich,
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
        <!-- @slot Slot pour personnaliser tout le contenu de la balise <label> cf. [DsfrInput](/?path=/story/composants-champ-de-saisie-champ-simple-dsfrinput--champ-avec-label-personnalise). Une **props porte le même nom pour un label simple** (texte sans mise en forme) -->
        <slot name="label">
          {{ label }}
          <!-- @slot Slot pour indiquer que le champ est obligatoire. Par défaut, met une astérisque si `required` est à true (dans un `<span class="required">`) -->
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
        <img
          v-if="img"
          :src="img"
          class="fr-artwork"
          alt=""
          :title="imgTitle"
        >
        <svg
          v-else
          aria-hidden="true"
          class="fr-artwork"
          v-bind="{ ...defaultSvgAttrs, ...svgAttrs }"
        >
          <title v-if="imgTitle">{{ imgTitle }}</title>
          <use
            class="fr-artwork-decorative"
            :href="`${svgPath}#artwork-decorative`"
          />
          <use
            class="fr-artwork-minor"
            :href="`${svgPath}#artwork-minor`"
          />
          <use
            class="fr-artwork-major"
            :href="`${svgPath}#artwork-major`"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
