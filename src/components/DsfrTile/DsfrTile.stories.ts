import DsfrTile from './DsfrTile.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/tuile)
 */
export default {
  component: DsfrTile,
  title: 'Composants/DsfrTile',
  argTypes: {
    title: {
      control: 'text',
      description: 'Donne un titre à votre tuile',
    },
    imgSrc: {
      control: 'text',
      description: 'Chemin à indiquer afin d’afficher correctement l’image illustrative accompagnant votre tuile',
    },
    description: {
      control: 'text',
      description: 'Court texte visant à expliquer l’existence de votre tuile',
    },
    details: {
      control: 'text',
      description: 'Court texte optionnel si besoin de détails supplémentaire',
    },
    horizontal: {
      control: 'boolean',
      description: 'Permet le basculement de la tuile en mode horizontal',
    },
    verticalAtMd: {
      control: 'boolean',
      description: 'Permet le basculement de la tuile en mode vertical au point de rupture "md"',
    },
    verticalAtLg: {
      control: 'boolean',
      description: 'Permet le basculement de la tuile en mode vertical au point de rupture "lg"',
    },
    small: {
      control: 'boolean',
      description: 'Permet d’afficher la tuile dans un plus petit format',
    },
    disabled: {
      control: 'boolean',
      description: 'Permet de rendre la tuile désactivée et non-cliquable',
    },
    download: {
      control: 'boolean',
      description: 'Variante de tuile indiquant que le lien permet de télécharger un fichier (la tuile de téléchargement est obligatoirement horizontale)',
    },
    noBorder: {
      control: 'boolean',
      description: 'Variante de tuile sans bordure',
    },
    noBackground: {
      control: 'boolean',
      description: 'Variante de tuile sans arrière-plan',
    },
    shadow: {
      control: 'boolean',
      description: 'Variante de tuile avec ombre portée',
    },
    grey: {
      control: 'boolean',
      description: 'Variante de tuile plus contrastée avec arrière-plan grisé',
    },
    to: {
      control: 'text',
      description: 'Lien vers lequel la tuile pointe. Peut être une string ou objet à donner à `RouterLink` ou un lien externe (`string` commençant par `"http"`)',
    },
    titleTag: {
      control: 'text',
      description: 'Permet de choisir la balise contenant le titre de la tuile (h3 par défaut)',
    },
  },
}

export const TuileSimple = (args) => ({
  components: {
    DsfrTile,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <DsfrTile
      :title="title"
      :imgSrc="imgSrc"
      :description="description"
      :details="details"
      :horizontal="horizontal"
      :verticalAtMd="verticalAtMd"
      :verticalAtLg="verticalAtLg"
      :small="small"
      :disabled="false"
      :download="download"
      :noBorder="noBorder"
      :noBackground="noBackground"
      :shadow="shadow"
      :grey="grey"
      :to="to"
      :title-tag="titleTag"
    />
  `,

})
TuileSimple.args = {
  title: 'Ma formidable tuile',
  imgSrc: 'http://placekitten.com/g/80/80',
  description: 'Une tuile absolument formidable',
  details: 'Quelques détails',
  horizontal: false,
  verticalAtMd: false,
  verticalAtLg: false,
  small: false,
  disabled: false,
  download: false,
  noBorder: false,
  noBackground: false,
  shadow: false,
  grey: false,
  to: '#',
  titleTag: 'h2',
}
