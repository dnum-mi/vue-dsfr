<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import DsfrHeader from '../src/components/DsfrHeader/DsfrHeader.vue'
import DsfrNavigation from '../src/components/DsfrNavigation/DsfrNavigation.vue'
import DsfrSkipLinks from '../src/components/DsfrSkipLinks/DsfrSkipLinks.vue'
import DsfrBreadcrumb from '../src/components/DsfrBreadcrumb/DsfrBreadcrumb.vue'

const route = useRoute()
const currentPage = ref('Home')

watch(() => route, (newRoute) => {
  currentPage.value = navItems.find(({ name }) => name === newRoute.to.name)
})

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

const showNotifications = ref(false)
const displayNotifications = () => {
  showNotifications.value = true
}

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
  {
    to: { name: 'Modal' },
    text: 'Modales',
  },
  {
    to: { name: 'Forms' },
    text: 'Formulaires',
  },
  {
    to: { name: 'Languages' },
    text: 'Languages',
  },
  {
    to: { name: 'Alertes' },
    text: 'Alertes & Bandeau',
  },
  {
    to: { name: 'MiseEnAvant' },
    text: 'Mise en Avant',
  },
]
</script>

<template>
  <div style="position: relative; padding-bottom: 4rem;">
    <DsfrSkipLinks
      :links="links"
    />
    <DsfrHeader
      :quick-links="quickLinks"
      show-search
      placeholder="Rechercher placeholder"
    />

    <div class="fr-container">
      <DsfrNavigation
        :nav-items="navItems"
      />

      <h1>Demo VueDsfr</h1>

      <DsfrBreadcrumb
        :links="[{text: 'Accueil', to: '/'}, {text: 'Test fil d’Ariane'}]"
      />

      <router-view />

      <DsfrModal
        title="Notifications"
        :opened="showNotifications"
        @close="showNotifications = false"
      >
        Notifications
      </DsfrModal>
    </div>
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
