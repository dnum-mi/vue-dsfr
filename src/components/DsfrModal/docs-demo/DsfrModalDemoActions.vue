<script setup lang="ts">
import DsfrButton, { type DsfrButtonProps } from '@/components/DsfrButton/DsfrButton.vue'

import { ref } from 'vue'
import DsfrModal from '../DsfrModal.vue'

const opened = ref(false)
const title = 'Titre de la modale'
const isAlert = ref(false)
const icon = ref('ri-checkbox-circle-line')
const validated = ref<boolean>()

const actions: DsfrButtonProps[] = [
  {
    label: 'Valider',
    onClick () {
      validated.value = true
      opened.value = false
    },
  },
  {
    label: 'Non, merci',
    secondary: true,
    onClick () {
      validated.value = false
      opened.value = false
    },
  },
  {
    label: 'Annuler',
    tertiary: true,
    onClick () {
      opened.value = false
    },
  },
]
</script>

<template>
  <div class="fr-container fr-my-2v">
    <DsfrButton @click="opened = true">
      Ouvrir la modale
    </DsfrButton>

    <p
      v-if="validated !== undefined"
      class="fr-my-2v"
    >
      Veut des patates : {{ validated ? 'Oui' : 'Non' }}
    </p>
    <DsfrModal
      v-model:opened="opened"
      :title="title"
      :icon="icon"
      :is-alert="isAlert"
      :actions="actions"
      @close="opened = false"
    >
      <template #default>
        <p>Êtes-vous sur de vouloir des patates ?</p>
      </template>
    </DsfrModal>
  </div>
</template>
