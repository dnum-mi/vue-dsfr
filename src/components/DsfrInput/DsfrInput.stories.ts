import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { expect, within } from '@storybook/test'

import DsfrAlert from '../DsfrAlert/DsfrAlert.vue'
import DsfrButton from '../DsfrButton/DsfrButton.vue'
import VIcon from '../VIcon/VIcon.vue'

import DsfrInput from './DsfrInput.vue'
import DsfrInputGroup from './DsfrInputGroup.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/champ-de-saisie)
 */
const meta = {
  component: DsfrInput,
  title: 'Composants/DsfrInput',
  tags: ['formulaire'],
  argTypes: {
    id: {
      control: 'text',
      description:
        '(optionnel) Valeur de l’attribut `id` du champ de saisie. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    descriptionId: {
      control: 'text',
      description:
        '(optionnel) Valeur de l’attribut `id` du paragraphe de description. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    label: {
      control: 'text',
      description: 'Label du champ de saisie',
    },
    type: {
      control: 'text',
      description:
        'Type du champ de saisie cf. [MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input)',
    },
    hint: {
      control: 'text',
      description: 'Indice associé au champ de saisie',
    },
    labelVisible: {
      control: 'boolean',
      description:
        'Indique si le label doit être visible (`true`) ou non (`false`, défaut)',
    },
    placeholder: {
      control: 'text',
      description:
        'Contenu du champ à afficher lorsqu’il n’est pas rempli par l’utilisateur. *N’est pas déclaré en tant que props, mais fait partie des attributs qui seront passés à l’élément `input` natif**',
    },
    modelValue: {
      control: 'text',
      description: 'Valeur du champ de saisie',
    },
    disabled: {
      control: 'boolean',
      description:
        'Permet de désactiver le champ, la saisie sera impossible. *N’est pas déclaré en tant que props, mais fait partie des attributs qui seront passés à l’élément `input` natif*',
    },
    isValid: {
      control: 'boolean',
      description:
        'Signale si le champ est en état validé (`true`) ou non (`false`, par défaut)',
    },
    isInvalid: {
      control: 'boolean',
      description:
        'Signale si le champ est en état d’erreur (`true`) ou non (`false`, par défaut)',
    },
    isTextarea: {
      control: 'boolean',
      description:
        'Signale si le champ est de type textarea (`true`) ou non (`false`, par défaut)',
    },
    isWithWrapper: {
      control: 'boolean',
      description:
        'Définit la présence d’une div englobant le champ de saisie et lui met automatiquement la classe `fr-input-wrap`',
    },
    wrapperClass: {
      control: 'text',
      description:
        'Classe css du div englobant le champ de saisie si l\'utilisateur y a recourt.',
    },
    'update:modelValue': {
      control: 'text',
      description:
        'Événement émis lors du changement de la valeur du champ de saisie',
    },
  },
} satisfies Meta<typeof DsfrInput>

export default meta

type Story = StoryObj<typeof meta>

export const ChampSansLabel = (args) => ({
  components: {
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrInput
      :model-value="modelValue"
      :label="label"
      :hint="hint"
      :type="type"
      :placeholder="placeholder"
      :label-visible="labelVisible"
      :disabled="disabled"
    />
  `,
})
ChampSansLabel.args = {
  type: 'text',
  labelVisible: false,
  label: 'Label visible',
  hint: 'Indice visible',
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
}
ChampSansLabel.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const label = canvas.getByText(ChampSansLabel.args.label)
  expect(label).toHaveClass('fr-label')
  const input = canvas.getByRole('textbox')
  expect(input).not.toHaveAttribute('required')
}

export const LabelVisible = (args) => ({
  components: {
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrInput
      :model-value="modelValue"
      :label="label"
      :hint="hint"
      :label-visible="labelVisible"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  `,
})
LabelVisible.args = {
  label: 'Label champ de saisie',
  hint: 'Indice de champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
}
ChampSansLabel.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const label = canvas.getByText(ChampSansLabel.args.label)
  expect(label).toHaveClass('fr-label')
  expect(label).toBeVisible()
  const input = canvas.getByRole('textbox')
  expect(input).not.toHaveAttribute('required')
}

export const ChampRequis = (args) => ({
  components: {
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <component :is="'style'">
      .required {
        color: red;
      }
    </component>
    <DsfrInput
      :model-value="modelValue"
      :label="label"
      :label-visible="labelVisible"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="true"
    >
    </DsfrInput>
  `,
})
ChampRequis.args = {
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
  isTextarea: true,
}
ChampRequis.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const label = canvas.getByText(ChampRequis.args.label)
  expect(label).toHaveClass('fr-label')
  const input = canvas.getByRole('textbox')
  expect(input).toHaveAttribute('required')
}

export const ChampAvecLabelPersonnalise = (args) => ({
  components: {
    DsfrAlert,
    DsfrInput,
    VIcon,
  },
  data () {
    return {
      ...args,
      show: false,
    }
  },
  template: `
    <component :is="'style'">
      .required {
        color: red;
      }
      .container {
        display: grid;
        grid-template-columns: 1fr auto;
      }
      .hint-on-demand {
        background-color: var(--grey-1000-50);
        position: absolute;
        right: 1rem;
        transform: translateY(1.5rem);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }
      .hint-on-demand.show {
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
      }
    </component>
    <DsfrInput
      :model-value="modelValue"
      :label="label"
      label-class="container"
      :label-visible="labelVisible"
      :placeholder="placeholder"
      :disabled="disabled"
      hint="Et ici l’indice permanent"
      :required="true"
    >
      <template v-slot:label>
        <div>
          {{ label }}<span class="required">&nbsp;*</span>
        </div>
        <button
          @mouseover="show = true"
          @mouseout="show = false"
          @click="show = !show"
          @blur="show = false"
        >
          <VIcon
            name="ri-question-fill"
            color="var(--blue-france-sun-113-625)"
            style="pointer-events: none;"
          />
        </button>
        <DsfrAlert
          type="info"
          class="hint-on-demand"
          :class="{show: show}"
          description="Indice au survol"
        />
      </template>
    </DsfrInput>
  `,
})
ChampAvecLabelPersonnalise.args = {
  label: 'Le label du champ',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
  isTextarea: true,
}
ChampAvecLabelPersonnalise.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const label = canvas.getByText(ChampAvecLabelPersonnalise.args.label).parentElement
  expect(label).toHaveClass('fr-label')
  const input = canvas.getByRole('textbox')
  expect(input).toHaveAttribute('required')
}

export const ChampRequisPersonnalise = (args) => ({
  components: {
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrInput
      :model-value="modelValue"
      :label="label"
      :label-visible="labelVisible"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="true"
    >
      <template #required-tip>
        <em> {{ requiredText }}</em>
      </template>
    </DsfrInput>
  `,
})
ChampRequisPersonnalise.args = {
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
  isTextarea: true,
  requiredText: '(obligatoire)',
}
ChampRequisPersonnalise.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const label = canvas.getByText(ChampRequisPersonnalise.args.label)
  const em = canvas.getByText(ChampRequisPersonnalise.args.requiredText)
  expect(em).toHaveProperty('tagName', 'EM')
  expect(label).toHaveClass('fr-label')
  const input = canvas.getByRole('textbox')
  expect(input).toHaveAttribute('required')
}

export const ChampEnErreur = (args) => ({
  components: {
    DsfrInput,
    DsfrInputGroup,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <DsfrInputGroup
      :error-message="errorMessage"
    >
      <DsfrInput
        :model-value="modelValue"
        :label="label"
        :label-visible="labelVisible"
        :placeholder="placeholder"
        :is-invalid="isInvalid"
      />
    </DsfrInputGroup>
  `,
})
ChampEnErreur.args = {
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  errorMessage: 'Message d’erreur',
  isInvalid: true,
}
ChampEnErreur.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const inputWrapper = canvas.getByText(ChampEnErreur.args.label).parentElement
  const messageEl = canvas.getByText(ChampEnErreur.args.errorMessage)

  expect(inputWrapper).toHaveClass('fr-input-group')
  expect(inputWrapper).toHaveClass('fr-input-group--error')
  expect(messageEl).toHaveClass('fr-error-text')
  expect(messageEl.parentElement).toHaveClass('fr-messages-group')
}

export const ChampValide = (args) => ({
  components: {
    DsfrInput,
    DsfrInputGroup,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrInputGroup
      :valid-message="validMessage"
    >
      <DsfrInput
        :model-value="modelValue"
        :label="label"
        :label-visible="labelVisible"
        :placeholder="placeholder"
        :is-valid="isValid"
      />
    </DsfrInputGroup>
  `,
})
ChampValide.args = {
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  validMessage: 'Message de validation',
  isValid: true,
}
ChampValide.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const inputWrapper = canvas.getByText(ChampValide.args.label).parentElement
  const messageEl = canvas.getByText(ChampValide.args.validMessage)

  expect(inputWrapper).toHaveClass('fr-input-group')
  expect(inputWrapper).toHaveClass('fr-input-group--valid')
  expect(messageEl).toHaveClass('fr-valid-text')
  expect(messageEl.parentElement).toHaveClass('fr-messages-group')
}

export const ChampDeSaisieDeDate = (args) => ({
  components: {
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrInput
      :model-value="modelValue"
      :label="label"
      :hint="hint"
      type="date"
      :placeholder="placeholder"
      :label-visible="labelVisible"
      :disabled="disabled"
      :is-with-wrapper="true"
    />
  `,
})
ChampDeSaisieDeDate.args = {
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
  label: 'Date de naissance',
  hint: 'JJ/MM/AAAA',
}
ChampDeSaisieDeDate.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const input = canvas.getByText(ChampDeSaisieDeDate.args.label).nextElementSibling?.querySelector('input')
  expect(input).toHaveAttribute('type', 'date')
}

export const FocusSurChamp = (args) => ({
  components: {
    DsfrButton,
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  methods: {
    focusInput () {
      this.$refs.input.focus()
    },
    focusTextarea () {
      this.$refs.textarea.focus()
    },
  },
  template: `
    <DsfrButton @click="focusInput()">
      {{ inputButtonText }}
    </DsfrButton>

    <DsfrInput
      ref="input"
      v-model="modelValue"
      :label="label"
      :hint="hint"
      :placeholder="placeholder"
      :label-visible="labelVisible"
      :disabled="disabled"
    />

    <DsfrButton @click="focusTextarea()">
      {{ textareaButtonText }}
    </DsfrButton>

    <DsfrInput
      ref="textarea"
      v-model="modelValue"
      :is-textarea="isTextarea"
      :label="label"
      :hint="hint"
      :placeholder="placeholder"
      :label-visible="labelVisible"
      :disabled="disabled"
    />
  `,
})
FocusSurChamp.args = {
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
  isTextarea: true,
  label: 'Label du champ',
  hint: '',
  inputButtonText: 'Focus sur l’input',
  textareaButtonText: 'Focus sur le textarea',
}
ChampValide.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const inputWrapper = canvas.getByText(ChampValide.args.label).parentElement
  const messageEl = canvas.getByText(ChampValide.args.validMessage)

  expect(inputWrapper).toHaveClass('fr-input-group')
  expect(inputWrapper).toHaveClass('fr-input-group--valid')
  expect(messageEl).toHaveClass('fr-valid-text')
  expect(messageEl.parentElement).toHaveClass('fr-messages-group')
}

export const ZoneDeTexte = (args) => ({
  components: {
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrInput
      :model-value="modelValue"
      :label="label"
      :label-visible="labelVisible"
      :placeholder="placeholder"
      :disabled="disabled"
      :is-textarea="isTextarea"
    />
  `,
})
ZoneDeTexte.args = {
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
  isTextarea: true,
}
ZoneDeTexte.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const textarea = canvas.getByRole('textbox')
  expect(textarea).toHaveProperty('tagName', 'TEXTAREA')
}
