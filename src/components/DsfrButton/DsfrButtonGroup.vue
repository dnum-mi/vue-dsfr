<script lang="ts" setup>
import { computed } from 'vue'

import type { DsfrButtonGroupProps } from './DsfrButton.types'
import DsfrButton from './DsfrButton.vue'

export type { DsfrButtonGroupProps }

const props = withDefaults(defineProps<DsfrButtonGroupProps>(), {
  buttons: () => [],
  inlineLayoutWhen: 'never',
  size: '',
  align: undefined,
})

const sm = computed(() => ['sm', 'small'].includes(props.size))
const md = computed(() => ['md', 'medium'].includes(props.size))
const lg = computed(() => ['lg', 'large'].includes(props.size))

const inlineAlways = computed(() => ['always', true].includes(props.inlineLayoutWhen))
const inlineSm = computed(() => ['sm', 'small'].includes(props.inlineLayoutWhen as string))
const inlineMd = computed(() => ['md', 'medium'].includes(props.inlineLayoutWhen as string))
const inlineLg = computed(() => ['lg', 'large'].includes(props.inlineLayoutWhen as string))
const center = computed(() => props.align === 'center')
const right = computed(() => props.align === 'right')
</script>

<template>
  <ul
    class="fr-btns-group"
    :class="{
      'fr-btns-group--inline': inlineAlways,
      'fr-btns-group--sm': sm,
      'fr-btns-group--md': md,
      'fr-btns-group--lg': lg,
      'fr-btns-group--inline-sm': inlineSm,
      'fr-btns-group--inline-md': inlineMd,
      'fr-btns-group--inline-lg': inlineLg,
      'fr-btns-group--center': center,
      'fr-btns-group--right': right,
      'fr-btns-group--icon-right': iconRight,
      'fr-btns-group--inline-reverse': reverse,
    }"
    data-testid="fr-btns"
  >
    <li
      v-for="({ onClick, ...button }, i) in buttons"
      :key="i"
    >
      <DsfrButton
        v-bind="button"
        @click="onClick"
      />
    </li>
  </ul>
</template>
