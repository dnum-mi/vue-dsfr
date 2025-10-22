import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, within } from '@storybook/test'

import DsfrBadge from './../DsfrBadge/DsfrBadge.vue'
import DsfrTags from './../DsfrTag/DsfrTags.vue'
import DsfrCard from './DsfrCard.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte)
 */
const meta = {
  component: DsfrCard,
  title: 'Composants/DsfrCard',
  argTypes: {
    noArrow: {
      control: 'boolean',
      description:
        'Indique si la carte doit afficher une flèche vers la droite (`false`, défaut) ou non (`true`)',
    },
    altImg: {
      control: 'text',
      description: 'Texte alternatif à ajouter à l’image de la carte',
    },
    detail: {
      control: 'text',
      description: 'Texte de détail de la carte',
    },
    description: {
      control: 'text',
      description: 'Texte de description de la carte',
    },
    imgSrc: {
      control: 'text',
      description: 'URL de l’image de la carte',
    },
    link: {
      control: 'text',
      description: 'URL cible de la carte',
    },
    buttons: {
      control: 'object',
      description:
        'Tableau d’objets (`label` et `link`), chaque objet contiendra les props à passer à DsfrButtonGroup',
    },
    linksGroup: {
      control: 'object',
      description:
        'Tableau d’objets (`label` et `href`), chaque objet contiendra les props pour chaque lien',
    },
    title: {
      control: 'text',
      description: 'Titre de la carte',
    },
    horizontal: {
      control: 'boolean',
      description:
        'Indique si le contenu de la carte doit être horizontal (passe de toute façon en vertical sur mobile)',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Indique la taille de la carte',
    },
    imgRatio: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Indique la largeur de l’image',
    },
    titleTag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description:
        'Permet de choisir la balise contenant le titre de la carte (h3 par défaut',
    },
    download: {
      control: 'boolean',
      description:
        'Variante de carte indiquant que l’évènement de clic lancera un téléchargement',
    },
  },
} satisfies Meta<typeof DsfrCard>

export default meta

type Story = StoryObj<typeof meta>

export const Carte: Story = {
  args: {
    altImg: '',
    detail: 'Détails sur la carte en question',
    description: 'Description sommaire de la carte',
    imgSrc: 'https://loremflickr.com/300/200/cat?random=1',
    link: 'https://www.systeme-de-design.gouv.fr/',
    title: 'Qu\'est-ce que le Pass Culture et comment l\'obtenir ?',
    titleTag: undefined,
    noArrow: false,
    horizontal: false,
    download: false,
    size: 'medium',
    imgRatio: 'medium',
    buttons: [],
    linksGroup: [],
  } as any,
  render: (args) => ({
    components: { DsfrCard },
    setup () {
      return { args }
    },
    template: `
    <DsfrCard
      :style="\`max-width: \${args.horizontal ? 600 : 400}px\`"
      :alt-img="args.altImg"
      :detail="args.detail"
      :description="args.description"
      :buttons="args.buttons"
      :img-src="args.imgSrc"
      :link="args.link"
      :size="args.size"
      :ratio-img="args.imgRatio"
      :title="args.title"
      :horizontal="args.horizontal"
      :no-arrow="args.noArrow"
      :download="args.download"
      :title-tag="args.titleTag"
    />
  `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const card = canvas.getByText('Qu\'est-ce que le Pass Culture et comment l\'obtenir ?')
    expect(card).toBeVisible()
    expect(card).toHaveProperty('tagName', 'A')
    expect(card).toHaveProperty('href')
    expect(card.parentElement).toHaveProperty('tagName', 'H3')
  },
}

export const CarteSansFleche: Story = {
  args: {
    altImg: '',
    detail: 'Détails sur la carte en question',
    description: 'Description sommaire de la carte',
    imgSrc: 'https://loremflickr.com/300/200/cat?random=2',
    link: 'https://www.systeme-de-design.gouv.fr/',
    title: 'Qu\'est-ce que le Pass Culture et comment l\'obtenir ?',
    noArrow: true,
    horizontal: false,
    download: false,
    size: 'medium',
    imgRatio: 'medium',
    buttons: [],
    linksGroup: [],
  } as any,
  render: (args) => ({
    components: { DsfrCard },
    setup () {
      return { args }
    },
    template: `
    <DsfrCard
      :style="\`max-width: \${args.horizontal ? 600 : 400}px\`"
      :alt-img="args.altImg"
      :detail="args.detail"
      :buttons="args.buttons"
      :description="args.description"
      :img-src="args.imgSrc"
      :link="args.link"
      :size="args.size"
      :ratio-img="args.imgRatio"
      :title="args.title"
      :horizontal="args.horizontal"
      :download="args.download"
      :no-arrow="args.noArrow"
    />
  `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const cardTitleA = canvas.getByText('Qu\'est-ce que le Pass Culture et comment l\'obtenir ?')
    const cardTitle = cardTitleA.parentElement
    const cardContent = cardTitle?.parentElement
    const cardBody = cardContent?.parentElement
    expect(cardBody).toHaveClass('fr-card__body')
    expect(cardTitle).toHaveClass('fr-card__title')
    expect(cardContent).toHaveClass('fr-card__content')
  },
}

export const CarteAvecLiens: Story = {
  args: {
    altImg: '',
    detail: 'Détails sur la carte en question',
    description: 'Description sommaire de la carte',
    imgSrc: 'https://loremflickr.com/300/200/cat?random=4',
    link: undefined,
    title: 'Qu\'est-ce que le Pass Culture et comment l\'obtenir ?',
    noArrow: true,
    horizontal: false,
    download: false,
    size: 'medium',
    imgRatio: 'medium',
    linksGroup: [
      {
        label: 'Télécharger',
        href: 'https://www.systeme-de-design.gouv.fr/',
      },
      {
        label: 'En savoir plus',
        href: 'https://www.systeme-de-design.gouv.fr/',
      },
    ],
  } as any,
  render: (args) => ({
    components: { DsfrCard },
    setup () {
      return { args }
    },
    template: `
    <DsfrCard
      :style="\`max-width: \${args.horizontal ? 600 : 400}px\`"
      :alt-img="args.altImg"
      :detail="args.detail"
      :links-group="args.linksGroup"
      :description="args.description"
      :img-src="args.imgSrc"
      :link="args.link"
      :size="args.size"
      :ratio-img="args.imgRatio"
      :title="args.title"
      :horizontal="args.horizontal"
      :download="args.download"
      :no-arrow="args.noArrow"
    />
  `,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const lien1 = canvas.getByText(args.linksGroup?.at(0)?.label as string)
    expect(lien1).toBeVisible()
    expect(lien1).toHaveAttribute('href', args.linksGroup?.at(0)?.href)
    const lien2 = canvas.getByText(args.linksGroup?.at(1)?.label as string)
    expect(lien2).toBeVisible()
    expect(lien2).toHaveAttribute('href', args.linksGroup?.at(1)?.href)
  },
}

export const CarteAvecTags: Story = {
  args: {
    altImg: '',
    detail: 'Détails sur la carte en question',
    description: 'Description sommaire de la carte',
    imgSrc: 'https://loremflickr.com/300/200/cat?random=5',
    link: undefined,
    title: 'Qu\'est-ce que le Pass Culture et comment l\'obtenir ?',
    noArrow: true,
    horizontal: false,
    download: false,
    size: 'medium',
    imgRatio: 'medium',
    exampleTags: [
      {
        label: 'Tag1',
      },
      {
        label: 'Tag2',
      },
      {
        label: 'Tag3',
      },
      {
        label: 'Tag4',
      },
    ],
  } as any,
  render: (args: any) => ({
    components: { DsfrCard, DsfrTags },
    setup () {
      return { args }
    },
    template: `
    <DsfrCard
      :style="\`max-width: \${args.horizontal ? 600 : 400}px\`"
      :alt-img="args.altImg"
      :detail="args.detail"
      :links-group="args.linksGroup"
      :description="args.description"
      :img-src="args.imgSrc"
      :link="args.link"
      :size="args.size"
      :ratio-img="args.imgRatio"
      :title="args.title"
      :horizontal="args.horizontal"
      :download="args.download"
      :no-arrow="args.noArrow"
    >
      <template #start-details>
        <DsfrTags
          :tags="args.exampleTags"
        />
      </template>
    </DsfrCard>
  `,
  }),
  play: async ({ canvasElement, args }: { canvasElement: HTMLElement, args: any }) => {
    const canvas = within(canvasElement)
    for (const tag of args.exampleTags) {
      const tagEl = canvas.getByText(tag.label as string)
      expect(tagEl).toBeVisible()
      expect(tagEl).toHaveClass('fr-tag')
    }
  },
}

export const CarteAvecBadges: Story = {
  args: {
    altImg: '',
    detail: 'Détails sur la carte en question',
    description: 'Description sommaire de la carte',
    imgSrc: 'https://loremflickr.com/300/200/cat?random=6',
    link: undefined,
    title: 'Qu\'est-ce que le Pass Culture et comment l\'obtenir ?',
    noArrow: true,
    horizontal: false,
    download: false,
    size: 'medium',
    imgRatio: 'medium',
    exampleBadges: [
      {
        label: 'Badge1',
        type: 'info',
      },
      {
        label: 'Badge2',
        type: 'success',
      },
      {
        label: 'Badge3',
        type: 'warning',
      },
      {
        label: 'Badge4',
        type: 'error',
      },
    ],
  } as any,
  render: (args: any) => ({
    components: { DsfrCard, DsfrBadge },
    setup () {
      return { args }
    },
    template: `
    <DsfrCard
      :style="\`max-width: \${args.horizontal ? 600 : 400}px\`"
      :alt-img="args.altImg"
      :detail="args.detail"
      :links-group="args.linksGroup"
      :description="args.description"
      :img-src="args.imgSrc"
      :link="args.link"
      :size="args.size"
      :ratio-img="args.imgRatio"
      :title="args.title"
      :horizontal="args.horizontal"
      :download="args.download"
      :no-arrow="args.noArrow"
    >
      <template #start-details>
        <DsfrBadge
          v-for="(badge, idx) in args.exampleBadges"
          :key="idx"
          :type="badge.type"
          :label="badge.label"
        />
      </template>
    </DsfrCard>
  `,
  }),
  play: async ({ canvasElement, args }: { canvasElement: HTMLElement, args: any }) => {
    const canvas = within(canvasElement)
    for (const badge of args.exampleBadges) {
      const badgeEl = canvas.getByText(badge.label as string).parentElement
      expect(badgeEl).toBeVisible()
      expect(badgeEl).toHaveClass('fr-badge')
      expect(badgeEl).toHaveClass(`fr-badge--${badge.type}`)
    }
  },
}

export const CarteHorizontaleEtPetiteAvecLiens: Story = {
  args: {
    altImg: '',
    detail: 'Détails sur la carte en question',
    description: 'Description sommaire de la carte',
    imgSrc: 'https://loremflickr.com/300/200/cat?random=8',
    link: undefined,
    title: 'Qu\'est-ce que le Pass Culture et comment l\'obtenir ?',
    noArrow: true,
    horizontal: true,
    download: false,
    size: 'small',
    imgRatio: 'small',
    linksGroup: [
      {
        label: 'Télécharger',
        href: 'https://www.systeme-de-design.gouv.fr/',
      },
      {
        label: 'En savoir plus',
        href: 'https://www.systeme-de-design.gouv.fr/',
      },
    ],
  } as any,
  render: (args) => ({
    components: { DsfrCard },
    setup () {
      return { args }
    },
    template: `
    <DsfrCard
      :style="\`max-width: \${args.horizontal ? 600 : 400}px\`"
      :alt-img="args.altImg"
      :detail="args.detail"
      :links-group="args.linksGroup"
      :description="args.description"
      :img-src="args.imgSrc"
      :link="args.link"
      :size="args.size"
      :ratio-img="args.imgRatio"
      :title="args.title"
      :horizontal="args.horizontal"
      :download="args.download"
      :no-arrow="args.noArrow"
    />
  `,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const cardEl = canvas.getByText(args.title).parentElement?.parentElement?.parentElement
    expect(cardEl).toHaveClass('fr-card')
    expect(cardEl).toHaveClass('fr-card--horizontal')
  },
}
