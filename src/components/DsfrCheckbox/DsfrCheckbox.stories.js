import DsfrCheckbox from './DsfrCheckbox.vue'

export default {
  component: DsfrCheckbox,
  title: 'Composants/Case à cocher/Case à cocher - DsfrCheckbox',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    label: {
      control: 'text',
      description: 'Label de la case à cocher',
    },
    name: {
      control: 'text',
      description: 'Valeur de l’attribut `name` de la case à cocher',
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
    checked: {
      control: 'boolean',
      description: 'Indique si la case à cocher est cochée',
    },
    errorMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas d’erreur',
    },
    validMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas de succès',
    },
    onChange: { action: 'changed' },
  },
}

export const Checkbox = (args) => ({
  components: { DsfrCheckbox },
  data () {
    return { ...args }
  },
  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrCheckbox
        :label="label"
        :disabled="disabled"
        :required="required"
        :modelValue="checked"
        :hint="hint"
        :name="name || 'name1'"
        @update:modelValue="updateChecked($event)"
      />
    </div>
  `,
  methods: {
    updateChecked (val) {
      this.onChange(val)
      this.checked = val
    },
  },
})
Checkbox.args = {
  disabled: false,
  dark: false,
  checked: false,
  required: false,
  label: 'Checkbox 1',
  name: 'name1',
  value: false,
  hint: 'Description 1',
}

export const CheckboxAvecErreur = (args) => ({
  components: { DsfrCheckbox },
  data () {
    return args
  },
  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrCheckbox
        :label="label"
        :disabled="disabled"
        :modelValue="checked"
        :hint="hint"
        @update:modelValue="updateChecked($event)"
        :error-message="errorMessage"
      />
    </div>
  `,
  methods: {
    updateChecked (val) {
      this.onChange(val)
      this.checked = val
    },
  },
})
CheckboxAvecErreur.args = {
  disabled: false,
  dark: false,
  checked: false,
  label: 'Checkbox 1',
  value: false,
  hint: 'Description 1',
  errorMessage: 'Erreur formulaire',
}

export const CheckboxAvecSucces = (args) => ({
  components: { DsfrCheckbox },
  data () {
    return args
  },
  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrCheckbox
        :label="label"
        :disabled="disabled"
        :modelValue="checked"
        :hint="hint"
        @update:modelValue="updateChecked($event)"
        :valid-message="validMessage"
      />
    </div>
  `,
  methods: {
    updateChecked (val) {
      this.onChange(val)
      this.checked = val
    },
  },
})

CheckboxAvecSucces.args = {
  disabled: false,
  dark: false,
  checked: false,
  label: 'Checkbox 1',
  value: false,
  hint: 'Description 1',
  validMessage: 'Formulaire valide',
}
