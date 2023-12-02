<template>
  <div class="fr-p-2w  flex gap-4">
    <DsfrButton icon="ri-close-line">
      Texte avec icône
    </DsfrButton>

    <DsfrButton
      :icon="{name: 'ri-close-line', fill: 'purple'}"
      secondary
    >
      Texte avec icône violette
    </DsfrButton>
  </div>
</template>

<script lang="ts" setup>
import DsfrButton from '../../src/components/DsfrButton/DsfrButton.vue'
</script>

<style scoped>
.flex {
  display: flex;
}
.gap-4 {
  gap: 1rem;
}
</style>
