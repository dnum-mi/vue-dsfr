<script setup>
import { ref } from 'vue'
import DsfrModal from '@/components/DsfrModal/DsfrModal.vue'

const isModalOpen = ref(false)
const displayAlert = ref(false)
const close = () => {
  displayAlert.value = false
  setTimeout(
    () => { isModalOpen.value = false },
    1000,
  )
}

// eslint-disable-next-line no-unused-vars
const actions = [
  {
    label: 'Valider',
    onClick: () => {
      displayAlert.value = true
      setTimeout(
        close,
        2000,
      )
    },
  },
  {
    label: 'Annuler',
    secondary: true,
    onClick: () => { isModalOpen.value = false },
  },
]
</script>
<template>
  <div>
    <DsfrButton
      class="my-1"
      @click="isModalOpen = true"
    >
      Open modal
    </DsfrButton>
  </div>

  <DsfrModal
    v-if="isModalOpen"
    title="Exemple de modale"
    :opened="isModalOpen"
    :actions="actions"
    @close="isModalOpen = false"
  >
    <DsfrAlert
      :closed="!displayAlert"
      type="success"
      small
      description="Opération terminée avec succès"
    />
    Ceci est une modale. Elle peut se fermer sans aucun changement au clic sur le bouton "Fermer" ou bien simplement avec la touche <kbd>Échappe</kbd>
  </DsfrModal>
</template>
