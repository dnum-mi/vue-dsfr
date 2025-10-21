<script setup lang="ts">
import type { DsfrTooltipProps } from './DsfrTooltip.types'

import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

import { useRandomId } from '../../utils/random-utils'

export type { DsfrTooltipProps }

const props = withDefaults(defineProps<DsfrTooltipProps>(), {
  id: () => useRandomId('tooltip'),
})

const show = ref(false)

const source = ref<HTMLElement | null>(null)
const tooltip = ref<HTMLElement | null>(null)

const translateX = ref('0px')
const translateY = ref('0px')
const arrowX = ref('0px')
const top = ref(false)
const opacity = ref(0)

async function computePosition () {
  if (typeof document === 'undefined') {
    return
  }
  if (typeof window === 'undefined') {
    return
  }
  if (!show.value) {
    return
  }

  await new Promise(resolve => setTimeout(resolve, 100))
  const sourceTop = source.value?.getBoundingClientRect().top as number
  const sourceHeight = source.value?.offsetHeight as number
  const sourceWidth = source.value?.offsetWidth as number
  const sourceLeft = source.value?.getBoundingClientRect().left as number
  const tooltipHeight = tooltip.value?.offsetHeight as number
  const tooltipWidth = tooltip.value?.offsetWidth as number
  const tooltipTop = tooltip.value?.offsetTop as number
  const tooltipLeft = tooltip.value?.offsetLeft as number

  const isTooltipAtBottom = sourceTop + sourceHeight + tooltipHeight >= window.innerHeight
  top.value = isTooltipAtBottom

  const isTooltipOnRightSide = (sourceLeft + (sourceWidth / 2) + (tooltipWidth / 2)) >= document.documentElement.offsetWidth
  const isTooltipOnLeftSide = (sourceLeft + (sourceWidth / 2) - (tooltipWidth / 2)) < 0

  translateY.value = isTooltipAtBottom
    ? `${sourceTop - tooltipTop - tooltipHeight + 8}px`
    : `${sourceTop - tooltipTop + sourceHeight - 8}px`
  opacity.value = 1
  translateX.value = isTooltipOnRightSide
    ? `${sourceLeft - tooltipLeft + sourceWidth - tooltipWidth - 4}px`
    : isTooltipOnLeftSide
      ? `${sourceLeft - tooltipLeft + 4}px`
      : `${sourceLeft - tooltipLeft + (sourceWidth / 2) - (tooltipWidth / 2)}px`

  arrowX.value = isTooltipOnRightSide
    ? `${(tooltipWidth / 2) - (sourceWidth / 2) + 4}px`
    : isTooltipOnLeftSide
      ? `${-(tooltipWidth / 2) + (sourceWidth / 2) - 4}px`
      : '0px'
}

watch(show, computePosition, { immediate: true })

onMounted(() => {
  window.addEventListener('scroll', computePosition)
  window.addEventListener('resize', computePosition)
})
onUnmounted (() => {
  window.removeEventListener('scroll', computePosition)
  window.removeEventListener('resize', computePosition)
})

const tooltipStyle = computed(() => (`transform: translate(${translateX.value}, ${translateY.value}); --arrow-x: ${arrowX.value}; opacity: ${opacity.value};'`))
const tooltipClass = computed(() => ({
  'fr-tooltip--shown': show.value,
  'fr-placement--top': top.value,
  'fr-placement--bottom': !top.value,
}))

const clickHandler = (event: MouseEvent) => {
  if (!show.value) {
    return
  }
  if (event.target === source.value || source.value?.contains(event.target as Node)) {
    return
  }
  if (event.target === tooltip.value || tooltip.value?.contains(event.target as Node)) {
    return
  }
  show.value = false
}

const keydownHandler = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    show.value = false
  }
}

const onMouseEnterHandler = (event: MouseEvent) => {
  if (props.onHover && (event.target === source.value || source.value?.contains(event.target as Node))) {
    show.value = true
    // @ts-ignore internal property available just for this component
    if (globalThis.__vueDsfr__lastTooltipShow) {
      // @ts-ignore internal property available just for this component
      globalThis.__vueDsfr__lastTooltipShow.value = false
    }
  }
}

const onMouseLeave = () => {
  if (props.onHover) {
    show.value = false
  }
}

const onClick = () => {
  if (!props.onHover) {
    show.value = true
    // @ts-ignore internal property available just for this component
    globalThis.__vueDsfr__lastTooltipShow = show
  }
}

onMounted(() => {
  document.documentElement.addEventListener('click', clickHandler)
  document.documentElement.addEventListener('keydown', keydownHandler)
  document.documentElement.addEventListener('mouseover', onMouseEnterHandler)
})

onUnmounted(() => {
  document.documentElement.removeEventListener('click', clickHandler)
  document.documentElement.removeEventListener('keydown', keydownHandler)
  document.documentElement.removeEventListener('mouseover', onMouseEnterHandler)
})
</script>

<template>
  <component
    v-bind="$attrs"
    :is="onHover ? 'a' : 'button'"
    :id="`link-${id}`"
    ref="source"
    :class="onHover ? 'fr-link' : 'fr-btn  fr-btn--tooltip'"
    :aria-describedby="id"
    :href="onHover ? '#' : undefined"
    @click="onClick()"
    @mouseleave="onMouseLeave()"
    @focus="onMouseEnterHandler($event)"
    @blur="onMouseLeave()"
  >
    <!-- @slot Slot par défaut pour le contenu de l’infobulle -->
    <slot />
  </component>
  <span
    :id="id"
    ref="tooltip"
    class="fr-tooltip  fr-placement"
    :class="tooltipClass"
    :style="tooltipStyle"
    role="tooltip"
    aria-hidden="true"
  >
    {{ content }}
  </span>
</template>

<style scoped>
.fr-tooltip {
  transition: opacity 0.3s ease-in-out;
}
</style>
