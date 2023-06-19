<script lang="ts" setup>
import { ref } from 'vue'
const counter = ref(0)

const button = {
  label: 'Plus de patates !',
  icon: 'ri-add-line',
  onClick () {
    counter.value += 1
  },
}
</script>

<template>
  <DsfrCallout
    :button="button"
  />
  {{ counter }} patates
</template>
