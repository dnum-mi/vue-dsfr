<script setup>
import { ref } from 'vue'

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

const links = [
  {
    id: '#header',
    text: 'Allons au header',
  },
  {
    id: '#content',
    text: 'Allons au content',
  },
  {
    id: '#footer',
    text: 'Allons au footer',
  },
]
</script>

<template>
  <div style="position: relative;">
    <DsfrSkipLinks
      :links="links"
    />
    <h1>App</h1>
    <DsfrButton
      class="m1"
      @click="isModalOpen = true"
    >
      Open modal
    </DsfrButton>
    <teleport to="body">
      <DsfrModal
        v-if="isModalOpen"
        :opened="isModalOpen"
        :actions="actions"
        @close="isModalOpen = false"
      >
        <DsfrAlert
          :closed="!displayAlert"
          type="success"
          sm
          description="Opération terminée avec succès"
        />
        Ceci est une modale. Elle peut se fermer sans aucun changement au clic sur le bouton "Fermer" ou bien simplement avec la touche <kbd>Échappe</kbd>
      </DsfrModal>
    </teleport>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.m1 {
  margin: 0.5rem;
}
</style>
