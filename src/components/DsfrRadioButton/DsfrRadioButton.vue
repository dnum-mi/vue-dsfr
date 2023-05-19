<script>
import { defineComponent } from 'vue'

import { getRandomId } from '../../utils/random-utils'

export default defineComponent({
  name: 'DsfrRadioButton',
  props: {
    id: {
      type: String,
      default () {
        return getRandomId('basic', 'checkbox')
      },
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    small: Boolean,
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],

  computed: {
    rich () {
      return !!this.img
    },
  },
})
</script>

<template>
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
      v-if="img"
      class="fr-radio-rich__img"
    >
      <img
        :src="img"
        alt=""
      >
    </div>
  </div>
</template>
