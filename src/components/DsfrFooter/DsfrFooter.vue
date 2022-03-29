<script>
import { defineComponent } from 'vue'

import DsfrLogo from '../DsfrLogo/DsfrLogo.vue'
import DsfrFooterPartners from '../DsfrFooter/DsfrFooterPartners.vue'

export default defineComponent({
  name: 'DsfrFooter',

  components: {
    DsfrFooterPartners,
    DsfrLogo,
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
          label: `Accessibilité : ${props.a11yCompliance}`,
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

  },

  computed: {
    allLinks () {
      return [
        ...this.beforeMandatoryLinks,
        ...this.mandatoryLinks,
        ...this.afterMandatoryLinks,
      ]
    },
    linkComponent () {
      return '$nuxt' in this ? 'nuxt-link' : 'router-link'
    },
    isWithSlotLinkLists () {
      return this.$slots['footer-link-lists']?.().length
    },
    isWithSlotOperator () {
      return this.$slots.operator?.().length
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
          <slot name="footer-link-lists" />
        </div>
      </div>
    </div>
    <div class="fr-container">
      <div class="fr-footer__body">
        <div class="fr-footer__brand fr-enlarge-link">
          <component
            :is="linkComponent"
            :to="homeLink"
            title="Retour à l’accueil"
          >
            <DsfrLogo
              :logo-text="logoText"
            />
          </component>
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
            <component
              :is="linkComponent"
              class="fr-footer__bottom-link"
              :to="link.to"
              :data-testid="link.to"
            >
              {{ link.label }}
            </component>
          </li>
        </ul>
        <div class="fr-footer__bottom-copy">
          <p>
            Sauf mention contraire, tous les textes de ce site sont sous
            <a
              class="fr-link-licence  no-content-after"
              href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
              target="_blank"
            >
              licence etalab-2.0
              <VIcon name="ri-external-link-line" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style src="@gouvfr/dsfr/dist/component/footer/footer.main.css" />

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
