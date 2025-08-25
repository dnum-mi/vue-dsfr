import DsfrTiles from './DsfrTiles.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile)
 */
export default {
  component: DsfrTiles,
  title: 'Composants/DsfrTiles',
  argTypes: {
    tiles: {
      control: 'object',
      description:
        'Tableau avec pour chaque élément :\n\n  - les props attendues par DsfrTile\n  - la prop `containerClass` pour l’attribut `class` du div parent de chaque tile',
    },
    horizontal: {
      control: 'boolean',
      description:
        'Permet de mettre chaque tuile sur une ligne entière, et d’envoyer aussi par défaut cette valeur à chacune des tuiles enfant (Surchargeable éventuellement par chaque objet du tableau `tiles`)',
    },
  },
}

export const JeuDeTuiles = (args) => ({
  components: {
    DsfrTiles,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <DsfrTiles
      :tiles="tiles"
      :horizontal="horizontal"
    />
  `,
})
JeuDeTuiles.args = {
  tiles: [
    {
      title: 'Ma formidable tuile 1',
      imgSrc: 'https://loremflickr.com/80/80/cat?random=1',
      description: 'Une tuile absolument formidable',
    },
    {
      title: 'Ma formidable tuile 2',
      imgSrc: 'https://loremflickr.com/80/80/cat?random=2',
      description: 'Une tuile absolument formidable',
    },
    {
      title: 'Ma formidable tuile 3',
      imgSrc: 'https://loremflickr.com/80/80/cat?random=3',
      description: 'Une tuile absolument formidable',
    },
    {
      title: 'Ma formidable tuile 4',
      imgSrc: 'https://loremflickr.com/80/80/cat?random=4',
      description: 'Une tuile absolument formidable',
    },
  ],
  horizontal: false,
}
