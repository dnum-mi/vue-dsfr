import { expect, within } from '@storybook/test'

import DsfrCard from './DsfrCard.vue'
import DsfrTags from './../DsfrTag/DsfrTags.vue'
import DsfrBadge from './../DsfrBadge/DsfrBadge.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/carte)
 */
export default {
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
      control: 'text',
      description:
        'Permet de choisir la balise contenant le titre de la carte (h3 par défaut',
    },
    download: {
      control: 'boolean',
      description:
        'Variante de carte indiquant que l’évènement de clic lancera un téléchargement',
    },
  },
}

export const Carte = (args) => ({
  components: { DsfrCard },
  data () {
    return args
  },
  template: `
    <DsfrCard
      :style="\`max-width: \${horizontal ? 600 : 400}px\`"
      :alt-img="altImg"
      :detail="detail"
      :description="description"
      :buttons="buttons"
      :img-src="imgSrc"
      :link="link"
      :size="size"
      :ratio-img="ratioImg"
      :title="title"
      :horizontal="horizontal"
      :no-arrow="noArrow"
      :download="download"
      :title-tag="titleTag"
    />
  `,
})
Carte.args = {
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://loremflickr.com/300/200/cat?random=1',
  link: 'https://www.systeme-de-design.gouv.fr/',
  title: 'Qu’est-ce que le Pass Culture et comment l’obtenir ?',
  titleTag: undefined,
  noArrow: false,
  horizontal: false,
  download: false,
  size: 'medium',
  ratioImg: 'medium',
  buttons: [],
  linksGroup: [],
}
Carte.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const card = canvas.getByText(Carte.args.title)
  expect(card).toBeVisible()
  expect(card).toHaveProperty('tagName', 'A')
  expect(card).toHaveProperty('href')
  expect(card.parentElement).toHaveProperty('tagName', 'H3')
}

export const CarteSansFleche = (args) => ({
  components: { DsfrCard },
  data () {
    return args
  },
  template: `
    <DsfrCard
      :style="\`max-width: \${horizontal ? 600 : 400}px\`"
      :alt-img="altImg"
      :detail="detail"
      :buttons="buttons"
      :description="description"
      :img-src="imgSrc"
      :link="link"
      :size="size"
      :ratio-img="ratioImg"
      :title="title"
      :horizontal="horizontal"
      :download="download"
      :no-arrow="noArrow"
    />
  `,
})
CarteSansFleche.args = {
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://loremflickr.com/300/200/cat?random=2',
  link: 'https://www.systeme-de-design.gouv.fr/',
  title: 'Qu’est-ce que le Pass Culture et comment l’obtenir ?',
  noArrow: true,
  horizontal: false,
  download: false,
  size: 'medium',
  ratioImg: 'medium',
  buttons: [],
  linksGroup: [],
}
CarteSansFleche.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const cardTitleA = canvas.getByText(CarteSansFleche.args.title)
  const cardTitle = cardTitleA.parentElement
  const cardContent = cardTitle?.parentElement
  const cardBody = cardContent?.parentElement
  expect(cardBody).toHaveClass('fr-card__body')
  expect(cardTitle).toHaveClass('fr-card__title')
  expect(cardContent).toHaveClass('fr-card__content')
}

export const CarteAvecLiens = (args) => ({
  components: { DsfrCard },
  data () {
    return args
  },
  template: `
    <DsfrCard
      :style="\`max-width: \${horizontal ? 600 : 400}px\`"
      :alt-img="altImg"
      :detail="detail"
      :links-group="linksGroup"
      :description="description"
      :img-src="imgSrc"
      :link="link"
      :size="size"
      :ratio-img="ratioImg"
      :title="title"
      :horizontal="horizontal"
      :download="download"
      :no-arrow="noArrow"
    />
  `,
})
CarteAvecLiens.args = {
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://loremflickr.com/300/200/cat?random=4',
  link: undefined,
  title: 'Qu’est-ce que le Pass Culture et comment l’obtenir ?',
  noArrow: true,
  horizontal: false,
  download: false,
  size: 'medium',
  ratioImg: 'medium',
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
}
CarteAvecLiens.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const lien1 = canvas.getByText(CarteAvecLiens.args.linksGroup.at(0)?.label as string)
  expect(lien1).toBeVisible()
  expect(lien1).toHaveAttribute('href', CarteAvecLiens.args.linksGroup.at(0)?.href)
  const lien2 = canvas.getByText(CarteAvecLiens.args.linksGroup.at(1)?.label as string)
  expect(lien2).toBeVisible()
  expect(lien2).toHaveAttribute('href', CarteAvecLiens.args.linksGroup.at(1)?.href)
}

export const CarteAvecTags = (args) => ({
  components: { DsfrCard, DsfrTags },
  data () {
    return args
  },
  template: `
    <DsfrCard
      :style="\`max-width: \${horizontal ? 600 : 400}px\`"
      :alt-img="altImg"
      :detail="detail"
      :links-group="linksGroup"
      :description="description"
      :img-src="imgSrc"
      :link="link"
      :size="size"
      :ratio-img="ratioImg"
      :title="title"
      :horizontal="horizontal"
      :download="download"
      :no-arrow="noArrow"
  >
    <template #start-details>
      <DsfrTags
        :tags="exampleTags"
      />
    </template>
  </DsfrCard>
  `,
})
CarteAvecTags.args = {
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://loremflickr.com/300/200/cat?random=5',
  link: undefined,
  title: 'Qu’est-ce que le Pass Culture et comment l’obtenir ?',
  noArrow: true,
  horizontal: false,
  download: false,
  size: 'medium',
  ratioImg: 'medium',
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
}
CarteAvecTags.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  for (const tag of CarteAvecTags.args.exampleTags) {
    const tagEl = canvas.getByText(tag.label as string)
    expect(tagEl).toBeVisible()
    expect(tagEl).toHaveClass('fr-tag')
  }
}

export const CarteAvecBadges = (args) => ({
  components: { DsfrCard, DsfrBadge },
  data () {
    return args
  },
  template: `
    <DsfrCard
      :style="\`max-width: \${horizontal ? 600 : 400}px\`"
      :alt-img="altImg"
      :detail="detail"
      :links-group="linksGroup"
      :description="description"
      :img-src="imgSrc"
      :link="link"
      :size="size"
      :ratio-img="ratioImg"
      :title="title"
      :horizontal="horizontal"
      :download="download"
      :no-arrow="noArrow"
  >
    <template #start-details>
      <DsfrBadge
        v-for="(badge, idx) in exampleBadges"
        :key="idx"
        :type="badge.type"
        :label="badge.label"
      />
    </template>
  </DsfrCard>
  `,
})
CarteAvecBadges.args = {
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://loremflickr.com/300/200/cat?random=6',
  link: undefined,
  title: 'Qu’est-ce que le Pass Culture et comment l’obtenir ?',
  noArrow: true,
  horizontal: false,
  download: false,
  size: 'medium',
  ratioImg: 'medium',
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
}
CarteAvecBadges.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  for (const badge of CarteAvecBadges.args.exampleBadges) {
    const badgeEl = canvas.getByText(badge.label as string).parentElement
    expect(badgeEl).toBeVisible()
    expect(badgeEl).toHaveClass('fr-badge')
    expect(badgeEl).toHaveClass(`fr-badge--${badge.type}`)
  }
}

export const CarteHorizontaleEtPetiteAvecLiens = (args) => ({
  components: { DsfrCard },
  data () {
    return args
  },
  template: `
    <DsfrCard
      :style="\`max-width: \${horizontal ? 600 : 400}px\`"
      :alt-img="altImg"
      :detail="detail"
      :links-group="linksGroup"
      :description="description"
      :img-src="imgSrc"
      :link="link"
      :size="size"
      :ratio-img="ratioImg"
      :title="title"
      :horizontal="horizontal"
      :download="download"
      :no-arrow="noArrow"
    />
  `,
})
CarteHorizontaleEtPetiteAvecLiens.args = {
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://loremflickr.com/300/200/cat?random=8',
  link: undefined,
  title: 'Qu’est-ce que le Pass Culture et comment l’obtenir ?',
  noArrow: true,
  horizontal: true,
  download: false,
  size: 'small',
  ratioImg: 'small',
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
}
CarteHorizontaleEtPetiteAvecLiens.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const cardEl = canvas.getByText(CarteHorizontaleEtPetiteAvecLiens.args.title).parentElement?.parentElement?.parentElement
  expect(cardEl).toHaveClass('fr-card')
  expect(cardEl).toHaveClass('fr-card--horizontal')
}
