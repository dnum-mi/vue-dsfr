<script lang="ts" setup>
import DsfrInput from '@/components/DsfrInput/DsfrInput.vue'

import { ref } from 'vue'
import DsfrHighlight from '../DsfrHighlight.vue'

const color = ref('green-emeraude')
</script>

<template>
  <div>
    <DsfrHighlight
      text="Le texte mis en exergue"
    />
    <DsfrHighlight
      small
      text="Le texte mis en exergue en petit"
    />
    <DsfrHighlight
      large
      text="Le texte mis en exergue en grand"
    />
    <DsfrHighlight
      text="Le texte mis en exergue green-emeraude"
      :color="color"
    />
    <DsfrInput
      v-model="color"
      type="text"
      label="Couleur à mettre à la mise en exergue"
      label-visible
      placeholder="purple-glycine"
    />
  </div>
</template>
