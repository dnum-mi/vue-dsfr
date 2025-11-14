import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, within } from 'storybook/test'

import DsfrCheckboxSet from './DsfrCheckboxSet.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)
 */
const meta = {
  component: DsfrCheckboxSet,
  title: 'Composants/DsfrCheckboxSet',
  tags: ['formulaire'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description:
        'Indique si l\'ensemble des checkboxes doivent être désactivées (`true`) ou non (`false`, défaut)',
    },
    errorMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas d\'erreur',
    },
    validMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas de succès',
    },
    inline: {
      control: 'boolean',
      description:
        'Indique si les checkboxes doivent apparaître sur une seule ligne (`true`) ou non (`false`, défaut)',
    },
    small: {
      control: 'boolean',
      description: 'Utilise la version réduite des checkboxes',
    },
    // legend: {
    //   control: 'text',
    //   description: 'Titre de l'ensemble (Set) des checkboxes',
    // },
    options: {
      control: 'object',
      description:
        'Tableau de `string` (la valeur `value` de la checkbox sera identique au `label`) ou d\'objets contenant les props à passer à chaque composant DsfrCheckbox, sauf `modelValue` qui sera calculée à partir de `modelValue` du DsfrCheckboxSet.',
    },
    modelValue: {
      control: 'object',
      description:
        'Tableau des valeurs sélectionnées (cochées) du groupe de checkboxes',
    },
    required: {
      control: 'boolean',
      description:
        'Permet de spécifier que cet ensemble de champs doit être renseigné',
    },
  },
} satisfies Meta<typeof DsfrCheckboxSet>

export default meta

type Story = StoryObj<typeof meta>

const defaultOptions = [
  {
    label: 'Valeur 1',
    id: 'name1',
    name: 'name1',
    value: 'value1',
    hint: 'Description 1',
  },
  {
    label: 'Valeur 2 (désactivée)',
    id: 'name2',
    name: 'name2',
    value: 'value2',
    hint: 'Description 2 (désactivée)',
    disabled: true,
  },
  {
    label: 'Valeur 3',
    id: 'name3',
    name: 'name3',
    value: 'value3',
    hint: 'Description 3',
  },
]

export const CheckboxSet: Story = {
  args: {
    legend: 'Légende des champs',
    disabled: false,
    inline: false,
    required: false,
    small: false,
    errorMessage: '',
    validMessage: '',
    modelValue: ['value1'],
    options: defaultOptions,
  } as any,
  render: (args) => ({
    components: { DsfrCheckboxSet },
    setup () {
      return { args }
    },
    template: `
      <DsfrCheckboxSet
        :legend="args.legend"
        v-model="args.modelValue"
        :options="args.options"
        :inline="args.inline"
        :disabled="args.disabled"
        :small="args.small"
        :required="args.required"
        :errorMessage="args.errorMessage"
        :validMessage="args.validMessage"
      />
      Sélection : {{ args.modelValue }}
    `,
    watch: {
      'args.modelValue': (val: string[]) => {
        if ((args as any).onChange) {
          (args as any).onChange(val)
        }
      },
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkboxes = canvas.getAllByRole('checkbox')
    const firstCheckbox = checkboxes.at(0)
    expect(firstCheckbox).toHaveAttribute('checked')
    expect(firstCheckbox).toHaveProperty('checked', true)
    expect(checkboxes.at(1)).not.toHaveAttribute('checked')
    expect(checkboxes.at(2)).not.toHaveAttribute('checked')
  },
}

export const CheckboxSetRequis: Story = {
  args: {
    legend: 'Veuillez choisir au moins une des propositions suivantes',
    disabled: false,
    inline: false,
    required: true,
    errorMessage: '',
    validMessage: '',
    modelValue: ['value1'],
    options: defaultOptions,
  } as any,
  render: (args) => ({
    components: { DsfrCheckboxSet },
    setup () {
      return { args }
    },
    template: `
      <DsfrCheckboxSet
        :legend="args.legend"
        v-model="args.modelValue"
        :options="args.options"
        :inline="args.inline"
        :disabled="args.disabled"
        :required="args.required"
        :errorMessage="args.errorMessage"
        :validMessage="args.validMessage"
      />
      Sélection : {{ args.modelValue }}
    `,
    watch: {
      'args.modelValue': (val: string[]) => {
        if ((args as any).onChange) {
          (args as any).onChange(val)
        }
      },
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkboxes = canvas.getAllByRole('checkbox')
    const firstCheckbox = checkboxes.at(0)
    expect(firstCheckbox).toHaveAttribute('checked')
    expect(firstCheckbox).toHaveProperty('checked', true)
  },
}

export const CheckboxSetRequisPersonnalise: Story = {
  args: {
    legend: 'Label de l\'ensemble des champs',
    disabled: false,
    inline: false,
    required: true,
    errorMessage: '',
    validMessage: '',
    requiredText: '(en choisir au moins un)',
    modelValue: ['value1'],
    options: defaultOptions,
  } as any,
  render: (args) => ({
    components: { DsfrCheckboxSet },
    setup () {
      return { args }
    },
    template: `
      <DsfrCheckboxSet
        :legend="args.legend"
        v-model="args.modelValue"
        :options="args.options"
        :inline="args.inline"
        :disabled="args.disabled"
        :required="args.required"
        :errorMessage="args.errorMessage"
        :validMessage="args.validMessage"
      >
        <template #required-tip>
          <em> {{args.requiredText}}</em>
        </template>
      </DsfrCheckboxSet>
      Sélection : {{ args.modelValue }}
    `,
    watch: {
      'args.modelValue': (val: string[]) => {
        if ((args as any).onChange) {
          (args as any).onChange(val)
        }
      },
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkboxes = canvas.getAllByRole('checkbox')
    const requiredEm = canvas.getByText('(en choisir au moins un)')
    const firstCheckbox = checkboxes.at(0)
    expect(requiredEm).toHaveProperty('tagName', 'EM')
    expect(firstCheckbox).toHaveAttribute('checked')
    expect(firstCheckbox).toHaveProperty('checked', true)
  },
}

export const CheckboxSetAvecErreur: Story = {
  args: {
    legend: 'Légende des champs',
    disabled: false,
    inline: false,
    required: false,
    errorMessage: 'Message d\'erreur',
    modelValue: ['value1'],
    options: defaultOptions,
  } as any,
  render: (args) => ({
    components: { DsfrCheckboxSet },
    setup () {
      return { args }
    },
    template: `
      <DsfrCheckboxSet
        v-model="args.modelValue"
        :legend="args.legend"
        :required="args.required"
        :error-message="args.errorMessage"
        :options="args.options"
        :inline="args.inline"
      />
      Sélection : {{ args.modelValue }}
    `,
    watch: {
      'args.modelValue': (val: string[]) => {
        if ((args as any).onChange) {
          (args as any).onChange(val)
        }
      },
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkboxes = canvas.getAllByRole('checkbox')
    const firstCheckbox = checkboxes.at(0)
    const legend = canvas.getByText('Légende des champs')
    expect(legend).toHaveClass('fr-fieldset__legend')

    const checkboxWrapper = firstCheckbox?.parentElement
    expect(checkboxWrapper).toHaveClass('fr-checkbox-group')

    const fieldsetElement = checkboxWrapper?.parentElement
    expect(fieldsetElement).toHaveClass('fr-fieldset__element')
    const fieldset = fieldsetElement?.parentElement
    expect(fieldset).toHaveClass('fr-fieldset')
    expect(fieldset).toHaveClass('fr-fieldset--error')

    const errorEl = canvas.getByText('Message d\'erreur').parentElement
    expect(errorEl).toHaveClass('fr-error-text')
    expect(errorEl).toHaveClass('fr-message--info')

    expect(firstCheckbox).toHaveAttribute('checked')
    expect(firstCheckbox).toHaveProperty('checked', true)
  },
}

export const CheckboxSetAvecSucces: Story = {
  args: {
    legend: 'Légende des champs',
    modelValue: ['value1'],
    inline: false,
    validMessage: 'Message de succès',
    options: defaultOptions,
  } as any,
  render: (args) => ({
    components: { DsfrCheckboxSet },
    setup () {
      return { args }
    },
    template: `
      <DsfrCheckboxSet
        :legend="args.legend"
        v-model="args.modelValue"
        :valid-message="args.validMessage"
        :options="args.options"
        :inline="args.inline"
      />
      Sélection : {{ args.modelValue }}
    `,
    watch: {
      'args.modelValue': (val: string[]) => {
        if ((args as any).onChange) {
          (args as any).onChange(val)
        }
      },
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkboxes = canvas.getAllByRole('checkbox')
    const firstCheckbox = checkboxes.at(0)
    const legend = canvas.getByText('Légende des champs')
    expect(legend).toHaveClass('fr-fieldset__legend')

    const checkboxWrapper = firstCheckbox?.parentElement
    expect(checkboxWrapper).toHaveClass('fr-checkbox-group')

    const fieldsetElement = checkboxWrapper?.parentElement
    expect(fieldsetElement).toHaveClass('fr-fieldset__element')
    const fieldset = fieldsetElement?.parentElement
    expect(fieldset).toHaveClass('fr-fieldset')
    expect(fieldset).toHaveClass('fr-fieldset--valid')

    const validEl = canvas.getByText('Message de succès').parentElement
    expect(validEl).toHaveClass('fr-valid-text')
    expect(validEl).toHaveClass('fr-message--info')

    expect(firstCheckbox).toHaveAttribute('checked')
    expect(firstCheckbox).toHaveProperty('checked', true)
  },
}

export const CheckboxSetInline: Story = {
  args: {
    legend: 'Légende des champs en ligne',
    modelValue: ['value1'],
    inline: true,
    errorMessage: '',
    validMessage: '',
    options: defaultOptions,
  } as any,
  render: (args) => ({
    components: { DsfrCheckboxSet },
    setup () {
      return { args }
    },
    template: `
      <DsfrCheckboxSet
        :legend="args.legend"
        v-model="args.modelValue"
        :error-message="args.errorMessage"
        :valid-message="args.validMessage"
        :options="args.options"
        :inline="args.inline"
      />
      Sélection : {{ args.modelValue }}
    `,
    watch: {
      'args.modelValue': (val: string[]) => {
        if ((args as any).onChange) {
          (args as any).onChange(val)
        }
      },
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const checkboxes = canvas.getAllByRole('checkbox')
    const firstCheckbox = checkboxes.at(0)

    const checkboxWrapper = firstCheckbox?.parentElement
    expect(checkboxWrapper).toHaveClass('fr-checkbox-group')

    const fieldsetElement = checkboxWrapper?.parentElement
    expect(fieldsetElement).toHaveClass('fr-fieldset__element--inline')
  },
}

export const CheckboxSetInlineAvecErreur: Story = {
  args: {
    legend: 'Légende des champs en ligne',
    modelValue: ['value1'],
    inline: true,
    errorMessage: 'Message d\'erreur',
    validMessage: '',
    options: defaultOptions,
  } as any,
  render: (args) => ({
    components: { DsfrCheckboxSet },
    setup () {
      return { args }
    },
    template: `
      <DsfrCheckboxSet
        :legend="args.legend"
        v-model="args.modelValue"
        :error-message="args.errorMessage"
        :valid-message="args.validMessage"
        :options="args.options"
        :inline="args.inline"
      />
      Sélection : {{ args.modelValue }}
    `,
    watch: {
      'args.modelValue': (val: string[]) => {
        if ((args as any).onChange) {
          (args as any).onChange(val)
        }
      },
    },
  }),
}

export const CheckboxSetInlineAvecSucces: Story = {
  args: {
    legend: 'Légende des champs en ligne',
    modelValue: ['value1'],
    inline: true,
    errorMessage: '',
    validMessage: 'Message de succès',
    options: defaultOptions,
  } as any,
  render: (args) => ({
    components: { DsfrCheckboxSet },
    setup () {
      return { args }
    },
    template: `
      <DsfrCheckboxSet
        :legend="args.legend"
        v-model="args.modelValue"
        :error-message="args.errorMessage"
        :valid-message="args.validMessage"
        :options="args.options"
        :inline="args.inline"
      />
      Sélection : {{ args.modelValue }}
    `,
    watch: {
      'args.modelValue': (val: string[]) => {
        if ((args as any).onChange) {
          (args as any).onChange(val)
        }
      },
    },
  }),
}
