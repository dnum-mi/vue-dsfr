import { expect, fn, within } from '@storybook/test'

import DsfrCheckboxSet from './DsfrCheckboxSet.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/case-a-cocher)
 */
export default {
  component: DsfrCheckboxSet,
  title: 'Composants/DsfrCheckboxSet',
  argTypes: {
    disabled: {
      control: 'boolean',
      description:
        'Indique si l’ensemble des checkboxes doivent être désactivées (`true`) ou non (`false`, défaut)',
    },
    errorMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas d’erreur',
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
    //   description: 'Titre de l’ensemble (Set) des checkboxes',
    // },
    options: {
      control: 'object',
      description:
        'Tableau de `string` (la valeur `value` de la checkbox sera identique au `label`) ou d’objets contenant les props à passer à chaque composant DsfrCheckbox, sauf `modelValue` qui sera calculée à partir de `modelValue` du DsfrCheckboxSet.',
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
    onChange: {
      action: fn(),
    },
  },
}

export const CheckboxSet = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
    <DsfrCheckboxSet
      :legend="legend"
      v-model="modelValue"
      :options="options"
      :inline="inline"
      :disabled="disabled"
      :small="small"
      :required="required"
      :errorMessage="errorMessage"
      :validMessage="validMessage"
    />
  `,
  watch: {
    modelValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSet.args = {
  legend: 'Légende des champs',
  disabled: false,
  inline: false,
  required: false,
  small: false,
  errorMessage: '',
  validMessage: '',
  modelValue: ['name1'],
  options: [
    {
      label: 'Valeur 1',
      id: 'name1',
      name: 'name1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      id: 'name2',
      name: 'name2',
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      id: 'name3',
      name: 'name3',
      hint: 'Description 3',
    },
  ],
}
CheckboxSet.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const checkboxes = canvas.getAllByRole('checkbox')
  const firstCheckbox = checkboxes.at(0)
  expect(firstCheckbox).toHaveAttribute('checked')
  expect(firstCheckbox).toHaveProperty('checked', true)
  expect(checkboxes.at(1)).not.toHaveAttribute('checked')
  expect(checkboxes.at(2)).not.toHaveAttribute('checked')
}

export const CheckboxSetRequis = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
    <DsfrCheckboxSet
      :legend="legend"
      v-model="modelValue"
      :options="options"
      :inline="inline"
      :disabled="disabled"
      :required="required"
      :errorMessage="errorMessage"
      :validMessage="validMessage"
    />
  `,
  watch: {
    modelValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSetRequis.args = {
  legend: 'Veuillez choisir au moins une des propositions suivantes',
  disabled: false,
  inline: false,
  required: true,
  errorMessage: '',
  validMessage: '',
  modelValue: ['name1'],
  options: [
    {
      label: 'Valeur 1',
      id: 'name1',
      name: 'name1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      id: 'name2',
      name: 'name2',
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      id: 'name3',
      name: 'name3',
      hint: 'Description 3',
    },
  ],
}
CheckboxSetRequis.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const checkboxes = canvas.getAllByRole('checkbox')
  const firstCheckbox = checkboxes.at(0)
  expect(firstCheckbox).toHaveAttribute('checked')
  expect(firstCheckbox).toHaveProperty('checked', true)
}

export const CheckboxSetRequisPersonnalise = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
    <DsfrCheckboxSet
      :legend="legend"
      v-model="modelValue"
      :options="options"
      :inline="inline"
      :disabled="disabled"
      :required="required"
      :errorMessage="errorMessage"
      :validMessage="validMessage"
    >
      <template #required-tip>
        <em> {{requiredText}}</em>
      </template>
    </DsfrCheckboxSet>
  `,
  watch: {
    modelValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSetRequisPersonnalise.args = {
  legend: 'Label de l’ensemble des champs',
  disabled: false,
  inline: false,
  required: true,
  errorMessage: '',
  validMessage: '',
  requiredText: '(en choisir au moins un)',
  modelValue: ['name1'],
  options: [
    {
      label: 'Valeur 1',
      id: 'name1',
      name: 'name1',
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      id: 'name2',
      name: 'name2',
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      id: 'name3',
      name: 'name3',
      hint: 'Description 3',
    },
  ],
}
CheckboxSetRequisPersonnalise.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const checkboxes = canvas.getAllByRole('checkbox')
  const requiredEm = canvas.getByText(CheckboxSetRequisPersonnalise.args.requiredText)
  const firstCheckbox = checkboxes.at(0)
  expect(requiredEm).toHaveProperty('tagName', 'EM')
  expect(firstCheckbox).toHaveAttribute('checked')
  expect(firstCheckbox).toHaveProperty('checked', true)
}

export const CheckboxSetAvecErreur = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
    <DsfrCheckboxSet
      v-model="modelValue"
      :legend="legend"
      :required="required"
      :error-message="errorMessage"
      :options="options"
      :inline="inline"
    />
  `,
  watch: {
    modelValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSetAvecErreur.args = {
  legend: 'Légende des champs',
  disabled: false,
  inline: false,
  required: false,
  errorMessage: 'Message d\'erreur',
  modelValue: ['name1'],
  options: [
    {
      label: 'Valeur 1',
      id: 'name1',
      name: 'name1',
      checked: false,
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      id: 'name2',
      name: 'name2',
      checked: false,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      id: 'name3',
      name: 'name3',
      hint: 'Description 3',
      checked: false,
    },
  ],
}
CheckboxSetAvecErreur.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const checkboxes = canvas.getAllByRole('checkbox')
  const firstCheckbox = checkboxes.at(0)
  const legend = canvas.getByText(CheckboxSetAvecErreur.args.legend)
  expect(legend).toHaveClass('fr-fieldset__legend')

  const checkboxWrapper = firstCheckbox?.parentElement
  expect(checkboxWrapper).toHaveClass('fr-checkbox-group')

  const fieldsetElement = checkboxWrapper?.parentElement
  expect(fieldsetElement).toHaveClass('fr-fieldset__element')
  const fieldset = fieldsetElement?.parentElement
  expect(fieldset).toHaveClass('fr-fieldset')
  expect(fieldset).toHaveClass('fr-fieldset--error')

  const errorEl = canvas.getByText(CheckboxSetAvecErreur.args.errorMessage).parentElement
  expect(errorEl).toHaveClass('fr-error-text')
  expect(errorEl).toHaveClass('fr-message--info')

  expect(firstCheckbox).toHaveAttribute('checked')
  expect(firstCheckbox).toHaveProperty('checked', true)
}

export const CheckboxSetAvecSucces = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
    <DsfrCheckboxSet
      :legend="legend"
      v-model="modelValue"
      :valid-message="validMessage"
      :options="options"
      :inline="inline"
    />
  `,
  watch: {
    modelValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSetAvecSucces.args = {
  legend: 'Légende des champs',
  modelValue: ['name1'],
  inline: false,
  validMessage: 'Message de succès',
  options: [
    {
      label: 'Valeur 1',
      id: 'name1',
      name: 'name1',
      checked: false,
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      id: 'name2',
      name: 'name2',
      checked: false,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      id: 'name3',
      name: 'name3',
      hint: 'Description 3',
      checked: false,
    },
  ],
}
CheckboxSetAvecSucces.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const checkboxes = canvas.getAllByRole('checkbox')
  const firstCheckbox = checkboxes.at(0)
  const legend = canvas.getByText(CheckboxSetAvecSucces.args.legend)
  expect(legend).toHaveClass('fr-fieldset__legend')

  const checkboxWrapper = firstCheckbox?.parentElement
  expect(checkboxWrapper).toHaveClass('fr-checkbox-group')

  const fieldsetElement = checkboxWrapper?.parentElement
  expect(fieldsetElement).toHaveClass('fr-fieldset__element')
  const fieldset = fieldsetElement?.parentElement
  expect(fieldset).toHaveClass('fr-fieldset')
  expect(fieldset).toHaveClass('fr-fieldset--valid')

  const validEl = canvas.getByText(CheckboxSetAvecSucces.args.validMessage).parentElement
  expect(validEl).toHaveClass('fr-valid-text')
  expect(validEl).toHaveClass('fr-message--info')

  expect(firstCheckbox).toHaveAttribute('checked')
  expect(firstCheckbox).toHaveProperty('checked', true)
}

export const CheckboxSetInline = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
    <DsfrCheckboxSet
      :legend="legend"
      v-model="modelValue"
      :error-message="errorMessage"
      :valid-message="validMessage"
      :options="options"
      :inline="inline"
    />
  `,
  watch: {
    modelValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSetInline.args = {
  legend: 'Légende des champs en ligne',
  modelValue: ['name1'],
  inline: true,
  errorMessage: '',
  validMessage: '',
  options: [
    {
      label: 'Valeur 1',
      id: 'name1',
      name: 'name1',
      checked: false,
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      id: 'name2',
      name: 'name2',
      checked: false,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      id: 'name3',
      name: 'name3',
      hint: 'Description 3',
      checked: false,
    },
  ],
}
CheckboxSetInline.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const checkboxes = canvas.getAllByRole('checkbox')
  const firstCheckbox = checkboxes.at(0)

  const checkboxWrapper = firstCheckbox?.parentElement
  expect(checkboxWrapper).toHaveClass('fr-checkbox-group')

  const fieldsetElement = checkboxWrapper?.parentElement
  expect(fieldsetElement).toHaveClass('fr-fieldset__element--inline')
}

export const CheckboxSetInlineAvecErreur = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
    <DsfrCheckboxSet
      :legend="legend"
      v-model="modelValue"
      :error-message="errorMessage"
      :valid-message="validMessage"
      :options="options"
      :inline="inline"
    />
  `,
  watch: {
    modelValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSetInlineAvecErreur.args = {
  legend: 'Légende des champs en ligne',
  modelValue: ['name1'],
  inline: true,
  errorMessage: 'Message d\'erreur',
  validMessage: '',
  options: [
    {
      label: 'Valeur 1',
      id: 'name1',
      name: 'name1',
      checked: false,
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      id: 'name2',
      name: 'name2',
      checked: false,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      id: 'name3',
      name: 'name3',
      hint: 'Description 3',
      checked: false,
    },
  ],
}

export const CheckboxSetInlineAvecSucces = (args) => ({
  components: { DsfrCheckboxSet },
  data () {
    return args
  },
  template: `
    <DsfrCheckboxSet
      :legend="legend"
      v-model="modelValue"
      :error-message="errorMessage"
      :valid-message="validMessage"
      :options="options"
      :inline="inline"
    />
  `,
  watch: {
    modelValue (val) {
      this.onChange(val)
    },
  },
})
CheckboxSetInlineAvecSucces.args = {
  legend: 'Légende des champs en ligne',
  modelValue: ['name1'],
  inline: true,
  errorMessage: '',
  validMessage: 'Message de succès',
  options: [
    {
      label: 'Valeur 1',
      id: 'name1',
      name: 'name1',
      checked: false,
      hint: 'Description 1',
    },
    {
      label: 'Valeur 2',
      id: 'name2',
      name: 'name2',
      checked: false,
      hint: 'Description 2',
    },
    {
      label: 'Valeur 3',
      id: 'name3',
      name: 'name3',
      hint: 'Description 3',
      checked: false,
    },
  ],
}
