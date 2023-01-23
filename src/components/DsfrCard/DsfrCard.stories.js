import DsfrCard from './DsfrCard.vue'

export default {
  component: DsfrCard,
  title: 'Composants/Carte - DsfrCard',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
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
    title: {
      control: 'text',
      description: 'Titre de la carte',
    },
    horizontal: {
      control: 'boolean',
      description: 'Indique si le contenu de la carte doit être horizontal (passe de toute façon en vertical sur mobile)',
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
      :img-src="imgSrc"
      :link="link"
      :title="title"
      :horizontal="horizontal"
      :no-arrow="noArrow"
      :title-tag="titleTag"
    />
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
Card.args = {
  dark: false,
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://placekitten.com/300/200',
  link: 'https://www.systeme-de-design.gouv.fr/',
  title: 'Qu’est-ce que le Pass Culture et comment l’obtenir ?',
  titleTag: undefined,
  noArrow: false,
  horizontal: false,
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
      :description="description"
      :img-src="imgSrc"
      :link="link"
      :title="title"
      :horizontal="horizontal"
      :no-arrow="noArrow"
    />
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
CardSansFleche.args = {
  dark: false,
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://placekitten.com/300/200',
  link: 'https://www.systeme-de-design.gouv.fr/',
  title: 'Qu’est-ce que le Pass Culture et comment l’obtenir ?',
  noArrow: true,
  horizontal: false,
}
