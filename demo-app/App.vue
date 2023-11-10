<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import DsfrHeader from '../src/components/DsfrHeader/DsfrHeader.vue'
import DsfrNavigation from '../src/components/DsfrNavigation/DsfrNavigation.vue'
import DsfrSkipLinks from '../src/components/DsfrSkipLinks/DsfrSkipLinks.vue'
import DsfrBreadcrumb from '../src/components/DsfrBreadcrumb/DsfrBreadcrumb.vue'

const links: InstanceType<typeof DsfrSkipLinks>['$props']['links'] = [
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

const quickLinks: InstanceType<typeof DsfrHeader>['$props']['quickLinks'] = [
  {
    label: 'Notifications',
    to: '',
    icon: 'ri-notification-3-line',
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

const route = useRoute()
const navItems: InstanceType<typeof DsfrNavigation>['$props']['navItems'] = [
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
    to: { name: 'SideMenu' },
    text: 'Menu latéral',
  },
  {
    to: { name: 'Languages' },
    text: 'Languages',
  },
  {
    title: 'Alertes et Bandeau',
    get active () {
      return ['Alertes', 'Bandeaux'].includes(route.name as string)
    },
    links: [
      {
        to: { name: 'Alertes' },
        text: 'Alertes',
      },
      {
        to: { name: 'Bandeaux' },
        text: 'Bandeaux',
      },
    ],
  },
  {
    to: { name: 'MiseEnAvant' },
    text: 'Mise en Avant',
  },
  {
    title: 'Titre de MEGA MENU',
    description: 'Un charmant MEGA MENU',
    get active () {
      return ['Languages', 'Alertes', 'Bandeaux'].includes(route.name as string)
    },
    link: {
      to: { name: 'Home' },
      text: 'Aller à la rubrique du MEGA MENU',
    },
    menus: [
      {
        title: 'Nom de catégorie 1',
        links: [
          {
            text: 'Lien 1',
            to: { name: 'Languages' },
          },
          {
            text: 'Lien 2',
            to: { name: 'Languages' },
          },
          {
            text: 'Lien 3',
            to: { name: 'Languages' },
          },
          {
            text: 'Lien 4',
            to: { name: 'Languages' },
          },
          {
            text: 'Lien 5',
            to: { name: 'Languages' },
          },
        ],
      },
      {
        title: 'Nom de catégorie 2',
        links: [
          {
            text: 'Lien 1',
            to: { name: 'Alertes' },
          },
          {
            text: 'Lien 2',
            to: { name: 'Alertes' },
          },
          {
            text: 'Lien 3',
            to: { name: 'Alertes' },
          },
          {
            text: 'Lien 4',
            to: { name: 'Alertes' },
          },
          {
            text: 'Lien 5',
            to: { name: 'Alertes' },
          },
        ],
      },
      {
        title: 'Nom de catégorie 3',
        links: [
          {
            text: 'Lien 1',
            to: { name: 'Bandeaux' },
          },
          {
            text: 'Lien 2',
            to: { name: 'Bandeaux' },
          },
          {
            text: 'Lien 3',
            to: { name: 'Bandeaux' },
          },
          {
            text: 'Lien 4',
            to: { name: 'Bandeaux' },
          },
          {
            text: 'Lien 5',
            to: { name: 'Bandeaux' },
          },
        ],
      },
    ],
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
