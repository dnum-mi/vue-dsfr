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
    vertical: {
      options: ['md', 'lg'],
      control: {
        type: 'select',
      },
      description: 'Permet le basculement de la tuile en mode vertical, selon le point de rupture "md" ou "lg" spécifié',
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
    download: {
      control: 'boolean',
      description: 'Permet de passer la tuile en mode téléchargement',
    },
    small: {
      control: 'boolean',
      description: 'Permet de basculer la tuile en petit format',
    },
    icon: {
      control: 'boolean',
      description: 'Permet de désactiver l\'icone associée au lien',
    },
    noBorder: {
      control: 'boolean',
      description: 'Permet de désactiver la bordure de la tuile',
    },
    shadow: {
      control: 'boolean',
      description: 'Permet d\'ajouter une ombre portée à la tuile',
    },
    noBackground: {
      control: 'boolean',
      description: 'Permet de désactiver la couleur de fond de la tuile',
    },
    grey: {
      control: 'boolean',
      description: 'Permet de passer le fond de la tuile en gris',
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
      :vertical="vertical"
      :disabled="false"
      :to="to"
      :title-tag="titleTag"
      :download="download"
      :small="small"
      :icon="icon"
      :no-border="noBorder"
      :shadow="shadow"
      :no-background="noBackground"
      :grey="grey"
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
  download: false,
  small: false,
  icon: false,
  noBorder: false,
  shadow: false,
  noBackground: false,
  grey: false,
}
