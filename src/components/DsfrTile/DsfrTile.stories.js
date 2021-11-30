import DsfrTile from './DsfrTile.vue'

export default {
  components: DsfrTile,
  title: 'Composants/Tuile - DsfrTile',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
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
    to: {
      control: 'text',
      description: 'Lien vers lequel la tuile pointe. Peut être une string ou objet à donner à `router-link` ou un lien externe (`string` commençant par `"http"`)',
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
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrTile
        :title="title"
        :imgSrc="imgSrc"
        :rows="rows"
        :description="description"
        :horizontal="horizontal"
        :to="to"
      />
    </div>
  `,

})
TuileSimple.args = {
  dark: false,
  title: 'Ma formidable tuile',
  imgSrc: 'http://placekitten.com/g/200/200',
  description: 'Une tuile absolument formidable',
  horizontal: false,
  to: '',
}
