<script lang="ts" setup>

const beforeMandatoryLinks = [{ label: 'Before', to: '/before' }]
const afterMandatoryLinks = [
  { label: 'After', to: '/after' },
  {
    label: 'Paramètres d’affichage',
    button: true,
    class: 'fr-icon-theme-fill fr-link--icon-left',
    to: '/settings',
    onclick: () => console.log('Settings'),
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
    label: 'gouvernement.fr',
    href: 'https://gouvernement.fr',
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
