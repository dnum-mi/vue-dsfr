<script>
import { defineComponent } from 'vue'

import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrInput',

  inheritAttrs: false,

  props: {
    id: {
      type: String,
      default () {
        return getRandomId('basic', 'input')
      },
    },
    descriptionId: {
      type: String,
      default: undefined,
    },
    hint: {
      type: String,
      default: '',
    },
    isInvalid: Boolean,
    isValid: Boolean,
    isTextarea: Boolean,
    isWithWrapper: Boolean,
    label: {
      type: String,
      default: '',
    },
    labelClass: {
      type: String,
      default: '',
    },
    labelVisible: Boolean,
    modelValue: {
      type: String,
      default: '',
    },
    wrapperClass: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],

  computed: {
    isComponent () {
      return this.isTextarea ? 'textarea' : 'input'
    },
    wrapper () {
      return this.isWithWrapper || this.$attrs.type === 'date' || !!this.wrapperClass
    },
    finalLabelClass () {
      return [
        'fr-label',
        { invisible: !this.labelVisible },
        this.labelClass,
      ]
    },
  },

  methods: {
    focus () {
      this.$refs.__input.focus()
    },
  },
})
</script>

<template>
  <label
    :class="finalLabelClass"
    :for="id"
  >
    <!-- @slot Slot pour personnaliser tout le contenu de la balise <label> -->
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
    :value="modelValue"
    :aria-aria-describedby="descriptionId || undefined"
    @input="$emit('update:modelValue', $event.target.value)"
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
      :aria-aria-describedby="descriptionId || undefined"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style src="@gouvfr/dsfr/dist/component/input/input.main.min.css" />

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
