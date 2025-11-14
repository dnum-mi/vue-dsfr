<script lang="ts" setup>
import { VIcon } from '@gouvminint/vue-dsfr'
import { ref } from 'vue'

const title = ref('SVG À propos')
setTimeout(() => {
  title.value = 'SVG À propos (updated)'
}, 2000)
</script>

<template>
  À propos
  <VIcon
    name="ri-checkbox-circle-line"
    :scale="2"
    animation="float"
    label="icon label"
    :title="title"
  />
  Prout
  <VIcon
    name="ri-checkbox-circle-line"
    scale="2"
    animation="float"
    label="icon label"
    title="icon title"
  />
  Prout
</template>
