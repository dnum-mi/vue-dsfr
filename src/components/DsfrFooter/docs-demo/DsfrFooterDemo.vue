<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import VIcon from '../../VIcon/VIcon.vue'
import DsfrFooter from '../DsfrFooter.vue'

import { useScheme } from '@/composables'

const { setScheme, theme } = useScheme()

const changeTheme = () => {
  setScheme(theme.value === 'light' ? 'dark' : 'light')
}

const beforeMandatoryLinks = [{ label: 'Before', to: '/before' }]
const afterMandatoryLinks = [
  { label: 'After', to: '/after' },
  {
    label: 'Paramètres d’affichage',
    button: true,
    class: 'fr-icon-theme-fill fr-link--icon-left fr-px-2v',
    to: '/settings',
    onclick: changeTheme,
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
    label: 'legifrance.gouv.fr',
    href: 'https://legifrance.gouv.fr',
    title: 'Légifrance, nouvelle fenêtre',
  },
  {
    label: 'info.gouv.fr',
    href: 'https://info.gouv.fr',
    title: 'Informations gouvernementales, nouvelle fenêtre',
  },
  {
    label: 'service-public.gouv.fr',
    href: 'https://service-public.gouv.fr',
    title: 'Informations et démarches administratives, nouvelle fenêtre',
  },
  {
    label: 'data.gouv.fr',
    href: 'https://data.gouv.fr',
    title: 'Plateforme des données publiques, nouvelle fenêtre',
  },
]

const app = getCurrentInstance()
app?.appContext.app.use(
  createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: { template: '<div>Accueil</div>' } },
      { path: '/a11y-conformite', component: { template: '<div>Conformité RGAA</div>' } },
      { path: '/mentions-legales', component: { template: '<div>Mentions légales</div>' } },
      { path: '/donnees-personnelles', component: { template: '<div>Données personnelles</div>' } },
      { path: '/cookies', component: { template: '<div>cookies</div>' } },
      { path: '/after', component: { template: '<div>after</div>' } },
      { path: '/before', component: { template: '<div>before</div>' } },
      { path: '/_frame', component: { template: '<div>frame</div>' } },
    ],
  }),
).component('VIcon', VIcon)

const partners = {
  titleTag: 'h5',
  title: 'Partenaires',
  mainPartner: {
    name: 'Partenaire 1',
    href: '/partenaire-1',
    logo: 'https://loremflickr.com/100/100/cat?random=1',
  },
}
</script>

<template>
  <DsfrFooter
    :before-mandatory-links
    :after-mandatory-links
    :a11y-compliance
    :logo-text
    :legal-link
    :personal-data-link
    :cookies-link
    :a11y-compliance-link
    :desc-text
    :home-link
    :licence-text
    :licence-to
    :licence-name
    :licence-link-props
    :ecosystem-links
    :partners
  />
</template>
