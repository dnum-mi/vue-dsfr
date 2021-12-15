import DsfrInput from './DsfrInput.vue'

export default {
  component: DsfrInput,
  title: 'Composants/Champs de saisie - DsfrInput',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    label: {
      control: 'text',
      description: 'Label du champ de saisie',
    },
    labelVisible: {
      control: 'boolean',
      description: 'Indique si le label doit être visible (`true`) ou non (`false`, défaut)',
    },
    placeholder: {
      control: 'text',
      description: 'Contenu du champ à afficher lorsqu’il n’est pas rempli par l’utilisateur',
    },
    modelValue: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
      description: 'Permet de désactiver le champ, la saisie sera impossible',
    },
  },
}

export const LabelNotVisible = (args) => ({
  components: {
    DsfrInput,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrInput
        :model-value="modelValue"
        :label="label"
        :placeholder="placeholder"
        :label-visible="labelVisible"
        :disabled="disabled"
      />
    </div>
  `,
})
LabelNotVisible.args = {
  dark: false,
  label: 'Label champ de saisie',
  labelVisible: false,
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
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
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrInput
        :model-value="modelValue"
        :label="label"
        :label-visible="labelVisible"
        :placeholder="placeholder"
        :disabled="disabled"
      />
    </div>
  `,
})
LabelVisible.args = {
  dark: false,
  label: 'Label champ de saisie',
  labelVisible: true,
  placeholder: 'Placeholder',
  modelValue: '',
  disabled: false,
}
