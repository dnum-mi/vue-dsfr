import DsfrSummary from './DsfrSummary.vue'

export default {
  component: DsfrSummary,
  title: 'Composants/Sommaire - DsfrSummary',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.',
    },
    title: {
      control: 'text',
      description: 'Titre du sommaire',
    },
    anchors: {
      control: 'object',
      description: 'Tableau d\'objets contenant le nom des ancres et le lien correspondant',
    },
  },
}

export const Sommaire = (args) => ({
  components: { DsfrSummary },
  data () {
    return args
  },
  template: `
    <DsfrSummary
      :dark="dark"
      :title="title"
      :anchors="anchors"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
Sommaire.args = {
  dark: false,
  title: 'Exemple de sommaire',
  anchors: [{ link: '#', name: 'Première étape' }, { link: '#', name: 'Deuxième étape' }, { link: '#', name: 'Troisième étape' }],
}
