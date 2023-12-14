<script lang="ts" setup>
import DsfrSegmented from './DsfrSegmented.vue'
import { getRandomId } from '../../utils/random-utils'

import type { DsfrSegmentedSetProps } from './DsfrSegmented.types'

export type { DsfrSegmentedSetProps }

const props = withDefaults(defineProps<DsfrSegmentedSetProps>(), {
  titleId: () => getRandomId('radio-button', 'group'),
  legend: '',
  name: 'no-name',
  options: () => [],
})

const emit = defineEmits<{(e: 'update:modelValue', payload: string | number): void}>()

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
        <!-- @slot Slot pour personnaliser tout le contenu de la balise <legend> cf. [DsfrInput](/?path=/story/composants-champ-de-saisie-champ-simple-dsfrinput--champ-avec-label-personnalise). Une **props porte le même nom pour une légende simple** (texte sans mise en forme) -->
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
