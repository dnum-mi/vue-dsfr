<script lang="ts" setup>
import type { DsfrPictogramProps } from './DsfrPictogram.types'

import { computed } from 'vue'

import { useRandomId } from '../../utils/random-utils'
import { sanitizeInlineSvgMarkupFromDataUri } from '../../utils/svg-data-uri-utils'

export type { DsfrPictogramProps }

const props = withDefaults(defineProps<DsfrPictogramProps>(), {
  imgSrc: undefined,
  svgPath: undefined,
  svgAttrs: () => ({ viewBox: '0 0 80 80', width: '80px', height: '80px' }),
  title: undefined,
})

const dataImageRegex = /^data:image\/svg\+xml(?:;[^,]*)?,/i
const defaultSvgAttrs = { viewBox: '0 0 80 80', width: '80px', height: '80px' }

const inlineSvgIdSuffix = useRandomId('pictogram', 'artwork').replace(/[^\w-]/g, '_')
const svgDataUriComputed = computed(() => !!props.svgPath?.match(dataImageRegex))
const svgDataUriMarkupComputed = computed(() => (
  sanitizeInlineSvgMarkupFromDataUri(props.svgPath, inlineSvgIdSuffix)
))
</script>

<template>
  <img
    v-if="imgSrc"
    :src="imgSrc"
    class="fr-artwork"
    alt=""
    :title="title"
  >
  <span
    v-else-if="svgDataUriMarkupComputed"
    aria-hidden="true"
    class="fr-artwork fr-artwork--inline"
    v-html="svgDataUriMarkupComputed"
  />
  <img
    v-else-if="svgDataUriComputed"
    :src="svgPath"
    class="fr-artwork"
    alt=""
    :title="title"
  >
  <svg
    v-else-if="svgPath"
    aria-hidden="true"
    class="fr-artwork"
    v-bind="{ ...defaultSvgAttrs, ...svgAttrs }"
  >
    <title v-if="title">{{ title }}</title>
    <use
      class="fr-artwork-decorative"
      :href="`${svgPath}#artwork-decorative`"
    />
    <use
      class="fr-artwork-minor"
      :href="`${svgPath}#artwork-minor`"
    />
    <use
      class="fr-artwork-major"
      :href="`${svgPath}#artwork-major`"
    />
  </svg>
</template>

<style scoped>
.fr-artwork--inline :deep(svg) {
  width: 100%;
  height: 100%;
}
</style>
