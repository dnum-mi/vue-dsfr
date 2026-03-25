<script setup lang="ts">
import { ref } from 'vue'

import DsfrModal from '../DsfrModal.vue'

import DsfrButton from '@/components/DsfrButton/DsfrButton.vue'

const opened = ref(false)
const title = 'Titre de la modale'
const isAlert = ref(false)
const icon = ref('ri-checkbox-circle-line')
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
      :is-alert
      @close="opened = false"
    >
      <template #default>
        <p>Contenu de la modale (slot par défaut)</p>
      </template>
    </DsfrModal>
  </div>
</template>
