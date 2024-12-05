<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import { useRoute } from 'vue-router'

import DsfrBreadcrumb from '../src/components/DsfrBreadcrumb/DsfrBreadcrumb.vue'
import DsfrFooter from '../src/components/DsfrFooter/DsfrFooter.vue'
import DsfrHeader, { type DsfrHeaderProps } from '../src/components/DsfrHeader/DsfrHeader.vue'
import DsfrModal from '../src/components/DsfrModal/DsfrModal.vue'
import DsfrNavigation, { type DsfrNavigationProps } from '../src/components/DsfrNavigation/DsfrNavigation.vue'
import DsfrSkipLinks, { type DsfrSkipLinksProps } from '../src/components/DsfrSkipLinks/DsfrSkipLinks.vue'

import AppToaster from './components/AppToaster.vue'
import useToaster from './composables/use-toaster.js'

const toaster = useToaster()

const links: DsfrSkipLinksProps['links'] = [
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
  toaster.addMessage({ description: 'Notifications', type: 'success' })
  showNotifications.value = true
}

const quickLinks: DsfrHeaderProps['quickLinks'] = [
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
    label: 'Code source',
    href: 'https://github.com/dnum-mi/vue-dsfr/tree/main/demo-app',
    icon: 'ri-github-fill',
  },
  {
    label: 'DSFR',
    href: 'https://www.systeme-de-design.gouv.fr/',
  },
]

const route = useRoute()
const navItems: DsfrNavigationProps['navItems'] = [
  {
    id: useId(),
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
    to: { name: 'CardTile' },
    text: 'Carte et tuile',
  },
  {
    to: { name: 'Languages' },
    text: 'Languages',
  },
  {
    title: 'Accordéons et Onglets',
    get active () {
      return ['Accordéons', 'Onglets'].includes(route.name as string)
    },
    links: [
      {
        to: { name: 'Accordions' },
        text: 'Accordéons',
      },
      {
        to: { name: 'Tabs' },
        text: 'Onglets',
      },
    ],
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
  {
    to: { name: 'Tags' },
    text: 'Tags',
  },
]

const beforeMandatoryLinks = [{ label: 'Before', to: '/before' }]
const afterMandatoryLinks = [
  { label: 'After', to: '/after' },
  {
    label: 'Paramètres d’affichage',
    button: true,
    class: 'fr-icon-theme-fill fr-link--icon-left',
    to: '/settings',
    onclick: () => console.log('Settings'), // eslint-disable-line no-console
  },
]
const a11yCompliance = 'partiellement conforme'
const logoText = ['République', 'des châtons']
const legalLink = '/mentions-legales'
const personalDataLink = '/donnees-personnelles'
const cookiesLink = '/cookies'
const a11yComplianceLink = '/a11y-conformite'
const descText = 'Description'
const homeLink = '/'
const licenceText = undefined
const licenceTo = undefined
const licenceName = undefined
const licenceLinkProps = undefined
const ecosystemLinks = [
  {
    label: 'info.gouv.fr',
    href: 'https://info.gouv.fr',
    title: 'Informations gouvernementales, nouvelle fenêtre',
  },
  {
    label: 'service-public.fr',
    href: 'https://service-public.fr',
    title: 'Informations et démarches administratives, nouvelle fenêtre',
  },
  {
    label: 'legifrance.gouv.fr',
    href: 'https://legifrance.gouv.fr',
    title: 'Service public de diffusion du droit, nouvelle fenêtre',
  },
  {
    label: 'data.gouv.fr',
    href: 'https://data.gouv.fr',
    title: 'Plateforme des données publiques, nouvelle fenêtre',
  },
]

const search = ref('')
const currentRoute = computed(() => route.name)
</script>

<template>
  <div style="position: relative; padding-bottom: 4rem;">
    <DsfrSkipLinks
      :links="links"
    />
    <DsfrHeader
      v-model="search"
      :quick-links="quickLinks"
      show-search
      service-title="VueDSFR demo App"
      placeholder="Rechercher placeholder"
    >
      <template #mainnav>
        <DsfrNavigation
          :nav-items="navItems"
        />
      </template>
    </DsfrHeader>

    <main class="fr-container fr-pb-2w">
      <h1>Demo VueDsfr</h1>

      <DsfrBreadcrumb
        :links="[{ text: 'Accueil', to: '/' }, { text: (currentRoute as string) }]"
      />

      <router-view />
    </main>

    <DsfrFooter
      :a11y-compliance="a11yCompliance"
      :logo-text="logoText"
      :legal-link="legalLink"
      :personal-data-link="personalDataLink"
      :cookies-link="cookiesLink"
      :a11y-compliance-link="a11yComplianceLink"
      :desc-text="descText"
      :home-link="homeLink"
      :ecosystem-links="ecosystemLinks"
      :licence-text="licenceText"
      :licence-to="licenceTo"
      :licence-name="licenceName"
      :licence-link-props="licenceLinkProps"
      :after-mandatory-links="afterMandatoryLinks"
      :before-mandatory-links="beforeMandatoryLinks"
      operator-img-src="https://loremflickr.com/300/200/cat"
      operator-img-alt="L'opérateur petit chat"
      operator-to="/"
      :operator-img-style="{ 'margin-left': '0.5px', padding: '1rem', 'max-width': '15rem' }"
    />
  </div>

  <DsfrModal
    title="Notifications"
    :opened="showNotifications"
    @close="showNotifications = false"
  >
    Notifications
  </DsfrModal>
  <AppToaster
    :messages="toaster.messages"
    @close-message="toaster.removeMessage($event)"
  />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
