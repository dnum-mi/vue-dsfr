import DsfrToggleSwitch from './DsfrToggleSwitch.vue'

export default {
  component: DsfrToggleSwitch,
  title: 'Composants/Interrupteur - DsfrToggleSwitch',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    label: {
      control: 'text',
      description: 'Label de l’interrupteur',
    },
    hint: {
      control: 'text',
      description: 'Indice de l’interrupteur',
    },
    disabled: {
      control: 'boolean',
      description: 'État activé/désactivé de l’interrupteur (activé `false`, ou désactivé `true`)',
    },
    modelValue: {
      control: 'boolean',
      description: 'État On/Off de l’interrupteur (On `false`, ou Off `true`)',
    },
    inputId: {
      control: 'text',
      description: 'Id de l’input',
    },
    onChange: {
      action: 'change',
      description: 'Appelé à chaque changement de la valeur `checked`.\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    'update:modelValue': {
      description: 'Evènement de mise à jour de la valeur contenue dans modelValue',
    },
  },
}

export const Interrupteur = (args) => ({
  components: { DsfrToggleSwitch },
  data () {
    return args
  },
  template: `
    <DsfrToggleSwitch
      v-model="modelValue"
      :label="label"
      :hint="hint"
      :disabled="disabled"
      :input-id="inputId"
    />
  `,
  watch: {
    modelValue (newVal) {
      this.onChange(newVal)
    },
  },
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
Interrupteur.args = {
  dark: false,
  label: 'Interrupteur 1',
  hint: 'Indice',
  disabled: false,
  inputId: 'toggle-1',
  modelValue: true,
}
