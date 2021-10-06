import DsfrInput from './DsfrInput.vue'

export default {
  component: DsfrInput,
  title: 'Basic/Champs de saisie - Input',
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
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrInput
        :model-value="modelValue"
        :label="label"
        :placeholder="placeholder"
        :label-visible="labelVisible"
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
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrInput
        :model-value="modelValue"
        :label="label"
        :label-visible="labelVisible"
        :placeholder="placeholder"
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
}
