
import DsfrRadioButton from './DsfrRadioButton.vue'

export default {
  component: DsfrRadioButton,
  title: 'Composants/Boutons radio/Boutons radio - DsfrRadioButtons',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    options: {
      control: 'object',
      description: 'Tableau d’objets : chaque objet contient les props à passer à `DsfrRadioButton` - *N.B. : Ne fait pas partie du composant',
    },
    label: {
      control: 'text',
      description: 'Label du bouton radio',
    },
    modelValue: {
      control: 'text',
      description: 'Valeur de la case cochée',
    },
    onChange: { action: 'changed' },
  },
}

export const RadioButton = (args, { argTypes }) => ({
  components: { DsfrRadioButton },
  data () {
    return args
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrRadioButton
        v-for="option of options"
        :modelValue="modelValue"
        v-bind="option"
        @update:modelValue="updateCheckedValue($event)"
      />
    </div>
  `,
  methods: {
    updateCheckedValue (val) {
      if (val === this.modelValue) {
        return
      }
      this.onChange(val)
      this.modelValue = val
    },
  },
})
RadioButton.args = {
  dark: false,
  modelValue: '3',
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
      name: 'Choix',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
      name: 'Choix',
    },
    {
      label: 'Valeur 3',
      value: '3',
      name: 'Choix',
    },
  ],
}
