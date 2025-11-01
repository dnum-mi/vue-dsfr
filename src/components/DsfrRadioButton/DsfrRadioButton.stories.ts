import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { expect, fn, within } from 'storybook/test'
import { ref } from 'vue'

import DsfrRadioButton from './DsfrRadioButton.vue'
import DsfrRadioButtonSet from './DsfrRadioButtonSet.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/boutons-radio)
 *
 * Nous vous invitons à regarder plutôt la [nouvelle documentation](https://vue-ds.fr/composants/DsfrRadioButton) pour ce composant
 */
const meta = {
  component: DsfrRadioButton,
  title: 'Composants/DsfrRadioButton',
  tags: ['formulaire'],
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
    modelValue: {
      control: 'text',
      description: 'Valeur de la case cochée',
    },
    'onUpdate:modelValue': {
      action: fn(),
      description:
        'Événement émis à chaque changement de valeur du groupe de même bouton radio',
    },
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
  },
} satisfies Meta<typeof DsfrRadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const BoutonRadio: Story = {
  render: (args) => ({
    components: { DsfrRadioButton },
    setup () {
      const modelValue = ref(args.modelValue)
      return {
        ...args,
        modelValue,
      }
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
            v-for="(option, i) of options"
            :key="i"
            v-model="modelValue"
            v-bind="option"
            :small="small"
            @update:model-value="args['onUpdate:modelValue']"
          />
        </div>
      </fieldset>
    </div>
    `,
  }),
  args: {
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
  },
}

BoutonRadio.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement)
  const firstInputLabel = canvas.getByText(args.options.at(0).label)
  const initialCheckedInputLabel = canvas.getByText(args.options.at(2).label)
  expect(initialCheckedInputLabel).toHaveClass('fr-label')
  expect(firstInputLabel).toHaveClass('fr-label')
  const firstInput = canvas.getAllByRole('radio').at(0) as HTMLInputElement
  const initialCheckedInput = canvas.getAllByRole('radio').at(2) as HTMLInputElement
  expect(initialCheckedInput.parentElement).toHaveClass('fr-radio-group')
  expect(firstInput).not.toBeChecked()
  expect(initialCheckedInput).toBeChecked()
  await firstInputLabel.click()
  expect(firstInput).toBeChecked()
  expect(initialCheckedInput).not.toBeChecked()
  expect(args['onUpdate:modelValue']).toHaveBeenCalledWith('1')
}

export const BoutonRadioRiche: Story = {
  render: (args) => ({
    components: { DsfrRadioButton, DsfrRadioButtonSet },
    setup () {
      const modelValue = ref(args.modelValue)
      return {
        ...args,
        modelValue,
      }
    },
    template: `
      <DsfrRadioButtonSet>
        <DsfrRadioButton
          v-for="(option, i) of options"
          :key="i"
          v-model="modelValue"
          v-bind="option"
          :small="small"
          @update:model-value="args['onUpdate:modelValue']"
        />
      </DsfrRadioButtonSet>
    `,
  }),
  args: {
    modelValue: '3',
    small: false,
    options: [
      {
        label: 'Valeur 1',
        value: '1',
        hint: 'Description 1',
        name: 'Choix',
        img: 'https://loremflickr.com/150/250/cat',
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
  },
}
BoutonRadioRiche.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement)
  const firstInputLabel = canvas.getByText(args.options.at(0)!.label)
  const initialCheckedInputLabel = canvas.getByText(args.options.at(2)!.label)
  const firstInput = canvas.getAllByRole('radio').at(0) as HTMLInputElement
  const initialCheckedInput = canvas.getAllByRole('radio').at(2) as HTMLInputElement
  const firstInputImg = canvas.getByTitle(args.options.at(0)!.imgTitle)
  const initialCheckedInputImg = canvas.getByTitle(args.options.at(2)!.imgTitle)

  expect(firstInputImg).toHaveAttribute('src', args.options.at(0)!.img)
  expect(initialCheckedInputImg).toHaveAttribute('src', args.options.at(2)!.img)
  expect(initialCheckedInputLabel).toHaveClass('fr-label')
  expect(firstInputLabel).toHaveClass('fr-label')
  expect(initialCheckedInput.parentElement).toHaveClass('fr-radio-group')
  expect(firstInput).not.toBeChecked()
  expect(initialCheckedInput).toBeChecked()
  await firstInputLabel.click()
  expect(firstInput).toBeChecked()
  expect(initialCheckedInput).not.toBeChecked()
  expect(args['onUpdate:modelValue']).toHaveBeenCalledWith('1')
}
