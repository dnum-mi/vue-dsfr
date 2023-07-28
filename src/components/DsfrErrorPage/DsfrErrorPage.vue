<script lang="ts" setup>
import { type DsfrButtonProps } from '../DsfrButton/DsfrButton.vue'
import DsfrButtonGroup from '../DsfrButton/DsfrButtonGroup.vue'

withDefaults(defineProps<{
  title?: string
  subtitle?: string
  description?: string
  help?: string
  buttons: DsfrButtonProps[]
}>(), {
  title: 'Page non trouvée',
  subtitle: 'Erreur 404',
  description: 'La page que vous cherchez est introuvable. Excusez-nous pour la gêne occasionnée.',
  help: 'Si vous avez tapé l\'adresse web dans le navigateur, vérifiez qu\'elle est correcte. La page n\'est peut être plus disponible.',
  buttons: () => [],
})
</script>

<template>
  <div class="fr-container  flex">
    <div class="half">
      <h1 class="font-25">{{ title }}</h1>
      <span class="block mt-15  mb-15">{{ subtitle }}</span>
      <p class="font-125">{{ description }}</p>
      <p>{{ help }}</p>
      <DsfrButtonGroup
        v-if="buttons?.length"
        :buttons="buttons"
        inline-layout-when="always"
      />
    </div>
    <div class="half  self-center  text-center">
      <img
        class="error-img"
        src="../../assets/img/technical-error.png"
      >
    </div>
  </div>
</template>

<style scoped>

  .flex {
    display: flex;
  }

  .block {
    display: flex;
  }

  .half {
    max-width: 50%;
    width: 50%;
  }

  .self-center {
    align-self: center;
  }

  .text-center {
    text-align: center;
  }

  .mt-15 {
    margin-top: 1.5rem;
  }

  .mb-15 {
    margin-bottom: 1.5rem;
  }

  .font-125 {
    font-size: 1.25rem;
  }

  .font-25 {
    font-size: 2.5rem;
  }

</style>
