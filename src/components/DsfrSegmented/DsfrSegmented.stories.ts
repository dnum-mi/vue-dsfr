import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import { ref } from 'vue'

import DsfrSegmented from './DsfrSegmented.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente)
 */
const meta = {
  component: DsfrSegmented,
  title: 'Composants/DsfrSegmented',
  tags: ['formulaire', 'bouton'],
  argTypes: {
    id: {
      control: 'text',
      description:
        '(optionnel) Valeur de l’attribut `id` du contrôle segmenté. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    options: {
      control: 'object',
      description:
        'Tableau d’objets : chaque objet contient les props à passer à `DsfrSegmented` - *N.B. : Ne fait pas partie du composant',
    },
    modelValue: {
      control: 'radio',
      options: ['1', '3'],
      description: 'Valeur de la case active',
    },
    'onUpdate:modelValue': fn(),
  },
} satisfies Meta<typeof DsfrSegmented>

export default meta
type Story = StoryObj<typeof meta>

export const ControleSegmente: Story = {
  render: (args) => ({
    components: { DsfrSegmented },
    setup () {
      return {
        args,
      }
    },
    template: `
  <div class="fr-form-group">
    <fieldset
      class="fr-segmented"
    >
      <div
        class="fr-segmented__elements"
      >
        <DsfrSegmented
          v-for="(option, i) of args.options"
          :key="i"
          v-model="args.modelValue"
          v-bind="option"
        />
      </div>
    </fieldset>
  </div>
  `,
  }),
  args: {
    modelValue: '3',
    'onUpdate:modelValue': fn(),
    options: [
      {
        label: 'Valeur 1',
        value: '1',
        name: 'Choix',
      },
      {
        label: 'Valeur 2',
        value: '2',
        disabled: true,
        name: 'Choix',
      },
      {
        label: 'Valeur 3',
        value: '3',
        name: 'Choix',
      },
    ],
  },
}
