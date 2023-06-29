import DsfrSummary from './DsfrSummary.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/sommaire)
 */
export default {
  component: DsfrSummary,
  title: 'Composants/DsfrSummary',
  argTypes: {

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

})
Sommaire.args = {
  title: 'Exemple de sommaire',
  anchors: [{ link: '#', name: 'Première étape' }, { link: '#', name: 'Deuxième étape' }, { link: '#', name: 'Troisième étape' }],
}
