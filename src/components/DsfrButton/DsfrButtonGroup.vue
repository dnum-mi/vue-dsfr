<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'

import type { DsfrButtonGroupProps } from './DsfrButton.types'
import DsfrButton from './DsfrButton.vue'

export type { DsfrButtonGroupProps }

const props = withDefaults(defineProps<DsfrButtonGroupProps>(), {
  buttons: () => [],
  inlineLayoutWhen: 'never',
  size: 'md',
  align: undefined,
})

const buttonsEl = ref<HTMLUListElement | null>(null)

const sm = computed(() => ['sm', 'small'].includes(props.size))
const md = computed(() => ['md', 'medium'].includes(props.size))
const lg = computed(() => ['lg', 'large'].includes(props.size))

const inlineAlways = computed(() => ['always', '', true].includes(props.inlineLayoutWhen))
const inlineSm = computed(() => ['sm', 'small'].includes(props.inlineLayoutWhen as string))
const inlineMd = computed(() => ['md', 'medium'].includes(props.inlineLayoutWhen as string))
const inlineLg = computed(() => ['lg', 'large'].includes(props.inlineLayoutWhen as string))
const center = computed(() => props.align === 'center')
const right = computed(() => props.align === 'right')

const equisizedWidth = ref('auto')
const groupStyle = computed(() => `--equisized-width: ${equisizedWidth.value};`)

const computeEquisizedWidth = async () => {
  let maxWidth = 0
  await new Promise((resolve) => setTimeout(resolve, 100))
  buttonsEl.value?.querySelectorAll('.fr-btn').forEach((button: Element) => {
    const width = button.offsetWidth
    const buttonStyle = window.getComputedStyle(button)
    const marginLeft = +buttonStyle.marginLeft.replace('px', '')
    const marginRight = +buttonStyle.marginRight.replace('px', '')
    button.style.width = 'var(--equisized-width)'
    const newWidth = width + marginLeft + marginRight
    if (newWidth > maxWidth) {
      maxWidth = newWidth
    }
  })
  equisizedWidth.value = maxWidth + 'px'
}

onMounted(async () => {
  if (!buttonsEl.value || !props.equisized) {
    return
  }
  await computeEquisizedWidth()
})
</script>

<template>
  <ul
    ref="buttonsEl"
    :style="groupStyle"
    class="fr-btns-group"
    :class="{
      'fr-btns-group--equisized': equisized,
      'fr-btns-group--sm': sm,
      'fr-btns-group--md': md,
      'fr-btns-group--lg': lg,
      'fr-btns-group--inline-sm': inlineAlways || inlineSm,
      'fr-btns-group--inline-md': inlineAlways || inlineMd,
      'fr-btns-group--inline-lg': inlineAlways || inlineLg,
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
    <!-- @slot Slot par défaut pour le contenu de la liste de boutons. Sera dans `<ul class="fr-btns-group">` -->
    <slot />
  </ul>
</template>
