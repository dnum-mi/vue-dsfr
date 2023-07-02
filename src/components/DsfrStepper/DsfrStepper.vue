<script lang="ts" setup>
withDefaults(defineProps<{
  steps: string[]
  currentStep: number
}>(), {
  steps: () => [],
  currentStep: 1,
})
</script>

<template>
  <div class="fr-stepper">
    <h2 class="fr-stepper__title">
      <span class="fr-stepper__state">Étape {{ currentStep }} sur {{ steps.length }}</span>
      {{ steps[currentStep - 1] }}
    </h2>
    <div
      class="fr-stepper__steps"
      :data-fr-current-step="currentStep"
      :data-fr-steps="steps.length"
    />
    <p class="fr-stepper__details">
      <span
        v-if="currentStep < steps.length"
        class="fr-text--bold"
      >Étape suivante :</span> {{ steps[currentStep] }}
    </p>
  </div>
</template>
