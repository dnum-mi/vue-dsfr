<script lang="ts" setup>
import { ref } from 'vue'

import DsfrStepper from '../DsfrStepper.vue'

import DsfrButton from '@/components/DsfrButton/DsfrButton.vue'

const steps = [
  'Première étape',
  'Deuxième étape',
  'Troisième étape',
  'Quatrième étape',
]
const currentStep = ref(1)
</script>

<template>
  <DsfrStepper
    :steps="steps"
    :current-step="currentStep"
  />

  <div class="flex gap-2">
    <DsfrButton
      type="button"
      label="Reculer"
      icon="ri-skip-back-mini-line"
      @click="currentStep > 1 && currentStep--"
    />
    <DsfrButton
      type="button"
      label="Avancer"
      icon="ri-skip-forward-mini-line"
      icon-right
      @click="currentStep < 4 && currentStep++"
    />
  </div>
</template>
