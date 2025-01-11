<script lang="ts" setup>
import DsfrSummary from '../DsfrSummary.vue'

const title = 'Exemple de sommaire'
const anchors = [
  { link: '#', name: 'Première étape' },
  { link: '#', name: 'Deuxième étape' },
  { link: '#', name: 'Troisième étape' },
]
</script>

<template>
  <DsfrSummary
    :title="title"
    :anchors="anchors"
  />
</template>
