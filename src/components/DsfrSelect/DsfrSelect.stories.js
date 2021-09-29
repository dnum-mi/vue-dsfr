import DsfrSelect from './DsfrSelect.vue'

export default {
  component: DsfrSelect,
  title: 'Basic/Liste déroulante - Select',
  argTypes: {
    dark: { control: 'boolean' },
    label: {
      control: 'text',
      description: 'Label associé au select, un texte d\'appoint permettant le focus en cas de clic',
    },
    options: {
      control: 'array',
      description: 'Options sélectionnables par le select à lui passer sous forme de tableau',
    },
    description: {
      control: 'text',
      description: 'Description optionnelle du select',
    },
    successMessage: {
      control: 'text',
      description: 'Message à afficher en situation de succès, sa présence change la couleur de la police d\'écriture',
    },
    errorMessage: {
      control: 'text',
      description: 'Message à afficher en cas d\'erreur, sa présence change la couleur de la police d\'écriture',
    },
    modelValue: {
      control: 'text',
      description: 'Valeur présélectionnée',
    },
    disabled: {
      control: 'boolean',
      description: 'Cette option empêche toute interaction avec le select',
    },
  },
}

export const Select = (args) => ({
  components: {
    DsfrSelect,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrSelect
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
})

Select.args = {
  dark: false,
  options: [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
  ],
  label: 'Selection d\'options',
  description: 'Je suis une description, je décris, c\'est ma raison d\'être',
  successMessage: '',
  errorMessage: '',
  disabled: false,
  modelValue: undefined,
}
