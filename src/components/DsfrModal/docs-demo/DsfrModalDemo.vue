<script setup lang="ts">
import DsfrButton from '@/components/DsfrButton/DsfrButton.vue'

import { ref } from 'vue'
import DsfrModal from '../DsfrModal.vue'

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
      v-model:opened="opened"
      :title="title"
      :icon="icon"
      :is-alert="isAlert"
      @close="opened = false"
    >
      <template #default>
        <p>Contenu de la modale (slot par défaut)</p>
      </template>
    </DsfrModal>
  </div>
</template>
