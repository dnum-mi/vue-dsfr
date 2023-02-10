<script>
import { defineComponent } from 'vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

import DsfrLogo from '../DsfrLogo/DsfrLogo.vue'
import DsfrFooterPartners from '../DsfrFooter/DsfrFooterPartners.vue'

export default defineComponent({
  name: 'DsfrFooter',

  components: {
    DsfrFooterPartners,
    DsfrLogo,
    VIcon,
  },

  props: {
    a11yCompliance: {
      type: String,
      default: 'non conforme',
    },
    a11yComplianceLink: {
      type: [String, Object],
      default: '/a11y',
    },
    legalLink: {
      type: String,
      default: '/mentions-legales',
    },
    homeLink: {
      type: [String, Object],
      default: '/',
    },
    partners: {
      type: Object,
      default: () => null,
    },
    personalDataLink: {
      type: String,
      default: '/donnees-personnelles',
    },
    cookiesLink: {
      type: String,
      default: '/cookies',
    },
    logoText: {
      type: [String, Array],
      default: () => ['République', 'Française'],
    },
    descText: {
      type: String,
      default: undefined,
    },
    beforeMandatoryLinks: {
      type: Array,
      default: () => [],
    },
    afterMandatoryLinks: {
      type: Array,
      default: () => [],
    },
    mandatoryLinks: {
      type: Array,
      default: (props) => [
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
    },
    ecosystemLinks: {
      type: Array,
      default: () => [
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
    },
    operatorLinkText: {
      type: String,
      default: 'Revenir à l’accueil',
    },
    operatorTo: {
      type: [String, Object],
      default: '/',
    },
    operatorImgStyle: {
      type: Object,
      default: undefined,
    },
    operatorImgSrc: {
      type: String,
      default: undefined,
    },
    operatorImgAlt: {
      type: String,
      default: '',
    },
    licenceText: {
      type: String,
      default: 'Sauf mention contraire, tous les textes de ce site sont sous',
    },
    licenceTo: {
      type: String,
      default: 'https://github.com/etalab/licence-ouverte/blob/master/LO.md',
    },
    licenceLinkProps: {
      type: Object,
      default: () => ({}),
    },
    licenceName: {
      type: String,
      default: 'licence etalab-2.0',
    },
  },

  computed: {
    allLinks () {
      return [
        ...this.beforeMandatoryLinks,
        ...this.mandatoryLinks,
        ...this.afterMandatoryLinks,
      ]
    },
    isWithSlotLinkLists () {
      return this.$slots['footer-link-lists']?.().length
    },
    isExternalLink () {
      const to = this.licenceTo || this.licenceLinkProps.to
      return to && typeof to === 'string' && to.startsWith('http')
    },
    routerLinkLicenceTo () {
      return this.isExternalLink ? '' : this.licenceTo
    },
    aLicenceHref () {
      return this.isExternalLink ? this.licenceTo : ''
    },
  },
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
          <router-link
            :to="homeLink"
            title="Retour à l’accueil"
          >
            <DsfrLogo
              :logo-text="logoText"
            />
          </router-link>
          <router-link
            class="fr-footer__brand-link"
            :to="operatorTo"
            :title="operatorLinkText"
          >
            <img
              v-if="operatorImgSrc"
              class="fr-footer__logo  fr-responsive-img"
              :style="{ 'margin-left': '0.5px', 'padding': '1rem', ...operatorImgStyle, 'max-width': '12.5rem' }"
              :src="operatorImgSrc"
              :alt="operatorImgAlt"
            >
          </router-link>
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
            <router-link
              class="fr-footer__bottom-link"
              :to="link.to"
              :data-testid="link.to"
            >
              {{ link.label }}
            </router-link>
          </li>
        </ul>
        <div class="fr-footer__bottom-copy">
          <p>
            {{ licenceText }}
            <component
              :is="isExternalLink ? 'a' : 'router-link'"
              class="fr-link-licence  no-content-after"
              :to="routerLinkLicenceTo"
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

<style src="@gouvfr/dsfr/dist/component/footer/footer.main.min.css" />

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
