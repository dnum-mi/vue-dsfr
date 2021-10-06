import DsfrCard from './DsfrCard.vue'

export default {
  component: DsfrCard,
  title: 'Éléments/Carte - Card',
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
  },
}

export const Card = (args) => ({
  components: { DsfrCard },
  data () {
    return args
  },
  template: `
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
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
  </div>
  `,
})
Card.args = {
  dark: false,
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://placekitten.com/300/200',
  link: 'https://www.systeme-de-design.gouv.fr/',
  title: 'Qu’est-ce que le Pass Culture et comment l’obtenir ?',
  noArrow: false,
  horizontal: false,
}
