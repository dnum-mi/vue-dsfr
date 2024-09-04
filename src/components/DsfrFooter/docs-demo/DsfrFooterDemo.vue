<script lang="ts" setup>
import VIcon from '../../VIcon/VIcon.vue'
import { createWebHistory, createRouter } from 'vue-router'
import { getCurrentInstance } from 'vue'

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
  },
  {
    label: 'info.gouv.fr',
    href: 'https://info.gouv.fr',
  },
  {
    label: 'service-public.fr',
    href: 'https://service-public.fr',
  },
  {
    label: 'data.gouv.fr',
    href: 'https://data.gouv.fr',
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
</script>

<template>
  <DsfrFooter
    :before-mandatory-links="beforeMandatoryLinks"
    :after-mandatory-links="afterMandatoryLinks"
    :a11y-compliance="a11yCompliance"
    :logo-text="logoText"
    :legal-link="legalLink"
    :personal-data-link="personalDataLink"
    :cookies-link="cookiesLink"
    :a11y-compliance-link="a11yComplianceLink"
    :desc-text="descText"
    :home-link="homeLink"
    :licence-text="licenceText"
    :licence-to="licenceTo"
    :licence-name="licenceName"
    :licence-link-props="licenceLinkProps"
    :ecosystem-links="ecosystemLinks"
  />
</template>
