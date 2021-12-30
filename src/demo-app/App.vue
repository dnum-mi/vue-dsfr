<script setup>
import { onMounted, reactive, ref, watchEffect } from 'vue'
import DsfrNavigation from '../components/DsfrNavigation/DsfrNavigation.vue'
import DsfrButton from '../components/DsfrButton/DsfrButton.vue'
import DsfrRadioButtonSet from '../components/DsfrRadioButton/DsfrRadioButtonSet.vue'
import { useScheme } from '../composables.js'

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

const showNotifications = ref(false)

const displayNotifications = () => {
  showNotifications.value = true
}

const links = [
  {
    id: 'header',
    text: 'Allons au header',
  },
  {
    id: 'content',
    text: 'Allons au content',
  },
  {
    id: 'footer',
    text: 'Allons au footer',
  },
]

const quickLinks = [
  {
    label: 'Notifications',
    path: '',
    icon: 'ri-notification-3-line',
    iconOnly: true,
    button: true,
    onClick: ($event) => {
      $event.preventDefault()
      displayNotifications()
    },
  },
  {
    label: 'À propos',
    to: { name: 'AboutUs' },
  },
  {
    label: 'DSFR',
    href: 'https://systeme-de-design.gouv.fr/',
  },
]

const navItems = [
  {
    to: { name: 'Home' },
    text: 'Accueil',
  },
  {
    to: { name: 'AboutUs' },
    text: 'À propos',
  },
]

const preferences = reactive({
  theme: undefined,
  scheme: undefined,
})

const options = [
  {
    label: 'System',
    value: 'system',
  },
  {
    label: 'Dark',
    value: 'dark',
  },
  {
    label: 'Light',
    value: 'light',
  },
]

onMounted(() => {
  const { theme, scheme, setScheme } = useScheme()
  preferences.scheme = scheme.value

  watchEffect(() => { preferences.theme = theme.value })

  watchEffect(() => setScheme(preferences.scheme))
})
</script>

<template>
  <div style="position: relative;">
    <DsfrSkipLinks
      :links="links"
    />
    <DsfrHeader
      :quick-links="quickLinks"
    />
    <div class="fr-container">
      <DsfrNavigation
        :nav-items="navItems"
      />
      <h1>App</h1>

      <router-view />

      <div>
        <DsfrButton
          class="my-1"
          @click="isModalOpen = true"
        >
          Open modal
        </DsfrButton>
      </div>

      <DsfrModal
        title="Notifications"
        :opened="showNotifications"
        @close="showNotifications = false"
      >
        Notifications
      </DsfrModal>

      <p>
        <DsfrButton @click="preferences.scheme = 'system'">
          System
        </DsfrButton>
        <DsfrButton @click="preferences.scheme = 'light'">
          Light
        </DsfrButton>
        <DsfrButton @click="preferences.scheme = 'dark'">
          Dark
        </DsfrButton>
      </p>

      <DsfrRadioButtonSet
        v-model="preferences.scheme"
        :options="options"
      />
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
        sm
        description="Opération terminée avec succès"
      />
      Ceci est une modale. Elle peut se fermer sans aucun changement au clic sur le bouton "Fermer" ou bien simplement avec la touche <kbd>Échappe</kbd>
    </DsfrModal>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.my-1 {
  margin-block: 0.5rem;
}
</style>
