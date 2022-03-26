import { OhVueIcon as VIcon, addIcons } from 'oh-vue-icons'

import { RiCheckboxCircleLine } from 'oh-vue-icons/icons/ri/index.js'

import DsfrButton from './DsfrButton.vue'

addIcons(RiCheckboxCircleLine)

export default {
  component: DsfrButton,
  title: 'Composants/Boutons/Boutons - DsfrButton',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    secondary: {
      control: 'boolean',
      description: 'Indique si le bouton est un bouton **secondaire**',
    },
    label: {
      control: 'text',
      description: '**Texte** du bouton',
    },
    disabled: {
      control: 'boolean',
      description: 'Indique si le bouton est **inactivé**',
    },
    icon: {
      control: 'text',
      description: '**Nom de l’icône** (tel que sur le site [RemixIcon](https://remixicon.com), exemple: `"ri-search-line"`) à afficher à côté du texte du bouton.\n\n Par défaut, l’icône est à gauche',
    },
    iconRight: {
      control: 'boolean',
      description: 'Indique si l’icône doit **s’afficher à droite** (`true`)',
    },
    onClick: { action: 'clicked' },
  },
}

export const BoutonPrimaire = (args) => ({
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
      :icon="icon"
      :icon-only="iconOnly"
      :icon-right="iconRight"
      @click="onClick"
    />
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
BoutonPrimaire.args = {
  dark: false,
  label: 'Label bouton',
  disabled: false,
  secondary: false,
  icon: '',
  iconOnly: false,
  iconRight: false,
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
      :icon-right="iconRight"
      @click="onClick"
    />
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
BoutonPrimaireAvecIcone.args = {
  dark: false,
  label: 'Label bouton',
  disabled: false,
  icon: 'ri-search-line',
  iconRight: false,
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
      @click="onClick"
    />
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
BoutonSecondaire.args = {
  label: 'Label bouton secondaire',
  disabled: false,
  dark: false,
  secondary: true,
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
        :iconRight="btn.iconRight"
        @click="onClick"
      />
    </div>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})

SuiteDeBoutons.args = {
  dark: false,
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
