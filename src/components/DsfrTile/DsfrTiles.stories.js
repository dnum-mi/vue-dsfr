import DsfrTiles from './DsfrTiles.vue'

export default {
  components: DsfrTiles,
  title: 'Éléments/Jeu de Tuiles - Tiles',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    tiles: {
      control: 'object',
      description: 'Tableau avec pour chaque élément :\n\n  - les props attendues par DsfrTile\n  - la prop `containerClass` pour l’attribut `class` du div parent de chaque tile',
    },
    horizontal: {
      control: 'boolean',
      description: 'Permet de mettre chaque tuile sur une ligne entière, et d’envoyer aussi par défaut cette valeur à chacune des tuiles enfant (Surchargeable éventuellement par chaque objet du tableau `tiles`)',
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
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrTiles
        :tiles="tiles"
        :horizontal="horizontal"
      />
    </div>
  `,

})
JeuDeTuiles.args = {
  dark: false,
  tiles: [
    {
      title: 'Ma formidable tuile 1',
      imgSrc: 'http://placekitten.com/g/80/81',
      description: 'Une tuile absolument formidable',
    },
    {
      title: 'Ma formidable tuile 2',
      imgSrc: 'http://placekitten.com/g/80/82',
      description: 'Une tuile absolument formidable',
    },
    {
      title: 'Ma formidable tuile 3',
      imgSrc: 'http://placekitten.com/g/80/83',
      description: 'Une tuile absolument formidable',
    },
    {
      title: 'Ma formidable tuile 4',
      imgSrc: 'http://placekitten.com/g/80/84',
      description: 'Une tuile absolument formidable',
    },
  ],
  horizontal: false,
}
