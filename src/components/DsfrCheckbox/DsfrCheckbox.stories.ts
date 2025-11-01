import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, fn, within } from 'storybook/test'

import DsfrCheckbox from './DsfrCheckbox.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/case-a-cocher)
 */
const meta = {
  component: DsfrCheckbox,
  title: 'Composants/DsfrCheckbox',
  tags: ['formulaire'],
  argTypes: {
    id: {
      control: 'text',
      description:
        '(optionnel) Valeur de l\'attribut `id` de la checkbox. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    // label: {
    //   control: 'text',
    //   description: 'Label de la case à cocher',
    // },
    name: {
      control: 'text',
      description: 'Valeur de l\'attribut `name` de la case à cocher',
    },
    hint: {
      control: 'text',
      description: 'Indice de la case à cocher',
    },
    disabled: {
      control: 'boolean',
      description: 'Indique si la case à cocher est désactivée',
    },
    required: {
      control: 'boolean',
      description: 'Indique si le champ est obligatoire',
    },
    small: {
      control: 'boolean',
      description: 'Utilise la version réduite de la case à cocher',
    },
    errorMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas d\'erreur',
    },
    validMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas de succès',
    },
    modelValue: {
      control: 'boolean',
      description:
        'Valeur de la case à cocher : `true` si cochée, `false` sinon',
    },
    'update:modelValue': {
      description:
        'Événement émis lors du changement de l\'état coché (`true`) ou non (`false`)',
    },
    onChange: { action: fn() },
  },
} satisfies Meta<typeof DsfrCheckbox>

export default meta

type Story = StoryObj<typeof meta>

export const Checkbox: Story = {
  args: {
    disabled: false,
    modelValue: false,
    required: false,
    small: false,
    label: 'Checkbox 1',
    name: 'name1',
    value: 'name1',
    hint: 'Description 1',
  } as any,
  render: (args) => ({
    components: { DsfrCheckbox },
    setup () {
      return { args }
    },
    template: `
      <DsfrCheckbox
        :label="args.label"
        :disabled="args.disabled"
        :required="args.required"
        :small="args.small"
        :hint="args.hint"
        :value="args.value"
        :name="args.name || 'name1'"
        v-model="args.modelValue"
      />
      {{ args.modelValue }}
  `,
    watch: {
      'args.modelValue': (newValue: boolean) => {
        if ((args as any).onChange) { (args as any).onChange(newValue) }
      },
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const label = canvas.getByText('Checkbox 1')
    expect(label).toHaveClass('fr-label')
    const input = canvas.getByRole('checkbox')
    expect(input.parentElement).toHaveClass('fr-checkbox-group')
    expect(input).not.toHaveAttribute('required')
    expect(input).not.toBeChecked()
    label.click()
    expect(input).toBeChecked()
    label.click()
  },
}

export const CheckboxRequis: Story = {
  args: {
    disabled: false,
    modelValue: false,
    required: true,
    label: 'En cochant vous acceptez...',
    name: 'name1',
    hint: 'Description 1',
  } as any,
  render: (args) => ({
    components: { DsfrCheckbox },
    setup () {
      return { args }
    },
    template: `
    <component :is="'style'">
      .required {
        color: #f60700;
      }
    </component>
    <DsfrCheckbox
      :label="args.label"
      :disabled="args.disabled"
      :required="args.required"
      :hint="args.hint"
      :name="args.name || 'name1'"
      v-model="args.modelValue"
    />
  `,
    watch: {
      'args.modelValue': (newValue: boolean) => {
        if ((args as any).onChange) { (args as any).onChange(newValue) }
      },
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const label = canvas.getByText('En cochant vous acceptez...')
    expect(label).toHaveClass('fr-label')
    const input = canvas.getByRole('checkbox')
    expect(input).toHaveAttribute('required', '')
  },
}

export const CheckboxRequisPersonnalise: Story = {
  args: {
    disabled: false,
    modelValue: false,
    required: true,
    label: 'En cochant vous acceptez...',
    name: 'name1',
    hint: 'Description 1',
  } as any,
  render: (args) => ({
    components: { DsfrCheckbox },
    setup () {
      return { args }
    },
    template: `
    <component :is="'style'">
      .required {
        color: #f60700;
      }
    </component>
    <DsfrCheckbox
      :label="args.label"
      :disabled="args.disabled"
      :required="args.required"
      :hint="args.hint"
      :name="args.name || 'name1'"
      v-model="args.modelValue"
    >
      <template #required-tip>
        <em>&nbsp;(obligatoire)</em>
      </template>
    </DsfrCheckbox>
  `,
    watch: {
      'args.modelValue': (newValue: boolean) => {
        if ((args as any).onChange) { (args as any).onChange(newValue) }
      },
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const label = canvas.getByText('En cochant vous acceptez...')
    const em = canvas.getByText('(obligatoire)')
    expect(em).toHaveProperty('tagName', 'EM')
    expect(label).toHaveClass('fr-label')
    const input = canvas.getByRole('checkbox')
    expect(input).toHaveAttribute('required', '')
  },
}

export const CheckboxAvecErreur: Story = {
  args: {
    disabled: false,
    modelValue: false,
    required: false,
    label: 'Checkbox 1',
    hint: 'Description 1',
    errorMessage: 'Erreur formulaire',
    name: 'cb-error',
  } as any,
  render: (args) => ({
    components: { DsfrCheckbox },
    setup () {
      return { args }
    },
    template: `
      <DsfrCheckbox
        :label="args.label"
        :disabled="args.disabled"
        :required="args.required"
        :hint="args.hint"
        :error-message="args.errorMessage"
        :name="args.name || 'name-error'"
        v-model="args.modelValue"
      />
  `,
    watch: {
      'args.modelValue': (newValue: boolean) => {
        if ((args as any).onChange) { (args as any).onChange(newValue) }
      },
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkboxWrapper = canvas.getByText('Checkbox 1').parentElement
    const messageEl = canvas.getByText('Erreur formulaire')

    expect(checkboxWrapper).toHaveClass('fr-checkbox-group')
    expect(checkboxWrapper).toHaveClass('fr-checkbox-group--error')
    expect(messageEl).toHaveClass('fr-message--info')
    expect(messageEl).toHaveClass('fr-error-text')
  },
}

export const CheckboxAvecSucces: Story = {
  args: {
    disabled: false,
    modelValue: false,
    label: 'Checkbox 1',
    hint: 'Description 1',
    validMessage: 'Formulaire valide',
    name: 'cb-success',
  } as any,
  render: (args) => ({
    components: { DsfrCheckbox },
    setup () {
      return { args }
    },
    template: `
      <DsfrCheckbox
        :label="args.label"
        :disabled="args.disabled"
        :hint="args.hint"
        :valid-message="args.validMessage"
        :name="args.name || 'name-success'"
        v-model="args.modelValue"
      />
  `,
    watch: {
      'args.modelValue': (newValue: boolean) => {
        if ((args as any).onChange) { (args as any).onChange(newValue) }
      },
    },
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkboxWrapper = canvas.getByText('Checkbox 1').parentElement
    const messageEl = canvas.getByText('Formulaire valide')

    expect(checkboxWrapper).toHaveClass('fr-checkbox-group')
    expect(checkboxWrapper).toHaveClass('fr-checkbox-group--valid')
    expect(messageEl).toHaveClass('fr-message--info')
    expect(messageEl).toHaveClass('fr-valid-text')
  },
}
