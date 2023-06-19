<script setup lang="ts">
import { StyleValue, computed, useSlots } from 'vue'
import { type RouteLocationRaw } from 'vue-router'

import DsfrLogo from '../DsfrLogo/DsfrLogo.vue'
import DsfrFooterPartners, { type DsfrFooterPartnersProps } from '../DsfrFooter/DsfrFooterPartners.vue'

const props = withDefaults(defineProps<{
  a11yCompliance?: string
  a11yComplianceLink?: RouteLocationRaw
  legalLink?: string
  homeLink?: RouteLocationRaw
  partners?: DsfrFooterPartnersProps
  personalDataLink?: string
  cookiesLink?: string
  logoText?: string | string[]
  descText?: string
  beforeMandatoryLinks?: {label: string, to: RouteLocationRaw}[]
  afterMandatoryLinks?: {label: string, to: RouteLocationRaw}[]
  mandatoryLinks?: {label: string, to: RouteLocationRaw}[]
  ecosystemLinks?: {label: string, href: string}[]
  operatorLinkText?: string
  operatorTo?: RouteLocationRaw
  operatorImgStyle?: StyleValue
  operatorImgSrc?: string
  operatorImgAlt?: string
  licenceTo?: string
  licenceLinkProps?: { href: string } | { to: RouteLocationRaw }
  licenceText?: string
  licenceName?: string
}>(), {
  a11yCompliance: 'non conforme',
  a11yComplianceLink: '/a11y',
  legalLink: '/mentions-legales',
  homeLink: '/',
  partners: () => null,
  personalDataLink: '/donnees-personnelles',
  cookiesLink: '/cookies',
  logoText: () => ['République', 'Française'],
  descText: undefined,
  beforeMandatoryLinks: () => [],
  afterMandatoryLinks: () => [],
  mandatoryLinks: (props) => [
    {
      label: `Accessibilité : ${props.a11yCompliance}`,
      to: props.a11yComplianceLink,
    },
    {
      label: 'Mentions légales',
      to: props.legalLink,
    },
    {
      label: 'Données personnelles',
      to: props.personalDataLink,
    },
    {
      label: 'Gestion des cookies',
      to: props.cookiesLink,
    },
  ],
  ecosystemLinks: () => [
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
  ],
  operatorLinkText: 'Revenir à l’accueil',
  operatorTo: '/',
  operatorImgStyle: undefined,
  operatorImgSrc: undefined,
  operatorImgAlt: '',
  licenceText: 'Sauf mention contraire, tous les textes de ce site sont sous',
  licenceTo: 'https://github.com/etalab/licence-ouverte/blob/master/LO.md',
  licenceLinkProps: () => undefined,
  licenceName: 'licence etalab-2.0',
})

const allLinks = computed(() => {
  return [
    ...props.beforeMandatoryLinks,
    ...props.mandatoryLinks,
    ...props.afterMandatoryLinks,
  ]
})

const slots = useSlots()
const isWithSlotLinkLists = computed(() => {
  return slots['footer-link-lists']?.().length
})
const isExternalLink = computed(() => {
  const to = props.licenceTo || props.licenceLinkProps.to
  return to && typeof to === 'string' && to.startsWith('http')
})
const routerLinkLicenceTo = computed(() => {
  return isExternalLink.value ? '' : props.licenceTo
})
const aLicenceHref = computed(() => {
  return isExternalLink.value ? props.licenceTo : ''
})
</script>

<template>
  <footer
    id="footer"
    class="fr-footer"
    role="contentinfo"
  >
    <div
      v-if="isWithSlotLinkLists"
      class="fr-footer__top"
    >
      <div class="fr-container">
        <div class="fr-grid-row fr-grid-row--start fr-grid-row--gutters">
          <!-- @slot Slot #footer-link-lists pour pouvoir changer les liens dans la rubrique en haut du pied de page  -->
          <slot name="footer-link-lists" />
        </div>
      </div>
    </div>
    <div class="fr-container">
      <div class="fr-footer__body">
        <div class="fr-footer__brand fr-enlarge-link">
          <RouterLink
            :to="homeLink"
            title="Retour à l’accueil"
          >
            <DsfrLogo
              :logo-text="logoText"
            />
          </RouterLink>
          <RouterLink
            class="fr-footer__brand-link"
            :to="operatorTo"
            :title="operatorLinkText"
          >
            <img
              v-if="operatorImgSrc"
              class="fr-footer__logo  fr-responsive-img"
              :style="[
                typeof operatorImgStyle === 'string' ? operatorImgStyle : '',
                {
                  'margin-left': '0.5px',
                  'padding': '1rem',
                  ...(typeof operatorImgStyle === 'object' ? operatorImgStyle : {}),
                  'max-width': '12.5rem'
                }
              ]"
              :src="operatorImgSrc"
              :alt="operatorImgAlt"
            >
          </RouterLink>
        </div>
        <div class="fr-footer__content">
          <p
            class="fr-footer__content-desc"
          >
            <!-- @slot Slot #description pour le contenu de la description du footer. Sera dans `<p class="fr-footer__content-desc">` -->
            <slot name="description">
              {{ descText }}
            </slot>
          </p>
          <ul class="fr-footer__content-list">
            <li
              v-for="(link, index) in ecosystemLinks"
              :key="index"
              class="fr-footer__content-item"
            >
              <a
                class="fr-footer__content-link"
                :href="link.href"
                target="_blank"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <DsfrFooterPartners
        v-if="partners"
        v-bind="partners"
      />
      <div class="fr-footer__bottom">
        <ul class="fr-footer__bottom-list">
          <li
            v-for="(link, index) in allLinks"
            :key="index"
            class="fr-footer__bottom-item"
          >
            <RouterLink
              class="fr-footer__bottom-link"
              :to="link.to"
              :data-testid="link.to"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
        <div class="fr-footer__bottom-copy">
          <p>
            {{ licenceText }}
            <component
              :is="isExternalLink ? 'a' : 'RouterLink'"
              class="fr-link-licence  no-content-after"
              :to="isExternalLink ? null : routerLinkLicenceTo"
              :href="aLicenceHref"
              :target="isExternalLink ? '_blank' : undefined"
              rel="noopener noreferrer"
              v-bind="licenceLinkProps"
            >
              {{ licenceName }}
            </component>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.fr-footer {
  color: var(--text-default-grey);
}
.no-content-after {
  --link-blank-content: '';
}
.ov-icon {
  margin-bottom: 0;
}
</style>
