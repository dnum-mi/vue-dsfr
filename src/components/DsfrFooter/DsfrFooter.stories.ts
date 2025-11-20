import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, within } from 'storybook/test'

import VIcon from '../VIcon/VIcon.vue'

import DsfrFooter from './DsfrFooter.vue'
import DsfrFooterLinkList from './DsfrFooterLinkList.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page)
 */
const meta = {
  component: DsfrFooter,
  title: 'Composants/DsfrFooter',
  argTypes: {
    beforeMandatoryLinks: {
      control: 'object',
      description:
        'Liste de liens précédant les liens par défaut (liens obligatoires)',
    },
    afterMandatoryLinks: {
      control: 'object',
      description:
        'Liste de liens succédant aux liens par défaut (liens obligatoires)',
    },
    ecosystemLinks: {
      control: 'object',
      description:
        'Liste de liens relatifs au gouvernement (par défaut si la props n\'est pas renseignée elle contient les quatre liens obligatoires pour un site public)',
    },
    a11yCompliance: {
      control: 'select',
      options: [
        'non conforme',
        'partiellement conforme',
        'totalement conforme',
      ],
      description:
        'Niveau de conformité de l’a11y : `"non conforme"`, `"partiellement conforme"`, ou `"totalement conforme"`',
    },
    a11yComplianceLink: {
      control: 'text',
      description:
        'URL pour un lien externe ou route ou objet pour un lien externe à associer au lien `"Accessibilité : <niveau de conformité>"`',
    },
    logoText: {
      control: 'object',
      description:
        'Texte du logo. Si c’est une `String`, tout sera sur une ligne. Si c’est un tableau, chaque élément du tableau sera sur une ligne',
    },
    legalLink: {
      control: 'text',
      description:
        'URL pour un lien externe ou route ou objet pour un lien externe à associer au lien `"Mentions légales"`',
    },
    partners: {
      control: 'object',
      description: `Objet contenant deux propriétés :
        \`mainPartner\` avec le partenaire principal et \`subPartners\` avec la liste des autres partenaires.
        \`mainPartner\` ainsi que chacun des objets de la liste \`subPartners\` sera un objet avec 3 propriétés :
        \`name\`, \`href\`, \`logo\`, et \`alt\``,
    },
    personalDataLink: {
      control: 'text',
      description:
        'URL pour un lien externe ou route ou objet pour un lien externe à associer au lien `"Données personnelles"`',
    },
    mandatoryLinks: {
      control: 'object',
      description:
        'Tableau d’objets, avec chaque objet qui contiendra 2 propriétés : `label` et `to`. Mieux vaut garder le défaut',
    },
    cookiesLink: {
      control: 'text',
      description:
        'URL pour un lien externe ou route ou objet pour un lien externe à associer au lien `"Données personnelles"`',
    },
    homeLink: {
      control: 'text',
      description:
        'URL pour un lien externe ou route ou objet pour un lien externe à associer au logo avec la Marianne',
    },
    homeTitle: {
      control: 'text',
      description:
        'Titre pour un lien externe ou route ou objet pour un lien externe à associer au logo avec la Marianne',
    },
    descText: {
      control: 'text',
      description:
        'Texte de la description du footer (sera dans `<p class="fr-footer__content-desc">`)',
    },
    operatorLinkText: {
      control: 'text',
      description:
        'Texte de l\'info bulle associée au lien externe du logo de l\'opérateur',
    },
    operatorTo: {
      control: 'text',
      description:
        'URL pour un lien externe ou route ou objet pour un lien externe à associer au lien de l’image de l’opérateur',
    },
    operatorImgStyle: {
      control: 'object',
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
    licenceText: {
      control: 'text',
      description: 'Texte introduisant l\'URL de la page de la licence',
    },
    licenceTo: {
      control: 'text',
      description: 'URL vers la page de la licence',
    },
    licenceLinkProps: {
      control: 'object',
      description: 'Props qualifiant le lien de la licence',
    },
    licenceName: {
      control: 'text',
      description: 'Nom de la licence',
    },
  },
} satisfies Meta<typeof DsfrFooter>

export default meta

type Story = StoryObj<typeof meta>

export const PiedDePageSimple: Story = {
  args: {
    beforeMandatoryLinks: [{ label: 'Avant', to: '/avant' }],
    afterMandatoryLinks: [{ label: 'Après', to: '/apres' }],
    a11yCompliance: 'partiellement conforme',
    logoText: ['République', 'des châtons'],
    legalLink: '/mentions-legales',
    personalDataLink: '/donnees-personnelles',
    cookiesLink: '/cookies',
    a11yComplianceLink: '/a11y-conformite',
    descText: 'Description',
    homeLink: '/',
    licenceText: undefined,
    licenceTo: 'https://github.com/etalab/licence-ouverte/blob/master/LO.md',
    licenceName: undefined,
    licenceLinkProps: undefined,
    ecosystemLinks: [
      {
        label: 'legifrance.gouv.fr',
        href: 'https://legifrance.gouv.fr',
      },
      {
        label: 'info.gouv.fr',
        href: 'https://info.gouv.fr',
      },
      {
        label: 'service-public.gouv.fr',
        href: 'https://service-public.gouv.fr',
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
        logo: 'https://loremflickr.com/150/150/cat?random=1',
        alt: 'Partenaire principal',
      },
      subPartners: [
        {
          name: 'Partenaire secondaire 1',
          href: 'https://www.youtube.com',
          logo: 'https://loremflickr.com/150/150/cat?random=2',
          alt: 'Partenaire secondaire 1',
        },
        {
          name: 'Partenaire secondaire 2',
          href: 'https://www.youtube.com',
          logo: 'https://loremflickr.com/150/150/cat?random=3',
          alt: 'Partenaire secondaire 2',
        },
      ],
    },
  },
  render: (args) => ({
    components: {
      DsfrFooter,
      DsfrFooterLinkList,
      VIcon,
    },
    setup () {
      return { args }
    },
    template: `
  <DsfrFooter
    :a11y-compliance="args.a11yCompliance"
    :before-mandatory-links="args.beforeMandatoryLinks"
    :after-mandatory-links="args.afterMandatoryLinks"
    :logo-text="args.logoText"
    :legal-link="args.legalLink"
    :personal-data-link="args.personalDataLink"
    :cookies-link="args.cookiesLink"
    :a11y-compliance-link="args.a11yComplianceLink"
    :desc-text="args.descText"
    :home-link="args.homeLink"
    :partners="args.partners"
    :ecosystem-links="args.ecosystemLinks"
    :licence-text="args.licenceText"
    :licence-to="args.licenceTo"
    :licence-name="args.licenceName"
    :licence-link-props="args.licenceLinkProps"
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
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const links = canvas.getAllByRole('link')

    const knownLinks = [
      { name: '', href: PiedDePageSimple.args.homeLink },
      { name: 'ici', href: 'http://www.duckduckgo.com' },
      ...PiedDePageSimple.args.ecosystemLinks,
      PiedDePageSimple.args.partners.mainPartner,
      ...PiedDePageSimple.args.partners.subPartners,
      ...PiedDePageSimple.args.beforeMandatoryLinks.map(({ to }) => ({ href: to })),
      { name: '', href: PiedDePageSimple.args.a11yComplianceLink },
      { name: '', href: PiedDePageSimple.args.legalLink },
      { name: '', href: PiedDePageSimple.args.personalDataLink },
      { name: '', href: PiedDePageSimple.args.cookiesLink },
      ...PiedDePageSimple.args.afterMandatoryLinks.map(({ to }) => ({ href: to })),
      { href: PiedDePageSimple.args.licenceTo },
    ]

    let i = 0

    for (const link of links) {
      expect(link).toHaveAttribute('href', knownLinks.at(i)?.href)
      i++
    }
  },
}

export const PiedDePageAvecLogoOperateurEtListeDeLiens: Story = {
  args: {
    beforeMandatoryLinks: [{ label: 'Avant', to: '/avant' }],
    afterMandatoryLinks: [{ label: 'Après', to: '/apres' }],
    a11yCompliance: 'partiellement conforme',
    logoText: ['République', 'des châtons'],
    legalLink: '/mentions-legales',
    personalDataLink: '/donnees-personnelles',
    cookiesLink: '/cookies',
    a11yComplianceLink: '/a11y-conformite',
    descText: 'Description',
    homeLink: '/',
    licenceText: undefined,
    licenceTo: undefined,
    licenceName: undefined,
    licenceLinkProps: undefined,
    categoryName1: 'Nom de la categorie 1',
    linkList1: [
      { label: 'Lien 1.1', to: '/#lien1-1' },
      { label: 'Lien 1.2', to: '/#lien1-2' },
    ],
    categoryName2: 'Nom de la categorie 2',
    linkList2: [
      { label: 'Lien 2.1', to: '/#lien2-1' },
      { label: 'Lien 2.2', to: '/#lien2-2' },
    ],
    ecosystemLinks: [
      {
        label: 'legifrance.gouv.fr',
        href: 'https://legifrance.gouv.fr',
      },
      {
        label: 'info.gouv.fr',
        href: 'https://info.gouv.fr',
      },
      {
        label: 'service-public.gouv.fr',
        href: 'https://service-public.gouv.fr',
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
        logo: 'https://loremflickr.com/150/150/cat?random=1',
        alt: 'Partenaire principal',
      },
      subPartners: [
        {
          name: 'Partenaire secondaire 1',
          href: 'https://www.youtube.com',
          logo: 'https://loremflickr.com/150/150/cat?random=2',
          alt: 'Partenaire secondaire 1',
        },
        {
          name: 'Partenaire secondaire 2',
          href: 'https://www.youtube.com',
          logo: 'https://loremflickr.com/150/150/cat?random=3',
          alt: 'Partenaire secondaire 2',
        },
      ],
    },
    operatorLinkText: 'Logo opérateur',
    operatorTo: 'https://github.com/dnum-mi/vue-dsfr',
    operatorImgStyle: {
      'margin-left': '0.5px',
      padding: '1rem',
      height: '150px',
    },
    operatorImgSrc: '/cat.svg',
    operatorImgAlt: 'Logo opérateur',
  },
  render: (args) => ({
    components: {
      DsfrFooter,
      DsfrFooterLinkList,
      VIcon,
    },
    setup () {
      return { args }
    },
    template: `
  <DsfrFooter
    :a11y-compliance="args.a11yCompliance"
    :before-mandatory-links="args.beforeMandatoryLinks"
    :after-mandatory-links="args.afterMandatoryLinks"
    :ecosystem-links="args.ecosystemLinks"
    :logo-text="args.logoText"
    :legal-link="args.legalLink"
    :personal-data-link="args.personalDataLink"
    :cookies-link="args.cookiesLink"
    :a11y-compliance-link="args.a11yComplianceLink"
    :desc-text="args.descText"
    :home-link="args.homeLink"
    :partners="args.partners"
    :licence-text="args.licenceText"
    :licence-to="args.licenceTo"
    :licence-name="args.licenceName"
    :licence-link-props="args.licenceLinkProps"
    :operator-link-text="args.operatorLinkText"
    :operator-to="args.operatorTo"
    :operator-img-style="args.operatorImgStyle"
    :operator-img-src="args.operatorImgSrc"
    :operator-img-alt="args.operatorImgAlt"
  >
    <template #footer-link-lists>
      <DsfrFooterLinkList
        class="fr-col-6"
        :category-name="args.categoryName1"
        :links="args.linkList1"
      />
      <DsfrFooterLinkList
        class="fr-col-6"
        :category-name="args.categoryName2"
        :links="args.linkList2"
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
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const links = canvas.getAllByRole('link')
    expect(links).toHaveLength(20)

    const knownLinks = [
      ...args.linkList1.map(({ to }) => ({ href: to })),
      ...args.linkList2.map(({ to }) => ({ href: to })),
      { name: '', href: args.operatorTo },
      { name: 'ici', href: 'http://www.duckduckgo.com' },
      ...args.ecosystemLinks,
      args.partners.mainPartner,
      ...args.partners.subPartners,
      ...args.beforeMandatoryLinks.map(({ to }) => ({ href: to })),
      { name: '', href: args.a11yComplianceLink },
      { name: '', href: args.legalLink },
      { name: '', href: args.personalDataLink },
      { name: '', href: args.cookiesLink },
      ...args.afterMandatoryLinks.map(({ to }) => ({ href: to })),
      { href: args.licenceTo },
    ]

    let i = 0

    for (const link of links) {
      expect(link).toBeVisible()
      expect(link).toHaveAttribute('href', knownLinks.at(i)?.href)
      i++
    }
  },
}
