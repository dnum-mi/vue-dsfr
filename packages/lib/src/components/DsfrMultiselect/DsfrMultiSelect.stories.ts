import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { fn } from 'storybook/test'
import { ref, watch } from 'vue'

import DsfrMultiSelect from './DsfrMultiselect.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liste-deroulante)
 */
const meta = {
  component: DsfrMultiSelect,
  title: 'Composants/DsfrMultiSelect',
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
    options: {
      control: 'object',
      description:
        'Liste des options proposées par le `<select>` à lui passer sous forme de tableau de string ou de tableau d’objets avec une propriété `"text"` et une propriété `"value"`',
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
    'onUpdate:modelValue': fn(),
  },
} satisfies Meta<typeof DsfrMultiSelect>

export default meta
type Story = StoryObj<typeof meta>

const render = (args: any) => ({
  components: {
    DsfrMultiSelect,
  },
  setup () {
    const modelValue = ref(args.modelValue)
    watch(modelValue, (newVal) => {
      args['onUpdate:modelValue'](newVal)
    })
    return {
      args,
      modelValue,
    }
  },
})

export const ListeDeroulante: Story = {
  render,
  name: 'Liste déroulante',
  args: {
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
  },
  template: `
    <DsfrMultiSelect
      :required="args.required"
      :label="args.label"
      :options="args.options"
      :description="args.description"
      :success-message="args.successMessage"
      :error-message="args.errorMessage"
      :disabled="args.disabled"
      v-model="modelValue"
    />
  `,
}

export const ListeDeroulanteEnAnglais: Story = {
  render,
  name: 'Liste déroulante en anglais',
  args: {
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
  },
  template: `
    <DsfrMultiSelect
      :required="args.required"
      :label="args.label"
      :options="args.options"
      :description="args.description"
      :success-message="args.successMessage"
      :error-message="args.errorMessage"
      :disabled="args.disabled"
      :defaultUnselectedText="args.defaultUnselectedText"
      v-model="modelValue"
    />
  `,
}

export const ListeDeroulanteRequise: Story = {
  render,
  name: 'Liste déroulante requise',
  args: {
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
  },
  template: `
    <DsfrMultiSelect
      :required="args.required"
      :label="args.label"
      :options="args.options"
      :description="args.description"
      :success-message="args.successMessage"
      :error-message="args.errorMessage"
      :disabled="args.disabled"
      v-model="modelValue"
    />
  `,
}

export const ListeDeroulanteRequisePersonnalisee: Story = {
  render,
  name: 'Liste déroulante requise personnalisée',
  args: {
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
  },
  template: `
    <DsfrMultiSelect
      :required="args.required"
      :label="args.label"
      :options="args.options"
      :description="args.description"
      :success-message="args.successMessage"
      :error-message="args.errorMessage"
      :disabled="args.disabled"
      v-model="modelValue"
    >
    <template #required-tip>
      <em> (obligatoire)</em>
    </template>
  </DsfrMultiSelect>
  `,
}

export const ListeDeroulanteInactive: Story = {
  render,
  name: 'Liste déroulante inactive',
  args: {
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
  },
  template: `
  <div style="background-color: var(--grey-1000-50); padding: 1rem;">
    <DsfrMultiSelect
      :required="args.required"
      :label="args.label"
      :options="args.options"
      :description="args.description"
      :success-message="args.successMessage"
      :error-message="args.errorMessage"
      :disabled="args.disabled"
      v-model="modelValue"
    />
  </div>
  `,
}

export const ListeDeroulanteAvecOptionsInactives: Story = {
  render,
  name: 'Liste déroulante avec options inactives',
  args: {
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
  },
  template: `
    <div style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrMultiSelect
        :required="args.required"
        :label="args.label"
        :options="args.options"
        :description="args.description"
        :success-message="args.successMessage"
        :error-message="args.errorMessage"
        :disabled="args.disabled"
        v-model="modelValue"
      />
    </div>
    `,
}
