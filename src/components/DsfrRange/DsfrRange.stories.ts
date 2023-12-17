// Importation du composant.
import DsfrRange from './DsfrRange.vue'

// Story par défaut
export default {
  title: 'Composants/DsfrRange',
  component: DsfrRange,
  argTypes: {
    label: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    modelValue: { control: 'number' },
    hint: { control: 'text' },
    message: { control: 'text' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
    small: { control: 'boolean' },
    hideIndicators: { control: 'boolean' },
    step: { control: 'number' },
    double: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

// Template de base pour les stories
const Template = (args) => ({
  components: { DsfrRange },
  setup () {
    return {
      args,
      value: args.modelValue,
    }
  },
  template: '<DsfrRange v-bind="args" v-model="value" />',
})

// Story pour l'utilisation standard
export const Standard = Template.bind({})
Standard.args = {
  label: 'Étiquette standard',
  min: 0,
  max: 100,
  modelValue: 50,
  // Autres props si nécessaire
}

// Story avec un message d'erreur
export const WithErrorMessage = Template.bind({})
WithErrorMessage.args = {
  label: 'Étiquette avec erreur',
  message: 'Message d\'erreur',
  min: 0,
  max: 100,
  modelValue: 30,
  // Autres props si nécessaire
}

// Story pour une version petite
export const SmallVersion = Template.bind({})
SmallVersion.args = {
  label: 'Petite version',
  small: true,
  min: 0,
  max: 100,
  modelValue: 70,
  // Autres props si nécessaire
}
