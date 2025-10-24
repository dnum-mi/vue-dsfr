import type { Meta, StoryObj } from '@storybook/vue3'

import { fn } from '@storybook/test'
import { ref, watch } from 'vue'

import DsfrInput from './DsfrInput.vue'
import DsfrInputGroup from './DsfrInputGroup.vue'

const meta = {
  component: DsfrInputGroup,
  title: 'Composants/DsfrInputGroup',
  tags: ['autodocs'],
  argTypes: {
    // Props de DsfrInputGroup
    label: { control: 'text' },
    hint: { control: 'text' },
    labelVisible: { control: 'boolean' },
    modelValue: { control: 'text' },
    errorMessage: { control: 'text' },
    validMessage: { control: 'text' },
    // Action
    'onUpdate:modelValue': {
      action: fn(),
    },
  },
} satisfies Meta<typeof DsfrInputGroup>

export default meta

type Story = StoryObj<typeof meta>

export const GroupeDeChampAvecPersonnalisation: Story = {
  name: 'Champ avec personnalisation',
  argTypes: {
    // Props de DsfrInput passées via le slot
    placeholder: { control: 'text' },
    readonly: { control: 'boolean' },
    type: { control: 'text' },
  },
  render: args => ({
    components: { DsfrInput, DsfrInputGroup },
    setup () {
      const modelValue = ref(args.modelValue)
      watch(() => args.modelValue, val => (modelValue.value = val))
      return { args, modelValue }
    },
    template: `
      <DsfrInputGroup
        :error-message="args.errorMessage"
        :valid-message="args.validMessage"
      >
        <DsfrInput
          :placeholder="args.placeholder"
          :readonly="args.readonly"
          :model-value="modelValue"
          :label="args.label"
          :type="args.type"
          :hint="args.hint"
          :label-visible="args.labelVisible"
          @update:model-value="modelValue = $event; args['onUpdate:modelValue']($event)"
        />
      </DsfrInputGroup>
    `,
  }),
  args: {
    // DsfrInputGroup props
    label: 'Label champ de saisie',
    labelVisible: true,
    modelValue: '',
    validMessage: '',
    errorMessage: '',
    hint: 'Texte d’indice du champ',
    // DsfrInput props
    type: 'text',
    placeholder: 'Veuillez saisir du texte',
    readonly: false,
  },
}

const renderSimple = (args: any) => ({
  components: { DsfrInputGroup },
  setup () {
    const modelValue = ref(args.modelValue)
    watch(() => args.modelValue, val => (modelValue.value = val))
    return { args, modelValue }
  },
  template: `
    <DsfrInputGroup
      :error-message="args.errorMessage"
      :valid-message="args.validMessage"
      v-model="modelValue"
      :type="args.type"
      :label="args.label"
      :hint="args.hint"
      :label-visible="args.labelVisible"
      :placeholder="args.placeholder"
      @update:model-value="args['onUpdate:modelValue']($event)"
    />
  `,
})

export const ChampEnErreur: Story = {
  name: 'Champ en erreur',
  render: renderSimple,
  argTypes: {
    placeholder: { control: 'text' },
    type: { control: 'text' },
  },
  args: {
    label: 'Label champ de saisie',
    labelVisible: true,
    placeholder: 'Placeholder',
    modelValue: '',
    errorMessage: 'Message d’erreur',
    hint: 'Texte d’indice du champ',
    type: 'text',
  },
}

export const ChampValide: Story = {
  name: 'Champ valide',
  render: renderSimple,
  argTypes: {
    placeholder: { control: 'text' },
    type: { control: 'text' },
  },
  args: {
    label: 'Label champ de saisie',
    labelVisible: true,
    placeholder: 'Placeholder',
    modelValue: '',
    validMessage: 'Message de validation',
    errorMessage: '',
    hint: 'Texte d’indice du champ',
    type: 'text',
  },
}
