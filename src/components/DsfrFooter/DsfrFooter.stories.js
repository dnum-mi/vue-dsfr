import { OhVueIcon as VIcon, addIcons } from 'oh-vue-icons'

import { RiExternalLinkLine } from 'oh-vue-icons/icons/ri/index.js'

import DsfrFooter from './DsfrFooter.vue'
import DsfrFooterLinkList from './DsfrFooterLinkList.vue'

addIcons(RiExternalLinkLine)

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
    ecosystemLinks: {
      control: 'object',
      description: 'Liste de liens relatifs au gouvernement (par défaut si la props n\'est pas renseignée elle contient les quatre liens obligatoires pour un site public)',
    },
    a11yCompliance: {
      control: 'radio',
      options: [
        'non conforme',
        'partiellement conforme',
        'totalement conforme',
      ],
      description: 'Niveau de conformité de l’a11y : `"non conforme"`, `"partiellement conforme"`, ou `"totalement conforme"`',
    },
    a11yComplianceLink: {
      control: 'text',
      description: 'URL pour un lien externe ou route ou objet pour un lien externe à associer au lien `"Accessibilité : <niveau de conformité>"`',
    },
    logoText: {
      control: 'object',
      description: 'Texte du logo. Si c’est une `String`, tout sera sur une ligne. Si c’est un tableau, chaque élément du tableau sera sur une ligne',
    },
    legalLink: {
      control: 'text',
      description: 'URL pour un lien externe ou route ou objet pour un lien externe à associer au lien `"Mentions légales"`',
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
      description: 'URL pour un lien externe ou route ou objet pour un lien externe à associer au lien `"Données personnelles"`',
    },
    mandatoryLinks: {
      control: 'object',
      description: 'Tableau d’objets, avec chaque objet qui contiendra 2 propriétés : `label` et `to`. Mieux vaut garder le défaut',
    },
    cookiesLink: {
      control: 'text',
      description: 'URL pour un lien externe ou route ou objet pour un lien externe à associer au lien `"Données personnelles"`',
    },
    homeLink: {
      control: 'text',
      description: 'URL pour un lien externe ou route ou objet pour un lien externe à associer au logo avec la Marianne',
    },
    descText: {
      control: 'text',
      description: 'Texte de la description du footer (sera dans `<p class="fr-footer__content-desc">`)',
    },
    operatorLinkText: {
      control: 'text',
      description: 'Texte de l\'info bulle associée au lien externe du logo de l\'opérateur',
    },
    operatorTo: {
      control: 'text',
      description: 'URL pour un lien externe ou route ou objet pour un lien externe à associer au lien de l’image de l’opérateur',
    },
    operatorImgStyle: {
      control: 'text',
      description: 'Style supplémentaire pour l’image de l’opérateur',
    },
    operatorImgSrc: {
      control: 'text',
      description: 'URL vers l’image de l’opérateur',
    },
    operatorImgAlt: {
      control: 'text',
      description: 'Texte alternatif pour l’image de l’opérateur',
    },
  },
}

export const PiedDePageSimple = (args) => ({
  components: {
    DsfrFooter,
    DsfrFooterLinkList,
    VIcon,
  },
  data () {
    return args
  },
  template: `
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
    :ecosystem-links="ecosystemLinks"
  >
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
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
PiedDePageSimple.args = {
  dark: false,
  beforeMandatoryLinks: [{ label: 'Before', to: '/before' }],
  afterMandatoryLinks: [{ label: 'After', to: '/after' }],
  a11yCompliance: 'partiellement conforme',
  logoText: ['République', 'des châtons'],
  legalLink: '/mentions-legales',
  personalDataLink: '/donnees-personnelles',
  cookiesLink: '/cookies',
  a11yComplianceLink: '/a11y-conformite',
  descText: 'Description',
  homeLink: '/',
  ecosystemLinks: [
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

export const PiedDePageAvecLogoOperateur = (args) => ({
  components: {
    DsfrFooter,
    DsfrFooterLinkList,
    VIcon,
  },
  data () {
    return args
  },
  template: `
  <DsfrFooter
    :a11y-compliance="a11yCompliance"
    :before-mandatory-links="beforeMandatoryLinks"
    :after-mandatory-links="afterMandatoryLinks"
    :ecosystem-links="ecosystemLinks"
    :logo-text="logoText"
    :legal-link="legalLink"
    :personal-data-link="personalDataLink"
    :cookies-link="cookiesLink"
    :a11y-compliance-link="a11yComplianceLink"
    :desc-text="descText"
    :home-link="homeLink"
    :partners="partners"
    :operator-link-text="operatorLinkText"
    :operator-to="operatorTo"
    :operator-img-style="operatorImgStyle"
    :operator-img-src="operatorImgSrc"
    :operator-img-alt="operatorImgAlt"
  >
    <template #footer-link-lists>
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
    <template #description>
      <p>
        Un moteur de recherche qui respecte votre vie privée
        <a href="http://www.duckduckgo.com" class="fr-external-link">
          ici
          <VIcon name="ri-external-link-line" />
        </a>
      </p>
    </template>
  </DsfrFooter>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
PiedDePageAvecLogoOperateur.args = {
  dark: false,
  beforeMandatoryLinks: [{ label: 'Before', to: '/before' }],
  afterMandatoryLinks: [{ label: 'After', to: '/after' }],
  a11yCompliance: 'partiellement conforme',
  logoText: ['République', 'des châtons'],
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
  ecosystemLinks: [
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
  operatorLinkText: 'Logo opérateur',
  operatorTo: 'https://placekitten.com',
  operatorImgStyle: { 'max-height': '10rem' },
  operatorImgSrc: '/cat.svg',
  operatorImgAlt: 'Logo opérateur',
}
