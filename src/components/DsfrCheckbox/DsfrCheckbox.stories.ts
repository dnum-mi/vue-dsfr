import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, fn, within } from '@storybook/test'

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

export const Checkbox = (args) => ({
  components: { DsfrCheckbox },
  data () {
    return { ...args }
  },
  template: `
      <DsfrCheckbox
        :label="label"
        :disabled="disabled"
        :required="required"
        :small="small"
        :hint="hint"
        :value="value"
        :name="name || 'name1'"
        v-model="modelValue"
      />
      {{ modelValue }}
  `,
  watch: {
    modelValue (newValue) {
      this.onChange(newValue)
    },
  },
})
Checkbox.args = {
  disabled: false,
  modelValue: false,
  required: false,
  small: false,
  label: 'Checkbox 1',
  name: 'name1',
  value: 'name1',
  hint: 'Description 1',
}
Checkbox.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const label = canvas.getByText(Checkbox.args.label)
  expect(label).toHaveClass('fr-label')
  const input = canvas.getByRole('checkbox')
  expect(input.parentElement).toHaveClass('fr-checkbox-group')
  expect(input).not.toHaveAttribute('required')
  expect(input).not.toBeChecked()
  label.click()
  expect(input).toBeChecked()
  label.click()
}

export const CheckboxRequis = (args) => ({
  components: { DsfrCheckbox },
  data () {
    return { ...args }
  },
  template: `
    <component :is="'style'">
      .required {
        color: #f60700;
      }
    </component>
    <DsfrCheckbox
      :label="label"
      :disabled="disabled"
      :required="required"
      :hint="hint"
      :name="name || 'name1'"
      v-model="modelValue"
    />
  `,
  watch: {
    modelValue (newValue) {
      this.onChange(newValue)
    },
  },
})
CheckboxRequis.args = {
  disabled: false,
  modelValue: false,
  required: true,
  label: 'En cochant vous acceptez...',
  name: 'name1',
  hint: 'Description 1',
}
CheckboxRequis.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const label = canvas.getByText(CheckboxRequis.args.label)
  expect(label).toHaveClass('fr-label')
  const input = canvas.getByRole('checkbox')
  expect(input).toHaveAttribute('required', '')
}

export const CheckboxRequisPersonnalise = (args) => ({
  components: { DsfrCheckbox },
  data () {
    return { ...args }
  },
  template: `
    <component :is="'style'">
      .required {
        color: #f60700;
      }
    </component>
    <DsfrCheckbox
      :label="label"
      :disabled="disabled"
      :required="required"
      :hint="hint"
      :name="name || 'name1'"
      v-model="modelValue"
    >
      <template #required-tip>
        <em>&nbsp;(obligatoire)</em>
      </template>
    </DsfrCheckbox>
  `,
  watch: {
    modelValue (newValue) {
      this.onChange(newValue)
    },
  },
})
CheckboxRequisPersonnalise.args = {
  disabled: false,
  modelValue: false,
  required: true,
  label: 'En cochant vous acceptez...',
  name: 'name1',
  hint: 'Description 1',
}
CheckboxRequisPersonnalise.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const label = canvas.getByText(CheckboxRequisPersonnalise.args.label)
  const em = canvas.getByText('(obligatoire)')
  expect(em).toHaveProperty('tagName', 'EM')
  expect(label).toHaveClass('fr-label')
  const input = canvas.getByRole('checkbox')
  expect(input).toHaveAttribute('required', '')
}

export const CheckboxAvecErreur = (args) => ({
  components: { DsfrCheckbox },
  data () {
    return args
  },
  template: `
      <DsfrCheckbox
        :label="label"
        :disabled="disabled"
        :required="required"
        :hint="hint"
        :error-message="errorMessage"
        :name="name || 'name-error'"
        v-model="modelValue"
      />
  `,
  watch: {
    modelValue (newValue) {
      this.onChange(newValue)
    },
  },
})
CheckboxAvecErreur.args = {
  disabled: false,
  modelValue: false,
  required: false,
  label: 'Checkbox 1',
  hint: 'Description 1',
  errorMessage: 'Erreur formulaire',
  name: 'cb-error',
}
CheckboxAvecErreur.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const checkboxWrapper = canvas.getByText(CheckboxAvecErreur.args.label).parentElement
  const messageEl = canvas.getByText(CheckboxAvecErreur.args.errorMessage)

  expect(checkboxWrapper).toHaveClass('fr-checkbox-group')
  expect(checkboxWrapper).toHaveClass('fr-checkbox-group--error')
  expect(messageEl).toHaveClass('fr-message--info')
  expect(messageEl).toHaveClass('fr-error-text')
}

export const CheckboxAvecSucces = (args) => ({
  components: { DsfrCheckbox },
  data () {
    return args
  },
  template: `
      <DsfrCheckbox
        :label="label"
        :disabled="disabled"
        :hint="hint"
        :valid-message="validMessage"
        :name="name || 'name-success'"
        v-model="modelValue"
      />
  `,
  watch: {
    modelValue (newValue) {
      this.onChange(newValue)
    },
  },
})
CheckboxAvecSucces.args = {
  disabled: false,
  modelValue: false,
  label: 'Checkbox 1',
  hint: 'Description 1',
  validMessage: 'Formulaire valide',
  name: 'cb-success',
}
CheckboxAvecSucces.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const checkboxWrapper = canvas.getByText(CheckboxAvecSucces.args.label).parentElement
  const messageEl = canvas.getByText(CheckboxAvecSucces.args.validMessage)

  expect(checkboxWrapper).toHaveClass('fr-checkbox-group')
  expect(checkboxWrapper).toHaveClass('fr-checkbox-group--valid')
  expect(messageEl).toHaveClass('fr-message--info')
  expect(messageEl).toHaveClass('fr-valid-text')
}
