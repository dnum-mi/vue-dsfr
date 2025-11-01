import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, fn, userEvent, within } from 'storybook/test'
import { ref } from 'vue'

import DsfrAlert from '../DsfrAlert/DsfrAlert.vue'
import DsfrButton from '../DsfrButton/DsfrButton.vue'
import VIcon from '../VIcon/VIcon.vue'

import DsfrInput from './DsfrInput.vue'

const meta = {
  component: DsfrInput,
  title: 'Composants/DsfrInput',
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: '(optionnel) Valeur de l’attribut `id` du champ de saisie. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    label: {
      control: 'text',
      description: 'Label du champ de saisie',
    },
    type: {
      control: 'text',
      description: 'Type du champ de saisie cf. [MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input)',
    },
    hint: {
      control: 'text',
      description: 'Indice associé au champ de saisie',
    },
    labelVisible: {
      control: 'boolean',
      description: 'Indique si le label doit être visible (`true`) ou non (`false`, défaut)',
    },
    placeholder: {
      control: 'text',
      description: 'Contenu du champ à afficher lorsqu’il n’est pas rempli par l’utilisateur.',
    },
    modelValue: {
      control: 'text',
      description: 'Valeur du champ de saisie',
    },
    disabled: {
      control: 'boolean',
      description: 'Permet de désactiver le champ, la saisie sera impossible.',
    },
    isValid: {
      control: 'boolean',
      description: 'Signale si le champ est en état de succès (`true`) ou non (`false`, par défaut)',
    },
    isInvalid: {
      control: 'boolean',
      description: 'Signale si le champ est en état d’erreur (`true`) ou non (`false`, par défaut)',
    },
    isTextarea: {
      control: 'boolean',
      description: 'Signale si le champ est de type textarea (`true`) ou non (`false`, par défaut)',
    },
    'update:modelValue': {
      action: 'update:modelValue',
    },
  },
} satisfies Meta<typeof DsfrInput>

export default meta
type Story = StoryObj<typeof meta>

const baseArgs = {
  label: 'Label pour le champ de saisie',
  labelVisible: true,
  hint: 'Texte de description additionnel',
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
  isValid: false,
  isInvalid: false,
  'onUpdate:modelValue': fn(),
}

const render = (args) => ({
  components: { DsfrInput },
  setup () {
    return { args }
  },
  template: `
    <DsfrInput
      v-bind="args"
      :model-value="args.modelValue"
      @update:model-value="args.modelValue = $event; args['onUpdate:modelValue']"
    />
  `,
})

export const ChampSimple: Story = {
  render,
  name: 'Champ simple',
  args: {
    ...baseArgs,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByText(args.label)
    await userEvent.type(input, 'test', { delay: 100 })
    expect(args['onUpdate:modelValue']).toHaveBeenCalledTimes(4)
  },
}

export const ChampSansLabelVisible: Story = {
  ...ChampSimple,
  name: 'Champ sans label visible',
  args: {
    ...baseArgs,
    labelVisible: false,
  },
}

export const ChampRequis: Story = {
  ...ChampSimple,
  name: 'Champ requis',
  args: {
    ...baseArgs,
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox')
    expect(input).toBeRequired()
  },
}

export const ChampAvecLabelPersonnalise: Story = {
  name: 'Champ avec label personnalisé',
  render: (args) => ({
    components: { DsfrAlert, DsfrInput, VIcon },
    setup () {
      const show = ref(false)
      return { args, show }
    },
    template: `
      <DsfrInput v-bind="args">
        <template #label>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span>{{ args.label }}<span style="color: red;">&nbsp;*</span></span>
            <button
              @mouseover="show = true"
              @mouseout="show = false"
              @focus="show = true"
              @blur="show = false"
              style="background: none; border: none; padding: 0; height: 1.5rem; width: 1.5rem; position: relative;"
            >
              <VIcon name="ri-question-fill" />
              <DsfrAlert
                type="info"
                :show="show"
                style="position: absolute; top: 1.5rem; right: -1rem; width: 250px; z-index: 1;"
                description="Indice contextuel"
              />
            </button>
          </div>
        </template>
      </DsfrInput>
    `,
  }),
  args: {
    ...baseArgs,
    required: true,
  },
}

export const ChampRequisPersonnalise: Story = {
  ...ChampSimple,
  name: 'Champ requis avec message personnalisé',
  args: {
    ...baseArgs,
    required: true,
    requiredText: '(obligatoire)',
  },
  // template: `
  //   <DsfrInput v-bind="args">
  //     <template #required-tip>
  //       <em>{{ args.requiredText }}</em>
  //     </template>
  //   </DsfrInput>
  // `,
}

export const ChampDeSaisieDeDate: Story = {
  ...ChampSimple,
  name: 'Champ de saisie de date',
  args: {
    ...baseArgs,
    type: 'date',
    label: 'Date de naissance',
    hint: 'JJ/MM/AAAA',
  },
}

export const ZoneDeTexte: Story = {
  ...ChampSimple,
  name: 'Zone de texte (textarea)',
  args: {
    ...baseArgs,
    isTextarea: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByRole('textbox')
    expect(textarea.tagName).toBe('TEXTAREA')
  },
}

export const FocusSurChamp: Story = {
  name: 'Focus sur un champ par programmation',
  render: (args) => ({
    components: { DsfrButton, DsfrInput },
    setup () {
      const inputRef = ref<InstanceType<typeof DsfrInput> | null>(null)
      const textareaRef = ref<InstanceType<typeof DsfrInput> | null>(null)

      const focusInput = () => inputRef.value?.focus()
      const focusTextarea = () => textareaRef.value?.focus()

      return { args, inputRef, textareaRef, focusInput, focusTextarea }
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: flex-start;">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <DsfrButton @click="focusInput">Focus sur l’input</DsfrButton>
          <DsfrInput ref="inputRef" v-bind="args" />
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <DsfrButton @click="focusTextarea">Focus sur le textarea</DsfrButton>
          <DsfrInput ref="textareaRef" v-bind="args" :is-textarea="true" />
        </div>
      </div>
    `,
  }),
  args: {
    ...baseArgs,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const focusInputButton = canvas.getByText('Focus sur l’input')
    const focusTextareaButton = canvas.getByText('Focus sur le textarea')
    const inputs = canvas.getAllByLabelText(baseArgs.label)
    const input = inputs[0]
    const textarea = inputs[1]

    await userEvent.click(focusInputButton)
    await expect(input).toHaveFocus()

    await userEvent.click(focusTextareaButton)
    await expect(textarea).toHaveFocus()
  },
}
