<script lang="ts" setup>
import type { DsfrSummaryProps } from '../DsfrSummary.types'

import DsfrSummary from '../DsfrSummary.vue'

const title = 'Exemple de sommaire'
const titleTag: DsfrSummaryProps['titleTag'] = 'h2'
const anchors = [
  { link: '#', name: 'Première étape' },
  { link: '#', name: 'Deuxième étape' },
  { link: '#', name: 'Troisième étape' },
]
</script>

<template>
  <DsfrSummary
    :title="title"
    :title-tag="titleTag"
    :anchors="anchors"
  />
</template>
