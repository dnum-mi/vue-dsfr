<script lang="ts" setup>
import DsfrPicture from '../DsfrPicture.vue'

const size = 'medium'
const src = 'https://loremflickr.com/300/200/cat'
const alt = ''
const title = 'Photographie d’un chaton'
const legend = 'Photographie d’un chaton'
const ratio = '16x9'
</script>

<template>
  <DsfrPicture
    :src="src"
    :alt="alt"
    :title="title"
    :legend="legend"
    :size="size"
    :ratio="ratio"
    style="max-width: 500px"
  />
</template>
