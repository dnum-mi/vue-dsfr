<script lang="ts" setup>
import { ref, computed, useAttrs, Ref } from 'vue'
import { getRandomId } from '../../utils/random-utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<{
  id?: string
  descriptionId?: string
  hint?: string
  isInvalid?: boolean
  isValid?: boolean
  isTextarea?: boolean
  isWithWrapper?: boolean
  labelVisible?: boolean
  label?: string
  labelClass?: string
  modelValue?: string
  wrapperClass?: string
}>(), {
  id: () => getRandomId('basic', 'input'),
  descriptionId: undefined,
  hint: '',
  label: '',
  labelClass: '',
  modelValue: '',
  wrapperClass: '',
})

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
  focus,
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
