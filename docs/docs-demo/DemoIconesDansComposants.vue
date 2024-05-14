<script lang="ts" setup>
import DsfrButton from '../../src/components/DsfrButton/DsfrButton.vue'
</script>

<template>
  <div class="fr-p-2w  flex gap-4  flex-wrap">
    <DsfrButton icon="fr-icon-close-line">
      Texte avec icône Dsfr
    </DsfrButton>

    <DsfrButton icon="ri-close-line">
      Texte avec icône OhVueIcon
    </DsfrButton>

    <DsfrButton
      :icon="{ name: 'ri-close-line', fill: 'purple' }"
      secondary
    >
      Texte avec icône
      OhVueIcon violette
    </DsfrButton>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}
.gap-4 {
  gap: 1rem;
}
</style>
