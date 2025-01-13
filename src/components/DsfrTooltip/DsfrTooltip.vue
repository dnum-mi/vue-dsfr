<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

import { useRandomId } from '../../utils/random-utils'

import type { DsfrTooltipProps } from './DsfrTooltip.types'

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
  const isSourceAtTop = (sourceTop - tooltipHeight) < 0
  const isSourceAtBottom = !isSourceAtTop && (sourceTop + sourceHeight + tooltipHeight) >= document.documentElement.offsetHeight
  top.value = isSourceAtBottom
  const isSourceOnRightSide = (sourceLeft + sourceWidth) >= document.documentElement.offsetWidth
  const isSourceOnLeftSide = (sourceLeft + (sourceWidth / 2) - (tooltipWidth / 2)) <= 0

  translateY.value = isSourceAtBottom
    ? `${sourceTop - tooltipHeight + 8}px`
    : `${sourceTop + sourceHeight - 8}px`
  opacity.value = 1
  translateX.value = isSourceOnRightSide
    ? `${sourceLeft + sourceWidth - tooltipWidth - 4}px`
    : isSourceOnLeftSide
      ? `${sourceLeft + 4}px`
      : `${sourceLeft + (sourceWidth / 2) - (tooltipWidth / 2)}px`

  arrowX.value = isSourceOnRightSide
    ? `${(tooltipWidth / 2) - (sourceWidth / 2) + 4}px`
    : isSourceOnLeftSide
      ? `${-(tooltipWidth / 2) + (sourceWidth / 2) - 4}px`
      : '0px'
}

watch(show, computePosition, { immediate: true })

onMounted(() => {
  window.addEventListener('scroll', computePosition)
})
onUnmounted (() => {
  window.removeEventListener('scroll', computePosition)
})

const tooltipStyle = computed(() => (`transform: translate(${translateX.value}, ${translateY.value}); --arrow-x: ${arrowX.value}; opacity: ${opacity.value};'`))
const tooltipClass = computed(() => ({
  'fr-tooltip--shown': show.value,
  'fr-placement--top': top.value,
  'fr-placement--bottom': !top.value,
}))

const clickListener = (event: MouseEvent) => {
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

const onEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    show.value = false
  }
}

onMounted(() => {
  document.documentElement.addEventListener('click', clickListener)
  document.documentElement.addEventListener('keydown', onEscapeKey)
})

onUnmounted(() => {
  document.documentElement.removeEventListener('click', clickListener)
  document.documentElement.removeEventListener('keydown', onEscapeKey)
})

const onMouseEnter = () => {
  if (props.onHover) {
    show.value = true
  }
}

const onMouseLeave = () => {
  if (props.onHover) {
    show.value = false
  }
}

const onClick = () => {
  if (!props.onHover) {
    show.value = !show.value
  }
}
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
    @click.stop="onClick()"
    @mouseenter="onMouseEnter()"
    @mouseleave="onMouseLeave()"
    @focus="onMouseEnter()"
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
