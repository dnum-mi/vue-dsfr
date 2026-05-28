<script setup lang="ts">
import { ref } from 'vue'

import DsfrModal from '../DsfrModal.vue'

import DsfrButton from '@/components/DsfrButton/DsfrButton.vue'

const opened = ref(false)
const title = 'Modale avec interaction extérieure désactivée'
const icon = ref('ri-checkbox-circle-line')
const disableOutsideInteraction = ref(true)
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrButton @click="opened = true">
      Ouvrir la modale
    </DsfrButton>

    <DsfrModal
      :opened
      :title
      :icon
      :disable-outside-interaction
      @close="opened = false"
    >
      <template #default>
        <p>Modale sans fermeture au clic sur l'arrière-plan</p>
      </template>
    </DsfrModal>
  </div>
</template>
