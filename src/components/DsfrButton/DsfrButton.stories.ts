import { expect, fn, within } from '@storybook/test'

import VIcon from '../VIcon/VIcon.vue'

import DsfrButton from './DsfrButton.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton)
 */
export default {
  component: DsfrButton,
  title: 'Composants/DsfrButton',
  tags: ['bouton'],
  argTypes: {
    label: {
      control: 'text',
      description: '**Texte** du bouton',
    },
    secondary: {
      control: 'boolean',
      description: 'Permet de basculer sur la variante de style "secondary"',
    },
    tertiary: {
      control: 'boolean',
      description: 'Permet de basculer sur la variante de style "tertiary"',
    },
    noOutline: {
      control: 'boolean',
      description:
        'Permet de basculer sur la variante de style "tertiary-nooutline"',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Indique la taille du groupe de bouton',
    },
    disabled: {
      control: 'boolean',
      description: 'Indique si le bouton est **inactivé**',
    },
    icon: {
      control: 'text',
      description:
        '**Nom de l’icône** (tel que sur le site [RemixIcon](https://remixicon.com), exemple: `"ri-search-line"`) à afficher à côté du texte du bouton.\n\n Par défaut, l’icône est à gauche',
    },
    iconRight: {
      control: 'boolean',
      description: 'Indique si l’icône doit **s’afficher à droite** (`true`)',
    },
    onClick: { action: fn() },
  },
}

export const BoutonPrimaire = (args) => ({
  components: { DsfrButton },
  data () {
    return {
      ...args,
      onClickWrapper () {
        this.theClick()
        this.onClick()
      },
    }
  },
  template: `
    <DsfrButton
      :label="label"
      :secondary="secondary"
      :tertiary="tertiary"
      :disabled="disabled"
      :icon="icon"
      :size="size"
      :no-outline="noOutline"
      :icon-only="iconOnly"
      :icon-right="iconRight"
      @click="onClickWrapper()"
    />
  `,
})
BoutonPrimaire.args = {
  label: 'Label bouton',
  secondary: false,
  tertiary: false,
  disabled: false,
  icon: '',
  iconOnly: false,
  iconRight: false,
  noOutline: false,
  size: undefined,
  theClick: fn(),
}

BoutonPrimaire.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const button = canvas.getByRole('button')
  expect(BoutonPrimaire.args.theClick).not.toHaveBeenCalled()
  button.click()
  expect(BoutonPrimaire.args.theClick).toHaveBeenCalledOnce()
}

export const BoutonPrimaireAvecIcone = (args) => ({
  components: { DsfrButton },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrButton
      :label="label"
      :disabled="disabled"
      :icon="icon"
      :size="size"
      :no-outline="noOutline"
      :icon-right="iconRight"
      @click="onClick"
    />
  `,
})
BoutonPrimaireAvecIcone.args = {
  label: 'Label bouton',
  disabled: false,
  icon: 'ri-search-line',
  iconRight: false,
  noOutline: false,
  size: undefined,
}
BoutonPrimaireAvecIcone.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const button = canvas.getByRole('button')
  expect(button.firstElementChild?.nextElementSibling).toContainHTML('<svg')
}

export const BoutonPrimaireAvecIconeAnimee = (args) => ({
  components: { DsfrButton },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrButton
      :label="label"
      :disabled="disabled"
      :icon="icon"
      :size="size"
      :no-outline="noOutline"
      :icon-right="iconRight"
      @click="onClick"
    />
  `,
})
BoutonPrimaireAvecIconeAnimee.args = {
  label: 'Label bouton',
  disabled: false,
  icon: { name: 'ri-loader-4-line', animation: 'spin' },
  iconRight: true,
  noOutline: false,
  size: undefined,
}

export const BoutonSecondaire = (args) => ({
  components: { DsfrButton },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrButton
      :label="label"
      :disabled="disabled"
      :secondary="secondary"
      :no-outline="noOutline"
      :size="size"
      @click="onClick"
    />
  `,
})
BoutonSecondaire.args = {
  label: 'Label bouton secondaire',
  disabled: false,
  secondary: true,
  noOutline: false,
  size: undefined,
}
BoutonSecondaire.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const button = canvas.getByRole('button')
  expect(button).toHaveClass('fr-btn--secondary')
}

export const BoutonTertiaire = (args) => ({
  components: { DsfrButton },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrButton
      :label="label"
      :disabled="disabled"
      :tertiary="tertiary"
      :no-outline="noOutline"
      :size="size"
      @click="onClick"
    />
  `,
})
BoutonTertiaire.args = {
  label: 'Label bouton secondaire',
  disabled: false,
  tertiary: true,
  noOutline: false,
  size: undefined,
}
BoutonTertiaire.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const button = canvas.getByRole('button')
  expect(button).toHaveClass('fr-btn--tertiary')
}

export const BoutonTertiaireSansBordure = (args) => ({
  components: { DsfrButton },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrButton
      :label="label"
      :disabled="disabled"
      :tertiary="tertiary"
      :no-outline="noOutline"
      :size="size"
      @click="onClick"
    />
  `,
})
BoutonTertiaireSansBordure.args = {
  label: 'Label bouton secondaire',
  disabled: false,
  tertiary: true,
  noOutline: true,
  size: undefined,
}
BoutonTertiaireSansBordure.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const button = canvas.getByRole('button')
  expect(button).toHaveClass('fr-btn--tertiary-no-outline')
}

export const SuiteDeBoutons = (args) => ({
  components: {
    DsfrButton,
    VIcon,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <div style="margin: 1rem 0;" v-for="btn in btns">
      <DsfrButton
        :disabled="btn.disabled"
        :secondary="btn.secondary"
        :label="btn.label"
        :icon="btn.icon"
        :no-outline="btn.noOutline"
        :size="btn.size"
        :iconRight="btn.iconRight"
        @click="onClick"
      />
    </div>
  `,
})

SuiteDeBoutons.args = {
  label: 'Texte du bouton',
  disabled: false,
  btns: [
    {
      label: 'Label 1',
      icon: 'ri-checkbox-circle-line',
    },
    {
      label: 'Label 2',
      secondary: true,
      icon: 'ri-checkbox-circle-line',
    },
    {
      label: 'Label 3',
      icon: 'ri-checkbox-circle-line',
      iconRight: true,
    },
    {
      label: 'Label 4',
      secondary: true,
      icon: 'ri-checkbox-circle-line',
      iconRight: true,
    },
  ],
}

SuiteDeBoutons.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const buttons = canvas.getAllByRole('button')
  expect(buttons).toHaveLength(4)
  for (const button of buttons) {
    expect(button).toBeVisible()
  }
}
