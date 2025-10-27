import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import { ref } from 'vue'

import DsfrSearchBar from './DsfrSearchBar.vue'

/**
 * `DsfrSearchBar` composant barre de recherche du DSFR.
 *
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche)
 */
const meta = {
  component: DsfrSearchBar,
  title: 'Composants/DsfrSearchBar',
  argTypes: {
    label: {
      control: 'text',
      description: 'Texte du `label` de la barre de recherche',
    },
    id: {
      control: 'text',
      description:
        '(optionnel) Valeur de l’attribut `id` de l’input au sein d. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    placeholder: {
      control: 'text',
      description: 'Texte à afficher si le champ de recherhe n’est pas rempli',
    },
    disabled: {
      control: 'boolean',
      description:
        'Permet de désactiver le champ et le bouton, la saisie du champ et le clic sur le bouton sera impossible.',
    },
    buttonText: {
      control: 'text',
      description: 'Texte du bouton de la barre de recherche',
    },
    modelValue: {
      control: 'text',
      description: 'Contenu du champ de recherche',
    },
    large: {
      control: 'boolean',
      description:
        'Indique si la barre de recherche doit prendre plus de hauteur (`true`) ou non (`false`, défaut)',
    },
    'onUpdate:modelValue': {
      action: fn(),
      description:
        'Événement émis à chaque changement de la valeur du champ de saisie de la recherche',
    },
    onSearch: {
      action: fn(),
      description: 'Événement émis lors de la validation de la recherche',
    },
  },
} satisfies Meta<typeof DsfrSearchBar>

export default meta
type Story = StoryObj<typeof meta>

const render = (args) => ({
  components: {
    DsfrSearchBar,
  },
  setup () {
    const modelValue = ref(args.modelValue)
    return {
      ...args,
      modelValue,
    }
  },
  template: `
      <DsfrSearchBar
        :label="label"
        :placeholder="placeholder"
        :button-text="buttonText"
        v-model="modelValue"
        :large="large"
        :disabled="disabled"
        @search="onSearch"
        @update:model-value="onUpdateModelValue"
      />
  `,
})

export const BarreDeRecherche: Story = {
  render,
  args: {
    label: 'Label de search bar',
    placeholder: 'Rechercher',
    buttonText: '',
    modelValue: '',
    large: false,
    disabled: false,
  },
}

export const BarreDeRechercheLarge: Story = {
  render,
  args: {
    ...BarreDeRecherche.args,
    label: 'Label de search bar',
    placeholder: 'Rechercher',
    buttonText: 'Rechercher',
    large: true,
  },
}

export const BarreDeRechercheDesactivee: Story = {
  render,
  args: {
    ...BarreDeRecherche.args,
    label: 'Label de search bar',
    disabled: true,
  },
}
