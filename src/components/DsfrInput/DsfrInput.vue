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
    label: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
    wrapperClass: {
      type: String,
      default: '',
    },
    labelVisible: Boolean,
    modelValue: {
      type: String,
      default: '',
    },
    isInvalid: Boolean,
    isValid: Boolean,
    isTextarea: Boolean,
  },
  emits: ['update:modelValue'],
  computed: {
    isComponent () {
      return this.isTextarea ? 'textarea' : 'input'
    },
  },
})
</script>

<template>
  <label
    :class="{
      'fr-label': true,
      'invisible': !labelVisible,
    }"
    :for="id"
  >
    {{ label }} {{ $attrs.required ? '*' : '' }}
    <span
      v-if="hint"
      class="fr-hint-text"
    >{{ hint }}</span>
  </label>
  <div
    class="fr-input-wrap"
    :class="[wrapperClass, { 'fr-fi-calendar-line': $attrs.type === 'date' }]"
  >
    <component
      :is="isComponent"
      :id="id"
      class="fr-input"
      :class="{
        'fr-input--error': isInvalid,
        'fr-input--valid': isValid,
      }"
      :value="modelValue"
      v-bind="$attrs"
      :aria-aria-describedby="descriptionId || undefined"
      @input="$emit('update:modelValue', $event.target.value)"
      @keydown.esc="$emit('update:modelValue', '')"
    />
  </div>
</template>

<style src="@gouvfr/dsfr/dist/component/input/input.main.css" />

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
