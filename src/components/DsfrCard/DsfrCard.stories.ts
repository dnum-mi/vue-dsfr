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
      description: 'Indique si la carte doit afficher une flèche vers la droite (`false`, défaut) ou non (`true`)',
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
      description: 'Tableau d’objets (`label` et `link`), chaque objet contiendra les props à passer à DsfrButtonGroup',
    },
    linksGroup: {
      control: 'object',
      description: 'Tableau d’objets (`label` et `href`), chaque objet contiendra les props pour chaque lien',
    },
    title: {
      control: 'text',
      description: 'Titre de la carte',
    },
    horizontal: {
      control: 'boolean',
      description: 'Indique si le contenu de la carte doit être horizontal (passe de toute façon en vertical sur mobile)',
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
      description: 'Permet de choisir la balise contenant le titre de la carte (h3 par défaut',
    },
    download: {
      control: 'boolean',
      description: 'Variante de carte indiquant que l’évènement de clic lancera un téléchargement',
    },
  },
}

export const Card = (args) => ({
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
Card.args = {
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://placekitten.com/300/200',
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

export const CardSansFleche = (args) => ({
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
CardSansFleche.args = {
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://placekitten.com/300/200',
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

export const CardAvecBoutons = (args) => ({
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
CardAvecBoutons.args = {
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://placekitten.com/300/200',
  link: undefined,
  title: 'Qu’est-ce que le Pass Culture et comment l’obtenir ?',
  noArrow: true,
  horizontal: false,
  download: false,
  size: 'medium',
  ratioImg: 'medium',
  buttons: [
    {
      label: 'Télécharger',
      link: 'https://www.systeme-de-design.gouv.fr/',
    },
    {
      label: 'En savoir plus',
      secondary: true,
      link: 'https://www.systeme-de-design.gouv.fr/',
    },
  ],
}

export const CardAvecLiens = (args) => ({
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
CardAvecLiens.args = {
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://placekitten.com/300/200',
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

export const CardAvecTags = (args) => ({
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
    <template #interactive-details>
      <DsfrTags
        :tags="exampleTags"
      />
    </template>
  </DsfrCard>
  `,

})
CardAvecTags.args = {
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://placekitten.com/300/200',
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

export const CardAvecBadges = (args) => ({
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
    <template #interactive-details>
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
CardAvecBadges.args = {
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://placekitten.com/300/200',
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

export const CardHorizontaleAvecBoutons = (args) => ({
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
CardHorizontaleAvecBoutons.args = {
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://placekitten.com/300/200',
  link: undefined,
  title: 'Qu’est-ce que le Pass Culture et comment l’obtenir ?',
  noArrow: true,
  horizontal: true,
  download: false,
  size: 'medium',
  ratioImg: 'medium',
  buttons: [
    {
      label: 'Télécharger',
      link: 'https://www.systeme-de-design.gouv.fr/',
    },
    {
      label: 'En savoir plus',
      secondary: true,
      link: 'https://www.systeme-de-design.gouv.fr/',
    },
  ],
}

export const CardHorizontaleEtSmallAvecLiens = (args) => ({
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
CardHorizontaleEtSmallAvecLiens.args = {
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://placekitten.com/300/200',
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
