import DsfrCard from './DsfrCard.vue'

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
    titleTag: {
      control: 'text',
      description: 'Permet de choisir la balise contenant le titre de la carte (h3 par défaut',
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
      :title="title"
      :horizontal="horizontal"
      :no-arrow="noArrow"
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
  size: 'medium',
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
      :title="title"
      :horizontal="horizontal"
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
  size: 'medium',
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
      :title="title"
      :horizontal="horizontal"
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
      :title="title"
      :horizontal="horizontal"
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
      :title="title"
      :horizontal="horizontal"
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
      :title="title"
      :horizontal="horizontal"
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
  size: 'small',
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
