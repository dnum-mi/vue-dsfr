import type { DsfrSegmentedProps } from './DsfrSegmented.types'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { fn } from 'storybook/test'
import { watch } from 'vue'

import DsfrSegmented from './DsfrSegmented.vue'

// Interface étendue pour les stories avec la propriété options et les événements
interface StoryArgs extends DsfrSegmentedProps {
  options?: DsfrSegmentedProps[]
  'onUpdate:modelValue'?: (value: string | number) => void
}

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
    name: {
      control: 'text',
      description: 'Nom du groupe de boutons radio',
    },
    value: {
      control: 'text',
      description: 'Valeur du bouton radio (obligatoire)',
    },
    label: {
      control: 'text',
      description: 'Texte du label associé au bouton',
    },
    disabled: {
      control: 'boolean',
      description: 'Si `true`, désactive le bouton radio',
    },
    icon: {
      control: 'text',
      description: 'Icône à afficher à côté du label. Si la valeur commence par `fr-`, cette classe sera ajoutée à la balise `<label>`, sinon c\'est une icône Iconify qui sera utilisée',
    },
    options: {
      control: 'object',
      description:
        'Tableau d\'objets : chaque objet contient les props à passer à `DsfrSegmented` - *N.B. : Ne fait pas partie du composant',
      table: { category: 'Hors composant' },
    },
    modelValue: {
      control: 'radio',
      options: ['1', '3'],
      description: 'Valeur de la case active',
    },
    'onUpdate:modelValue': {
      action: fn(),
      description: 'Appelé à chaque changement de valeur (visible dans l’onglet ***Actions*** de Storybook)',
      table: { category: 'Hors composant' },
    },
  },
} satisfies Meta<StoryArgs>

export default meta
type Story = StoryObj<Meta<StoryArgs>>

export const ControleSegmente: Story = {
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
  render: (args) => ({
    components: { DsfrSegmented },
    setup () {
      watch(() => args.modelValue, (newValue: string | number | undefined) => {
        if (newValue !== undefined) {
          args['onUpdate:modelValue']?.(newValue)
        }
      })
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
          v-model="args.modelValue"
          v-for="(option, i) of args.options"
          :key="i"
          v-bind="option"
        />
      </div>
    </fieldset>
  </div>
  `,
  }),
}
