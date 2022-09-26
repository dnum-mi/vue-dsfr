import DsfrStepper from './DsfrStepper.vue'

export default {
  component: DsfrStepper,
  title: 'Composants/Indicateur d’étapes - DsfrStepper',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.',
    },
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
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
IndicateurDesEtapes.args = {
  steps: ['Première étape', 'Deuxième étape', 'Troisième étape', 'Quatrième étape'],
  currentStep: 1,
}
