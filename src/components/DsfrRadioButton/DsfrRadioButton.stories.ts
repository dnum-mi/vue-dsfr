
import DsfrRadioButton from './DsfrRadioButton.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/boutons-radio)
 */
export default {
  component: DsfrRadioButton,
  title: 'Composants/DsfrRadioButton',
  argTypes: {
    id: {
      control: 'text',
      description: '(optionnel) Valeur de l’attribut `id` du radio bouton. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    options: {
      control: 'object',
      description: 'Tableau d’objets : chaque objet contient les props à passer à `DsfrRadioButton` - *N.B. : Ne fait pas partie du composant',
    },
    small: {
      control: 'boolean',
      description: 'Utilise la version réduite du bouton radio',
    },
    // label: {
    //   control: 'text',
    //   description: 'Label du bouton radio',
    // },
    modelValue: {
      control: 'text',
      description: 'Valeur de la case cochée',
    },
    onChange: { action: 'changed' },
    img: {
      control: 'text',
      description: 'Permet d\'ajouter une image au composant',
    },
    'update:modelValue': {
      description: 'Événement émis à chaque changement de valeur du groupe de même bouton radio',
    },
  },
}

export const RadioButton = (args, { argTypes }) => ({
  components: { DsfrRadioButton },
  data () {
    return args
  },
  template: `
  <div class="fr-form-group">
    <fieldset
      class="fr-fieldset"
    >
      <div
        class="fr-fieldset__content"
        role="radiogroup"
      >
        <DsfrRadioButton
          v-for="option of options"
          :modelValue="modelValue"
          v-bind="option"
          :small="small"
          @update:modelValue="updateCheckedValue($event)"
        />
      </div>
    </fieldset>
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
  modelValue: '3',
  small: false,
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

export const RichRadioButton = (args, { argTypes }) => ({
  components: { DsfrRadioButton },
  data () {
    return args
  },
  template: `
    <DsfrRadioButton
      v-for="option of options"
      :modelValue="modelValue"
      v-bind="option"
      :small="small"
      @update:modelValue="updateCheckedValue($event)"
    />
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
RichRadioButton.args = {
  modelValue: '3',
  small: false,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
      name: 'Choix',
      img: 'http://placekitten.com/150/200',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
      name: 'Choix',
      img: 'http://placekitten.com/200/250',
    },
    {
      label: 'Valeur 3',
      value: '3',
      name: 'Choix',
      img: 'http://placekitten.com/250/350',
    },
  ],
}
