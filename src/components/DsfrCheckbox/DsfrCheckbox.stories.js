import DsfrCheckbox from './DsfrCheckbox.vue'

export default {
  component: DsfrCheckbox,
  title: 'Composants/Case à cocher/Case à cocher - DsfrCheckbox',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    id: {
      control: 'text',
      description: '(optionnel) Valeur de l’attribut `id` de la checkbox. Par défaut, un id pseudo-aléatoire sera donné.',
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
    errorMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas d’erreur',
    },
    validMessage: {
      control: 'text',
      description: 'Texte du message à afficher en cas de succès',
    },
    modelValue: {
      control: 'boolean',
      description: 'Valeur de la case à cocher : `true` si cochée, `false` sinon',
    },
    'update:modelValue': {
      description: 'Événement émis lors du changement de l’état coché (`true`) ou non (`false`)',
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
    modelValue (newValue, oldValue) {
      this.onChange(newValue)
    },
  },
})
Checkbox.args = {
  disabled: false,
  dark: false,
  modelValue: false,
  required: false,
  label: 'Checkbox 1',
  name: 'name1',
  hint: 'Description 1',
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
        :hint="hint"
        :error-message="errorMessage"
        v-model="modelValue"
      />
  `,
  watch: {
    modelValue (newValue, oldValue) {
      this.onChange(newValue)
    },
  },
})
CheckboxAvecErreur.args = {
  disabled: false,
  dark: false,
  modelValue: false,
  label: 'Checkbox 1',
  hint: 'Description 1',
  errorMessage: 'Erreur formulaire',
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
        v-model="modelValue"
      />
  `,
  watch: {
    modelValue (newValue, oldValue) {
      this.onChange(newValue)
    },
  },
})

CheckboxAvecSucces.args = {
  disabled: false,
  dark: false,
  modelValue: false,
  label: 'Checkbox 1',
  hint: 'Description 1',
  validMessage: 'Formulaire valide',
}
