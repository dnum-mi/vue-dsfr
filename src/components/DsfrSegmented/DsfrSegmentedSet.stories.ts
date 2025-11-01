import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { fn } from 'storybook/test'
import { ref, watch } from 'vue'

import DsfrSegmentedSet from './DsfrSegmentedSet.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente)
 */
const meta = {
  component: DsfrSegmentedSet,
  title: 'Composants/DsfrSegmentedSet',
  tags: ['formulaire', 'bouton'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description:
        'Indique si le bouton radio doit être désactivé (`true`) ou non (`false`, défaut)',
    },
    inline: {
      control: 'boolean',
      description:
        'Indique si la légende doit être alignée avec les boutons (`true`) ou chacun sur une ligne (`false`, défaut)',
    },
    name: {
      control: 'text',
      description: 'Valeur de l’attribut `name` de chaque bouton du groupe',
    },
    small: {
      control: 'boolean',
      description: 'Utilise la version réduite des contrôles segmentés',
    },
    legend: {
      control: 'text',
      description: 'Titre du contrôle segmenté',
    },
    options: {
      control: 'object',
      description:
        'Tableau d’objets : chaque objet contient les props à passer à `DsfrSegmented`',
    },
    modelValue: {
      control: 'text',
      description: 'Valeur du contrôle actif',
    },
    'onUpdate:modelValue': {
      action: fn(),
      table: { category: 'Hors composant' },
      description: 'Appelé à chaque changement de valeur (visible dans l’onglet ***Actions*** de Storybook)',
    },
  },
} satisfies Meta<typeof DsfrSegmentedSet>

export default meta
type Story = StoryObj<typeof meta>

const render = (args: typeof ControleSegmenteSimple.args) => ({
  components: { DsfrSegmentedSet },
  setup () {
    const modelValue = ref(args.modelValue)

    watch(modelValue, (newValue) => {
      if (newValue !== undefined) {
        args['onUpdate:modelValue']?.(newValue)
      }
    })
    return {
      args,
      modelValue,
    }
  },
  template: `
    <DsfrSegmentedSet
      :legend="args.legend"
      v-model="modelValue"
      :name="args.name"
      :options="args.options"
      :inline="args.inline"
      :small="args.small"
      :hint="args.hint"
      :disabled="args.disabled"
    />
  `,
})

export const ControleSegmenteSimple: Story = {
  render,
  args: {
    legend: 'Légende des champs',
    inline: false,
    modelValue: '3',
    small: false,
    hint: '',
    name: 'radio-set-1',
    disabled: false,
    options: [
      {
        label: 'Valeur 1',
        value: '1',
      },
      {
        label: 'Valeur 2',
        value: '2',
        disabled: true,
      },
      {
        label: 'Valeur 3',
        value: '3',
      },
    ],
  },
}

export const ControleSegmenteTailleSM: Story = {
  render,
  args: {
    ...ControleSegmenteSimple.args,
    name: 'radio-set-2',
    small: true,
  },
}

export const ControleSegmenteAvecLegendeEnLigne: Story = {
  render,
  args: {
    ...ControleSegmenteSimple.args,
    name: 'radio-set-3',
    inline: true,
  },
}

export const ControleSegmenteAvecHint: Story = {
  render,
  args: {
    ...ControleSegmenteSimple.args,
    name: 'radio-set-4',
    hint: 'Ceci est un hint',
  },
}

export const ControleSegmenteAvecIcones: Story = {
  render,
  args: {
    ...ControleSegmenteSimple.args,
    name: 'radio-set-5',
    options: [
      {
        label: 'Valeur 1',
        value: '1',
        icon: 'ri-checkbox-circle-line',
      },
      {
        label: 'Valeur 2',
        value: '2',
        icon: 'ri-checkbox-circle-line',
      },
      {
        label: 'Valeur 3',
        value: '3',
        icon: 'ri-checkbox-circle-line',
      },
    ],
  },
}

export const ControleSegmenteSansLegende: Story = {
  render,
  args: {
    ...ControleSegmenteSimple.args,
    name: 'radio-set-6',
    legend: '',
  },
}

export const ControleSegmenteDesactive: Story = {
  render,
  args: {
    ...ControleSegmenteSimple.args,
    name: 'radio-set-7',
    options: [
      {
        label: 'Valeur 1',
        value: '1',
      },
      {
        label: 'Valeur 2',
        value: '2',
        disabled: true,
      },
      {
        label: 'Valeur 3',
        value: '3',
      },
    ],
  },
}
