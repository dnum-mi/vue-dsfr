import { fn } from '@storybook/test'

import DsfrSelect from './DsfrSelect.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)
 */
export default {
  component: DsfrSelect,
  title: 'Composants/DsfrSelect',
  tags: ['formulaire'],
  argTypes: {
    selectId: {
      control: 'text',
      description: 'Valeur de l’attribut `id` de la balise `<select>`',
    },
    required: {
      control: 'boolean',
      description:
        'Option permettant de rendre ce champ de formulaire obligatoire et d’assigner au label un astérisque afin de rendre ce changement visible',
    },
    // label: {
    //   control: 'text',
    //   description: 'Label associé au `select`, donne le focus sur ce dernier au clic',
    // },
    options: {
      control: 'object',
      description:
        'Liste des options proposées par le `<select>` à lui passer sous forme de tableau de string ou de tableau d’objets avec une propriété `"text"` et une propriété `"value"`',
    },
    optionGroups: {
      control: 'object',
      description:
        'Liste des options groupées proposées par le `<select>` à lui passer sous forme de tableau d’objets (groupe) avec une propriété `"label"` et une propriété options qui est un tableau d‘options`',
    },
    description: {
      control: 'text',
      description: 'Description optionnelle du `select`',
    },
    successMessage: {
      control: 'text',
      description:
        'Message à afficher en situation de succès, sa présence change la couleur de la police d’écriture',
    },
    defaultUnselectedText: {
      control: 'text',
      description:
        'Texte de l’option sélectionnée par défaut si aucune option valide n’est sélectionnée',
    },
    errorMessage: {
      control: 'text',
      description:
        'Message à afficher en cas d’erreur, sa présence change la couleur de la police d’écriture',
    },
    modelValue: {
      control: 'text',
      description: 'Valeur présélectionnée',
    },
    disabled: {
      control: 'boolean',
      description: 'Option empêchant toute interaction avec le `select`',
    },
    'update:modelValue': {
      control: 'text',
      description: 'Événement émis lors du changement de l’option sélectionnée',
    },
    onChange: {
      action: fn(),
    },
  },
}

export const ListeDeroulante = (args) => ({
  components: {
    DsfrSelect,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <DsfrSelect
      :required="required"
      :label="label"
      :options="options"
      :description="description"
      :success-message="successMessage"
      :error-message="errorMessage"
      :disabled="disabled"
      v-model="modelValue"
    />
  `,

  watch: {
    modelValue (newVal) {
      this.onChange(newVal)
    },
  },
})

ListeDeroulante.args = {
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
  ],
  label: 'Selection d’options',
  description: 'Je suis une description, je décris, c’est ma raison d’être',
  successMessage: '',
  errorMessage: '',
  disabled: false,
  modelValue: 'Option 2',
  required: false,
}

export const ListeDeroulanteEnAnglais = (args) => ({
  components: {
    DsfrSelect,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <DsfrSelect
      :required="required"
      :label="label"
      :options="options"
      :description="description"
      :success-message="successMessage"
      :error-message="errorMessage"
      :disabled="disabled"
      :defaultUnselectedText="defaultUnselectedText"
      v-model="modelValue"
    />
  `,

  watch: {
    modelValue (newVal) {
      this.onChange(newVal)
    },
  },
})
ListeDeroulanteEnAnglais.args = {
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
  ],
  label: 'Those are the options:',
  description: 'I am a description',
  successMessage: '',
  errorMessage: '',
  defaultUnselectedText: 'Please select an option',
  disabled: false,
  required: false,
}

export const ListeDeroulanteRequise = (args) => ({
  components: {
    DsfrSelect,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <DsfrSelect
      :required="required"
      :label="label"
      :options="options"
      :description="description"
      :success-message="successMessage"
      :error-message="errorMessage"
      :disabled="disabled"
      v-model="modelValue"
    />
  `,

  watch: {
    modelValue (newVal) {
      this.onChange(newVal)
    },
  },
})

ListeDeroulanteRequise.args = {
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
  ],
  label: 'Selection d’options',
  description: 'Je suis une description, je décris, c’est ma raison d’être',
  successMessage: '',
  errorMessage: '',
  disabled: false,
  modelValue: 'Option 2',
  required: true,
}

export const ListeDeroulanteRequisePersonnalisee = (args) => ({
  components: {
    DsfrSelect,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <DsfrSelect
      :required="required"
      :label="label"
      :options="options"
      :description="description"
      :success-message="successMessage"
      :error-message="errorMessage"
      :disabled="disabled"
      v-model="modelValue"
    >
    <template #required-tip>
      <em> (obligatoire)</em>
    </template>
  </DsfrSelect>
  `,

  watch: {
    modelValue (newVal) {
      this.onChange(newVal)
    },
  },
})

ListeDeroulanteRequisePersonnalisee.args = {
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
  ],
  label: 'Selection d’options',
  description: 'Je suis une description, je décris, c’est ma raison d’être',
  successMessage: '',
  errorMessage: '',
  disabled: false,
  modelValue: 'Option 2',
  required: true,
}

export const ListeDeroulanteInactive = (args) => ({
  components: {
    DsfrSelect,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
    <DsfrSelect
      :required="required"
      :label="label"
      :options="options"
      :description="description"
      :success-message="successMessage"
      :error-message="errorMessage"
      :disabled="disabled"
      v-model="modelValue"
    />
  </div>
  `,

  watch: {
    modelValue (newVal) {
      this.onChange(newVal)
    },
  },
})
ListeDeroulanteInactive.args = {
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
  ],
  label: 'Selection d’options',
  description: 'Je suis une description, je décris, c’est ma raison d’être',
  successMessage: '',
  errorMessage: '',
  disabled: true,
  modelValue: 'Option 2',
  required: false,
}

export const ListeDeroulanteAvecOptionsInactives = (args) => ({
  components: {
    DsfrSelect,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrSelect
        :required="required"
        :label="label"
        :options="options"
        :description="description"
        :success-message="successMessage"
        :error-message="errorMessage"
        :disabled="disabled"
        v-model="modelValue"
      />
    </div>
    `,

  watch: {
    modelValue (newVal) {
      this.onChange(newVal)
    },
  },
})

ListeDeroulanteAvecOptionsInactives.args = {
  options: [
    {
      text: 'Option 1',
      value: 0,
    },
    {
      text: 'Option 2',
      value: 0,
      disabled: true,
    },
    {
      text: 'Option 3',
      value: 0,
      disabled: false,
    },
    {
      text: 'Option 4',
      value: 0,
    },
    {
      text: 'Option 5',
      value: 0,
      disabled: true,
    },
    {
      text: 'Option 6',
      value: 0,
    },
  ],
  label: 'Selection d’options',
  description: 'Je suis une description, je décris, c’est ma raison d’être',
  successMessage: '',
  errorMessage: '',
  disabled: false,
  modelValue: 'Option 2',
  required: false,
}

export const ListeDeroulanteAvecOptionsGroupees = (args) => ({
  components: {
    DsfrSelect,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrSelect
        :required="required"
        :label="label"
        :optionGroups="optionGroups"
        :description="description"
        :success-message="successMessage"
        :error-message="errorMessage"
        :disabled="disabled"
        v-model="modelValue"
      />
    </div>
    `,

  watch: {
    modelValue (newVal) {
      this.onChange(newVal)
    },
  },
})

ListeDeroulanteAvecOptionsGroupees.args = {
  optionGroups: [
    {
      label: 'groupe 1',
      options: [
        { value: 'Value 1', text: 'Option 1' },
        { value: 'Value 2', text: 'Option 2' },
      ],
    },
    {
      label: 'groupe 2',
      disabled: true,
      options: [
        { value: 'Value 3', text: 'Option 3' },
        { value: 'Value 4', text: 'Option 4' },
        { value: 'Value 5', text: 'Option 5' },
      ],
    },
  ],
  label: 'Selection d’options groupées',
  description: 'le groupe 1 est actif et le 2 est inactif, l‘option 1 est selectionnée par défaut',
  successMessage: '',
  errorMessage: '',
  disabled: false,
  modelValue: 'Value 1',
  required: false,
}
