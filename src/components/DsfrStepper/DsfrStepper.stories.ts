import DsfrStepper from './DsfrStepper.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/indicateur-d-etape)
 */
export default {
  component: DsfrStepper,
  title: 'Composants/DsfrStepper',
  argTypes: {

    steps: {
      control: 'object',
      description: 'Tableau de strings des labels d’étapes',
    },
    currentStep: {
      control: 'number',
      description: 'Etape active idx de l’élément actif du tableau + 1',
    },
  },
}

export const IndicateurDesEtapes = (args) => ({
  components: { DsfrStepper },
  data () {
    return args
  },
  template: `
    <DsfrStepper
      :steps="steps"
      :currentStep="currentStep"
    />
  `,

})
IndicateurDesEtapes.args = {
  steps: ['Première étape', 'Deuxième étape', 'Troisième étape', 'Quatrième étape'],
  currentStep: 1,
}
