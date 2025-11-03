import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, fn, within } from 'storybook/test'
import { ref } from 'vue'

import DsfrRadioButtonSet from './DsfrRadioButtonSet.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-radio)
 */
const meta = {
  component: DsfrRadioButtonSet,
  title: 'Composants/DsfrRadioButtonSet',
  tags: ['formulaire'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description:
        'Indique si le bouton radio doit être désactivé (`true`) ou non (`false`, défaut)',
    },
    inline: {
      control: 'boolean',
      description:
        'Indique si les boutons doivent être affichés en ligne (`true`) ou chacun sur une ligne (`false`, défaut)',
    },
    name: {
      control: 'text',
      description:
        'Valeur de l’attribut `name` de chaque bouton radio du groupe. Obligatoire.',
    },
    small: {
      control: 'boolean',
      description: 'Utilise la version réduite des boutons radio',
    },
    // legend: {
    //   control: 'text',
    //   description: 'Titre du groupe de bouton',
    // },
    options: {
      control: 'object',
      description:
        'Tableau d’objets : chaque objet contient les props à passer à `DsfrRadioButton`',
    },
    modelValue: {
      control: 'text',
      description: 'Valeur de la case cochée',
    },
    errorMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas d’erreur',
    },
    validMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas de succès',
    },
    'update:modelValue': {
      description:
        'Événement émis à chaque changement de valeur du groupe de même bouton radio',
    },
    onChange: { action: fn() },
  },
} as Meta<typeof DsfrRadioButtonSet>

export default meta

type Story = StoryObj<typeof meta>

export const GroupeDeBoutonsRadio: Story = {
  args: {
    legend: 'Légende des champs',
    inline: false,
    modelValue: '3',
    small: false,
    options: [
      {
        label: 'Valeur 1',
        value: '1',
        hint: 'Description 1',
      },
      {
        label: 'Valeur 2',
        value: '2',
        disabled: true,
        hint: 'Description 2',
      },
      {
        label: 'Valeur 3',
        value: '3',
        hint: 'Description 3',
      },
    ],
  },
  render: (args) => ({
    components: { DsfrRadioButtonSet },
    setup () {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `
      <DsfrRadioButtonSet
        :legend="args.legend"
        v-model="modelValue"
        name="radio-set"
        :options="args.options"
        :inline="args.inline"
        @update:model-value="args.onChange"
      />
    `,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const firstInputLabel = canvas.getByText(args.options.at(0)!.label)
    const initialCheckedInputLabel = canvas.getByText(args.options.at(2)!.label)
    expect(initialCheckedInputLabel).toHaveClass('fr-label')
    expect(firstInputLabel).toHaveClass('fr-label')
    const firstInput = canvas.getAllByRole('radio').at(0) as HTMLInputElement
    const initialCheckedInput = canvas.getAllByRole('radio').at(2) as HTMLInputElement
    expect(initialCheckedInput.parentElement).toHaveClass('fr-radio-group')
    expect(firstInput).not.toBeChecked()
    expect(initialCheckedInput).toBeChecked()
    firstInputLabel.click()
    expect(firstInput).toBeChecked()
    expect(initialCheckedInput).not.toBeChecked()
  },
}

export const GroupeDeBoutonsRadioRequis: Story = {
  args: {
    legend: 'Légende des champs',
    inline: false,
    required: true,
    modelValue: '3',
    small: false,
    options: [
      {
        label: 'Valeur 1',
        value: '1',
        hint: 'Description 1',
      },
      {
        label: 'Valeur 2',
        value: '2',
        disabled: true,
        hint: 'Description 2',
      },
      {
        label: 'Valeur 3',
        value: '3',
        hint: 'Description 3',
      },
    ],
  },
  render: (args) => ({
    components: { DsfrRadioButtonSet },
    setup () {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `
      <DsfrRadioButtonSet
        v-model="modelValue"
        :legend="args.legend"
        :required="args.required"
        name="radio-set"
        :options="args.options"
        :inline="args.inline"
        @update:model-value="args.onChange"
      />
    `,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const legend = canvas.getByText(args.legend)
    expect(legend).toContainHTML('*')
  },
}

export const GroupeDeBoutonsRadioRequisPersonnalise: Story = {
  args: {
    legend: 'Légende des champs',
    inline: false,
    required: true,
    modelValue: '3',
    small: false,
    options: [
      {
        label: 'Valeur 1',
        value: '1',
        hint: 'Description 1',
      },
      {
        label: 'Valeur 2',
        value: '2',
        disabled: true,
        hint: 'Description 2',
      },
      {
        label: 'Valeur 3',
        value: '3',
        hint: 'Description 3',
      },
    ],
  },
  render: (args) => ({
    components: { DsfrRadioButtonSet },
    setup () {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `
      <DsfrRadioButtonSet
        v-model="modelValue"
        :legend="args.legend"
        :required="args.required"
        name="radio-set"
        :options="args.options"
        :inline="args.inline"
        @update:model-value="args.onChange"
      >
        <template #required-tip>
          <em> (obligatoire)</em>
        </template>
      </DsfrRadioButtonSet>
    `,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const legend = canvas.getByText(args.legend)
    expect(legend).toContainHTML('(obligatoire)')
  },
}

export const GroupeDeBoutonsRadioEnErreur: Story = {
  args: {
    error: 'Texte de l\'erreur',
    legend: 'Légende des champs',
    inline: false,
    selectedValue: 1,
    disabled: false,
    options: [
      {
        label: 'Valeur 1',
        value: '1',
        hint: 'Description 1',
      },
      {
        label: 'Valeur 2',
        value: '2',
        disabled: true,
        hint: 'Description 2',
      },
      {
        label: 'Valeur 3',
        value: '3',
        hint: 'Description 3',
      },
    ],
  },
  render: (args) => ({
    components: { DsfrRadioButtonSet },
    setup () {
      const selectedValue = ref(args.selectedValue)
      return { args, selectedValue }
    },
    template: `
      <DsfrRadioButtonSet
        :legend="args.legend"
        v-model="selectedValue"
        name="radio-errors"
        :options="args.options"
        :disabled="args.disabled"
        :error-message="args.error"
        :inline="args.inline"
        @update:model-value="args.onChange"
      />
    `,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const radioWrapper = canvas.getByText(args.options.at(0)!.label).parentElement
    const messageEl = canvas.getByText(args.error)

    expect(radioWrapper).toHaveClass('fr-radio-group')
    expect(radioWrapper?.parentElement?.parentElement).toHaveClass('fr-fieldset--error')
    expect(messageEl).toHaveClass('fr-message--info')
    expect(messageEl).toHaveClass('fr-error-text')
  },
}

export const GroupeDeBoutonsRadioEnSucces: Story = {
  args: {
    validMessage: 'Succès au chocolat',
    legend: 'Légende des champs',
    inline: false,
    selectedValue: 1,
    disabled: false,
    options: [
      {
        label: 'Valeur 1',
        value: '1',
        hint: 'Description 1',
      },
      {
        label: 'Valeur 2',
        value: '2',
        disabled: true,
        hint: 'Description 2',
      },
      {
        label: 'Valeur 3',
        value: '3',
        hint: 'Description 3',
      },
    ],
  },
  render: (args) => ({
    components: { DsfrRadioButtonSet },
    setup () {
      const selectedValue = ref(args.selectedValue)
      return { args, selectedValue }
    },
    template: `
      <DsfrRadioButtonSet
        :legend="args.legend"
        v-model="selectedValue"
        name="radio-success"
        :options="args.options"
        :disabled="args.disabled"
        :valid-message="args.validMessage"
        :inline="args.inline"
        @update:model-value="args.onChange"
      />
    `,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const radioWrapper = canvas.getByText(args.options.at(0)!.label).parentElement
    const messageEl = canvas.getByText(args.validMessage)

    expect(radioWrapper).toHaveClass('fr-radio-group')
    expect(radioWrapper?.parentElement?.parentElement).toHaveClass('fr-fieldset--valid')
    expect(messageEl).toHaveClass('fr-message--info')
    expect(messageEl).toHaveClass('fr-valid-text')
  },
}

export const GroupeDeBoutonsRadioDisabled: Story = {
  args: {
    legend: 'Légende des champs',
    inline: false,
    selectedValue: 1,
    disabled: true,
    options: [
      {
        label: 'Valeur 1',
        value: '1',
        hint: 'Description 1',
      },
      {
        label: 'Valeur 2',
        value: '2',
        disabled: true,
        hint: 'Description 2',
      },
      {
        label: 'Valeur 3',
        value: '3',
        hint: 'Description 3',
      },
    ],
  },
  render: (args) => ({
    components: { DsfrRadioButtonSet },
    setup () {
      const selectedValue = ref(args.selectedValue)
      return { args, selectedValue }
    },
    template: `
      <DsfrRadioButtonSet
        :legend="args.legend"
        v-model="selectedValue"
        name="radio-disabled"
        :options="args.options"
        :disabled="args.disabled"
        :inline="args.inline"
        @update:model-value="args.onChange"
      />
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const legend = canvas.getByText('Légende des champs').parentElement
    expect(legend).toHaveAttribute('disabled')
  },
}

export const GroupeDeBoutonsRadioInline: Story = {
  args: {
    legend: 'Légende des champs en ligne',
    selectedValue: 1,
    disabled: false,
    inline: true,
    options: [
      {
        label: 'Valeur 1',
        value: '1',
        hint: 'Description 1',
      },
      {
        label: 'Valeur 2',
        value: '2',
        disabled: true,
        hint: 'Description 2',
      },
      {
        label: 'Valeur 3',
        value: '3',
        hint: 'Description 3',
      },
    ],
  },
  render: (args) => ({
    components: { DsfrRadioButtonSet },
    setup () {
      const selectedValue = ref(args.selectedValue)
      return { args, selectedValue }
    },
    template: `
      <DsfrRadioButtonSet
        :legend="args.legend"
        v-model="selectedValue"
        name="radio-inline"
        :options="args.options"
        :disabled="args.disabled"
        :inline="args.inline"
        @update:model-value="args.onChange"
      />
    `,
  }),
}
