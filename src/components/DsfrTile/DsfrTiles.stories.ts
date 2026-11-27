import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrTiles from './DsfrTiles.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile)
 */
const meta = {
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
        'Permet de mettre chaque tuile sur une ligne entière, et d\'envoyer aussi par défaut cette valeur à chacune des tuiles enfant (Surchargeable éventuellement par chaque objet du tableau `tiles`)',
    },
  },
} as Meta<typeof DsfrTiles>

export default meta

type Story = StoryObj<typeof meta>

export const JeuDeTuiles: Story = {
  args: {
    tiles: [
      {
        title: 'Ma formidable tuile 1',
        imgSrc: 'https://api.images.cat/80/80?random=1',
        description: 'Une tuile absolument formidable',
      },
      {
        title: 'Ma formidable tuile 2',
        imgSrc: 'https://api.images.cat/80/80?random=2',
        description: 'Une tuile absolument formidable',
      },
      {
        title: 'Ma formidable tuile 3',
        imgSrc: 'https://api.images.cat/80/80?random=3',
        description: 'Une tuile absolument formidable',
      },
      {
        title: 'Ma formidable tuile 4',
        imgSrc: 'https://api.images.cat/80/80?random=4',
        description: 'Une tuile absolument formidable',
      },
    ],
    horizontal: false,
  },
  render: (args) => ({
    components: {
      DsfrTiles,
    },
    setup () {
      return { args }
    },
    template: `
      <DsfrTiles
        :tiles="args.tiles"
        :horizontal="args.horizontal"
      />
    `,
  }),
}
