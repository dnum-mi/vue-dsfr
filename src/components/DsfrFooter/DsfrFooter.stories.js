import VIcon from 'oh-vue-icons/dist/v3/icon.es'

import { RiExternalLinkLine } from 'oh-vue-icons/icons'

import DsfrFooter from './DsfrFooter.vue'
import DsfrFooterLinkList from './DsfrFooterLinkList.vue'

VIcon.add(RiExternalLinkLine)

export default {
  component: DsfrFooter,
  title: 'Composants/Pied de page - DsfrFooter',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    beforeMandatoryLinks: {
      control: 'object',
      description: 'Liste de liens précédant les liens par défaut (liens obligatoires)',
    },
    afterMandatoryLinks: {
      control: 'object',
      description: 'Liste de liens succédant aux liens par défaut (liens obligatoires)',
    },
    a11yCompliance: {
      control: 'radio',
      options: [
        'non conforme',
        'partiellement conforme',
        'totalement conforme',
      ],
    },
    logoText: {
      control: 'object',
    },
    a11yComplianceLink: {
      control: 'text',
    },
    legalLink: {
      control: 'text',
    },
    partners: {
      control: 'object',
      description: `Objet contenant deux propriétés :
        \`mainPartner\` avec le partenaire principal et \`subPartners\` avec la liste des autres partenaires.
        \`mainPartner\` ainsi que chacun des objets de la liste \`subPartners\` sera un objet avec 3 propriétés :
        \`name\`, \`href\`, \`logo\`, et \`alt\``,
    },
    personalDataLink: {
      control: 'text',
      description: '',
    },
  },
}

export const PiedDePage = (args) => ({
  components: { DsfrFooter, DsfrFooterLinkList, VIcon },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrFooter
      :a11y-compliance="a11yCompliance"
      :before-mandatory-links="beforeMandatoryLinks"
      :after-mandatory-links="afterMandatoryLinks"
      :logo-text="logoText"
      :legal-link="legalLink"
      :personal-data-link="personalDataLink"
      :cookies-link="cookiesLink"
      :a11y-compliance-link="a11yComplianceLink"
      :desc-text="descText"
      :home-link="homeLink"
      :partners="partners"
    >
      <template v-slot:footer-link-lists>
        <DsfrFooterLinkList
          class="fr-col-6"
          :category-name="categoryName1"
          :links="linkList1"
        />
        <DsfrFooterLinkList
          class="fr-col-6"
          :category-name="categoryName2"
          :links="linkList2"
        />
      </template>
      <template v-slot:description>
        <p>
          Un moteur de recherche qui respecte votre vie privée
          <a href="http://www.duckduckgo.com" class="fr-external-link">
            ici
            <VIcon name="ri-external-link-line" />
          </a>
        </p>
      </template>
    </DsfrFooter>
  </div>
  `,
})
PiedDePage.args = {
  dark: false,
  beforeMandatoryLinks: [{ label: 'Before', to: '/before' }],
  afterMandatoryLinks: [{ label: 'After', to: '/after' }],
  a11yCompliance: 'partiellement conforme',
  logoText: ['Pyramides', 'Babyloniennes'],
  legalLink: '/mentions-legales',
  personalDataLink: '/donnees-personnelles',
  cookiesLink: '/cookies',
  a11yComplianceLink: '/a11y-conformite',
  descText: 'Description',
  homeLink: '/',
  categoryName1: 'Nom de la categorie 1',
  linkList1: [
    { label: 'Lien 1.1', to: '/lien1/1' },
    { label: 'Lien 1.2', to: '/lien1/2' },
  ],
  categoryName2: 'Nom de la categorie 2',
  linkList2: [
    { label: 'Lien 2.1', to: '/lien2/1' },
    { label: 'Lien 2.2', to: '/lien 2/2' },
  ],
  partners: {
    mainPartner: {
      name: 'Partenaire principal',
      href: 'https://www.youtube.com',
      logo: 'https://placekitten.com/150/150',
      alt: 'Partenaire principal',
    },
    subPartners: [
      {
        name: 'Partenaire secondaire 1',
        href: 'https://www.youtube.com',
        logo: 'https://placekitten.com/145/151',
        alt: 'Partenaire secondaire 1',
      },
      {
        name: 'Partenaire secondaire 2',
        href: 'https://www.youtube.com',
        logo: 'https://placekitten.com/150/152',
        alt: 'Partenaire secondaire 2',
      },
    ],
  },
}
