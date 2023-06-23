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
    horizontal: {
      control: 'boolean',
      description: 'Permet le basculement de la tuile en mode horizontal',
    },
    disabled: {
      control: 'boolean',
      description: 'Permet de rendre la tuile désactivée et non-cliquable',
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
      :horizontal="horizontal"
      :disabled="false"
      :to="to"
      :title-tag="titleTag"
    />
  `,

})
TuileSimple.args = {
  title: 'Ma formidable tuile',
  imgSrc: 'http://placekitten.com/g/200/200',
  description: 'Une tuile absolument formidable',
  horizontal: false,
  disabled: false,
  to: '#',
  titleTag: 'h2',
}
