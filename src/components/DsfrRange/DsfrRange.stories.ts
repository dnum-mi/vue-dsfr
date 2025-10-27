import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import { ref } from 'vue'

import DsfrRange from './DsfrRange.vue'

/**
 * Composant `DsfrRange` (Curseur) permettant de sélectionner une valeur ou une plage de valeurs sur une échelle.
 *
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/curseur)
 */
const meta = {
  title: 'Composants/DsfrRange',
  component: DsfrRange,
  tags: ['formulaire'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Libellé du champ',
    },
    min: {
      control: 'number',
      description: 'Valeur minimale',
    },
    max: {
      control: 'number',
      description: 'Valeur maximale',
    },
    modelValue: {
      control: 'number',
      description: 'Valeur du modèle',
    },
    lowerValue: {
      control: 'number',
      description: 'Valeur inférieure',
    },
    hint: {
      control: 'text',
      description: 'Indication sur le champ',
    },
    message: {
      control: 'text',
      description: 'Message d’erreur ou de succès',
    },
    prefix: {
      control: 'text',
      description: 'Préfixe de la valeur',
    },
    suffix: {
      control: 'text',
      description: 'Suffixe de la valeur',
    },
    small: {
      control: 'boolean',
      description: 'Version plus fine (en hauteur)',
    },
    hideIndicators: {
      control: 'boolean',
      description: 'Masquer les indicateurs',
    },
    step: {
      control: 'number',
      description: 'Pas',
    },
    disabled: {
      control: 'boolean',
      description: 'Désactivé',
    },
    'onUpdate:modelValue': { action: fn() },
    'onUpdate:lowerValue': { action: fn() },
  },
} satisfies Meta<typeof DsfrRange>

export default meta
type Story = StoryObj<typeof meta>

export const EchelleSimple: Story = {
  render: (args) => ({
    components: { DsfrRange },
    setup () {
      const value = ref(args.modelValue)
      return {
        args,
        value,
      }
    },
    template: '<DsfrRange v-bind="args" v-model="value" @update:model-value="args[\'onUpdate:modelValue\']" />',
  }),
  args: {
    label: 'Taux de satisfaction',
    min: 0,
    max: 100,
    modelValue: 50,
    lowerValue: undefined,
    step: undefined,
    hint: 'Indiquez votre niveau de satisfaction sur une échelle de 0 à 100',
  },
}

export const EchelleAvecMessage: Story = {
  ...EchelleSimple,
  args: {
    ...EchelleSimple.args,
    label: 'Étiquette avec erreur',
    message: 'Message d\'erreur',
    modelValue: 30,
  },
}

export const EchellePetite: Story = {
  ...EchelleSimple,
  args: {
    ...EchelleSimple.args,
    label: 'Petite version',
    small: true,
    modelValue: 70,
  },
}

export const EchelleDouble: Story = {
  render: (args) => ({
    components: { DsfrRange },
    setup () {
      const value = ref(args.modelValue)
      const lowerValue = ref(args.lowerValue)
      return {
        args,
        value,
        lowerValue,
      }
    },
    template: '<DsfrRange v-bind="args" v-model="value" v-model:lower-value="lowerValue" @update:model-value="args[\'onUpdate:modelValue\']" @update:lower-value="args[\'onUpdate:lowerValue\']" />',
  }),
  args: {
    label: 'Intervalle de prix',
    min: 0,
    max: 1000,
    modelValue: 750,
    lowerValue: 250,
    step: undefined,
    suffix: '€',
    hint: 'Sélectionnez une fourchette de prix',
  },
}
