import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { ref } from 'vue'

import DsfrMultiSelect from './DsfrMultiselect.vue'

const meta = {
  component: DsfrMultiSelect,
  title: 'Composants/DsfrMultiSelect',
  tags: ['formulaire'],
  argTypes: {
    label: {
      control: 'text',
      description: '**Label** du composant',
    },
    modelValue: {
      control: 'object',
      description: '**Valeurs** sélectionnées (v-model)',
    },
    options: {
      control: 'object',
      description: '**Liste des options** du composant',
    },
    hint: {
      control: 'text',
      description: 'Texte d\'aide optionnel',
    },
    legend: {
      control: 'text',
      description: 'Légende du groupe de cases à cocher',
    },
    errorMessage: {
      control: 'text',
      description: 'Message d\'erreur à afficher',
    },
    successMessage: {
      control: 'text',
      description: 'Message de succès à afficher',
    },
    selectAll: {
      control: 'boolean',
      description: 'Affiche l\'option « Tout sélectionner »',
    },
    search: {
      control: 'boolean',
      description: 'Active la recherche dans les options',
    },
    labelVisible: {
      control: 'boolean',
      description: 'Affiche le label',
    },
  },
} satisfies Meta<typeof DsfrMultiSelect>

export default meta
type Story = StoryObj<typeof meta>

export const SélectionMultiple: Story = {
  name: 'Sélection multiple',
  args: {
    label: 'Sélection d\'options',
    modelValue: ['0', '1'],
    options: [
      { label: 'Option 1', id: '0' },
      { label: 'Option 2', id: '1' },
      { label: 'Option 3', id: '2' },
      { label: 'Option 4', id: '3' },
      { label: 'Option 5', id: '4' },
      { label: 'Option 6', id: '5' },
    ],
    hint: 'Je suis une description, je décris, c\'est ma raison d\'être',
    errorMessage: '',
    successMessage: '',
    selectAll: false,
    search: false,
    labelVisible: true,
  },
  render: (args) => ({
    components: { DsfrMultiSelect },
    setup () {
      const modelValue = ref(args.modelValue)
      return {
        args,
        modelValue,
      }
    },
    template: `
      <DsfrMultiSelect
        :label="args.label"
        :options="args.options"
        :hint="args.hint"
        :error-message="args.errorMessage"
        :success-message="args.successMessage"
        :select-all="args.selectAll"
        :search="args.search"
        :label-visible="args.labelVisible"
        v-model="modelValue"
      />
    `,
  }),
}

export const AvecSearchEtSelectAll: Story = {
  name: 'Avec recherche et « Tout sélectionner »',
  args: {
    label: 'Sélection d\'options',
    modelValue: [],
    options: [
      { label: 'Option 1', id: '0' },
      { label: 'Option 2', id: '1' },
      { label: 'Option 3', id: '2' },
      { label: 'Option 4', id: '3' },
      { label: 'Option 5', id: '4' },
      { label: 'Option 6', id: '5' },
    ],
    hint: 'Vous pouvez rechercher et sélectionner/désélectionner toutes les options',
    errorMessage: '',
    successMessage: '',
    selectAll: true,
    search: true,
    labelVisible: true,
  },
  render: (args) => ({
    components: { DsfrMultiSelect },
    setup () {
      const modelValue = ref(args.modelValue)
      return {
        args,
        modelValue,
      }
    },
    template: `
      <DsfrMultiSelect
        :label="args.label"
        :options="args.options"
        :hint="args.hint"
        :error-message="args.errorMessage"
        :success-message="args.successMessage"
        :select-all="args.selectAll"
        :search="args.search"
        :label-visible="args.labelVisible"
        v-model="modelValue"
      />
    `,
  }),
}

export const AvecMessageDeSuccès: Story = {
  name: 'Avec message de succès',
  args: {
    label: 'Sélection d\'options',
    modelValue: ['0', '1'],
    options: [
      { label: 'Option 1', id: '0' },
      { label: 'Option 2', id: '1' },
      { label: 'Option 3', id: '2' },
      { label: 'Option 4', id: '3' },
      { label: 'Option 5', id: '4' },
      { label: 'Option 6', id: '5' },
    ],
    hint: 'Vos choix ont été enregistrés',
    errorMessage: '',
    successMessage: 'Validation réussie',
    selectAll: false,
    search: false,
    labelVisible: true,
  },
  render: (args) => ({
    components: { DsfrMultiSelect },
    setup () {
      const modelValue = ref(args.modelValue)
      return {
        args,
        modelValue,
      }
    },
    template: `
      <DsfrMultiSelect
        :label="args.label"
        :options="args.options"
        :hint="args.hint"
        :error-message="args.errorMessage"
        :success-message="args.successMessage"
        :select-all="args.selectAll"
        :search="args.search"
        :label-visible="args.labelVisible"
        v-model="modelValue"
      />
    `,
  }),
}

export const AvecMessageDErreur: Story = {
  name: 'Avec message d\'erreur',
  args: {
    label: 'Sélection d\'options',
    modelValue: [],
    options: [
      { label: 'Option 1', id: '0' },
      { label: 'Option 2', id: '1' },
      { label: 'Option 3', id: '2' },
      { label: 'Option 4', id: '3' },
      { label: 'Option 5', id: '4' },
      { label: 'Option 6', id: '5' },
    ],
    hint: 'Veuillez sélectionner au moins une option',
    errorMessage: 'Vous devez sélectionner au moins une option',
    successMessage: '',
    selectAll: false,
    search: false,
    labelVisible: true,
  },
  render: (args) => ({
    components: { DsfrMultiSelect },
    setup () {
      const modelValue = ref(args.modelValue)
      return {
        args,
        modelValue,
      }
    },
    template: `
      <DsfrMultiSelect
        :label="args.label"
        :options="args.options"
        :hint="args.hint"
        :error-message="args.errorMessage"
        :success-message="args.successMessage"
        :select-all="args.selectAll"
        :search="args.search"
        :label-visible="args.labelVisible"
        v-model="modelValue"
      />
    `,
  }),
}
