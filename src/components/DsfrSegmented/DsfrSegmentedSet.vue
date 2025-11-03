<script lang="ts" setup>
import type { DsfrSegmentedSetProps } from './DsfrSegmented.types'

import { useRandomId } from '../../utils/random-utils'

import DsfrSegmented from './DsfrSegmented.vue'

export type { DsfrSegmentedSetProps }

const props = withDefaults(defineProps<DsfrSegmentedSetProps>(), {
  titleId: () => useRandomId('segmented-button', 'set'),
  legend: '',
  name: () => useRandomId('segmented-button', 'set'),
  options: () => [],
})

const emit = defineEmits<{
  /** Événement émis lors de la mise à jour de la valeur sélectionnée */
  'update:modelValue': [payload: string | number]
}>()

defineSlots<{
  /**
   * Slot pour personnaliser tout le contenu de la balise <legend>
   */
  legend: (props: Record<string, never>) => any
  /**
   * Slot par défaut pour personnaliser les contrôles segmentés
   */
  default: (props: Record<string, never>) => any
}>()

const onChange = ($event: string) => {
  if ($event === props.modelValue) {
    return
  }
  emit('update:modelValue', $event)
}
</script>

<template>
  <div class="fr-form-group">
    <fieldset
      class="fr-segmented"
      :class="{
        'fr-segmented--sm': small,
        'fr-segmented--no-legend': !legend,
      }"
      :disabled="disabled"
    >
      <legend
        v-if="legend"
        :id="titleId"
        class="fr-segmented__legend"
        :class="{
          'fr-segmented__legend--inline': inline,
        }"
      >
        <slot name="legend">
          {{ legend }}
        </slot>
        <span
          v-if="hint"
          class="fr-hint-text"
        >
          {{ hint }}
        </span>
      </legend>

      <div class="fr-segmented__elements">
        <slot>
          <DsfrSegmented
            v-for="(option, i) of options"
            :key="option.value || i"
            :name="name || option.name"
            v-bind="{ ...option, disabled: disabled || option.disabled }"
            :model-value="modelValue"
            @update:model-value="onChange($event as string)"
          />
        </slot>
      </div>
    </fieldset>
  </div>
</template>
