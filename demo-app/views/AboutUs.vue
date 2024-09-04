<script lang="ts" setup>
import { ref } from 'vue'

import MyIcon from '../../src/components/VIcon/VIcon.vue'

const title = ref('SVG À propos')
setTimeout(() => {
  title.value = 'SVG À propos (updated)'
}, 2000)
</script>

<template>
  À propos
  <MyIcon
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
