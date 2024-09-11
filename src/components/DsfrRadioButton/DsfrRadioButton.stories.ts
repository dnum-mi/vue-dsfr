import { expect, fn, within } from '@storybook/test'

import DsfrRadioButton from './DsfrRadioButton.vue'
import DsfrRadioButtonSet from './DsfrRadioButtonSet.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/boutons-radio)
 *
 * Nous vous invitons à regarder plutôt la [nouvelle documentation](https://vue-ds.fr/composants/DsfrRadioButton) pour ce composant
 */
export default {
  component: DsfrRadioButton,
  title: 'Composants/DsfrRadioButton',
  argTypes: {
    id: {
      control: 'text',
      description:
        '(optionnel) Valeur de l’attribut `id` du radio bouton. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    options: {
      control: 'object',
      description:
        'Tableau d’objets : chaque objet contient les props à passer à `DsfrRadioButton` - *N.B. : Ne fait pas partie du composant',
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
    onChange: { action: fn() },
    img: {
      control: 'text',
      description: 'Permet d\'ajouter une image au composant',
    },
    imgTitle: {
      control: 'text',
      description: 'Permet d\'ajouter un titre à l’image (attribut `title` de `<img>`) ou en balise `<title>` à l’intérieur de la balise `<svg>` du SVG',
    },
    svgPath: {
      control: 'text',
      description:
        'Chemin vers le SVG à afficher. (doit respecter les fondamentaux techniques pour les pictogrammes du DSFR)',
    },
    svgAttrs: {
      control: 'object',
      description: 'Permet de définir des attributs pour le SVG.',
    },
    'update:modelValue': {
      description:
        'Événement émis à chaque changement de valeur du groupe de même bouton radio',
    },
  },
}

export const BoutonRadio = (args) => ({
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
BoutonRadio.args = {
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
BoutonRadio.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const firstInputLabel = canvas.getByText(BoutonRadio.args.options.at(0)!.label)
  const initialCheckedInputLabel = canvas.getByText(BoutonRadio.args.options.at(2)!.label)
  expect(initialCheckedInputLabel).toHaveClass('fr-label')
  expect(firstInputLabel).toHaveClass('fr-label')
  const firstInput = canvas.getAllByRole('radio').at(0) as HTMLInputElement
  const initialCheckedInput = canvas.getAllByRole('radio').at(2) as HTMLInputElement
  expect(initialCheckedInput.parentElement).toHaveClass('fr-radio-group')
  expect(firstInput).not.toBeChecked()
  expect(initialCheckedInput).toBeChecked()
  firstInputLabel.click()
  expect(firstInput).toBeChecked()
  expect(initialCheckedInput).not.toBeChecked()
}

export const BoutonRadioRiche = (args) => ({
  components: { DsfrRadioButton, DsfrRadioButtonSet },
  data () {
    return args
  },
  template: `
    <DsfrRadioButtonSet>
      <DsfrRadioButton
        v-for="option of options"
        :modelValue="modelValue"
        v-bind="option"
        :small="small"
        @update:modelValue="updateCheckedValue($event)"
      />
    </DsfrRadioButtonSet>
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
BoutonRadioRiche.args = {
  modelValue: '3',
  small: false,
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      hint: 'Description 1',
      name: 'Choix',
      img: 'https://loremflickr.com/150/200/cat',
      imgTitle: 'Un 1er chaton',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      hint: 'Description 2',
      name: 'Choix',
      img: 'https://loremflickr.com/200/250/cat',
      imgTitle: 'Un 2è chaton',
    },
    {
      label: 'Valeur 3',
      value: '3',
      name: 'Choix',
      img: 'https://loremflickr.com/250/350/cat',
      imgTitle: 'Un 3è chaton',
    },
  ],
}
BoutonRadioRiche.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const firstInputLabel = canvas.getByText(BoutonRadio.args.options.at(0)!.label)
  const initialCheckedInputLabel = canvas.getByText(BoutonRadio.args.options.at(2)!.label)
  const firstInput = canvas.getAllByRole('radio').at(0) as HTMLInputElement
  const initialCheckedInput = canvas.getAllByRole('radio').at(2) as HTMLInputElement
  const firstInputImg = canvas.getByTitle(BoutonRadioRiche.args.options.at(0)!.imgTitle)
  const initialCheckedInputImg = canvas.getByTitle(BoutonRadioRiche.args.options.at(2)!.imgTitle)

  expect(firstInputImg).toHaveAttribute('src', BoutonRadioRiche.args.options.at(0)!.img)
  expect(initialCheckedInputImg).toHaveAttribute('src', BoutonRadioRiche.args.options.at(2)!.img)
  expect(initialCheckedInputLabel).toHaveClass('fr-label')
  expect(firstInputLabel).toHaveClass('fr-label')
  expect(initialCheckedInput.parentElement).toHaveClass('fr-radio-group')
  expect(firstInput).not.toBeChecked()
  expect(initialCheckedInput).toBeChecked()
  firstInputLabel.click()
  expect(firstInput).toBeChecked()
  expect(initialCheckedInput).not.toBeChecked()
}
