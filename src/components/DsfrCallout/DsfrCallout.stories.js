import { OhVueIcon as VIcon, addIcons } from 'oh-vue-icons'

import { RiInformationLine } from 'oh-vue-icons/icons/ri/index.js'

import DsfrCallout from './DsfrCallout.vue'

addIcons(RiInformationLine)

export default {
  component: DsfrCallout,
  title: 'Composants/Mise en Avant - Callout',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    title: {
      control: 'text',
      description: 'Permet de passer le titre désiré en chaîne de caractères',
    },
    content: {
      control: 'text',
      description: 'Permet de passer le contenu désiré en chaîne de caractères',
    },
    icon: {
      control: 'text',
      description: 'Permet de passer l’icône désirée en chaîne de caractères (cf. remix-icon)',
    },
    button: {
      control: 'object',
      description: '(optionnel) Objet contenant les props à passer à DsfrButton (pour afficher un bouton sous la mise en avant)',
    },
    onClick: {
      action: 'Clicked',
    },
    titleTag: {
      control: 'text',
      description: 'Permet de choisir la balise contenant le titre de la mise en avant (h3 par défaut)',
    },
  },
}

export const MiseEnAvantSimple = (args) => ({
  components: {
    DsfrCallout,
    VIcon,
  },

  data () {
    return {
      ...args,
      button: args.button && {
        ...args.button,
        onClick: args.onClick,
      },
    }
  },

  template: `
    <DsfrCallout
      :title="title"
      :content="content"
      :button="button"
      :icon="icon"
      :is="titleTag"
    />
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
MiseEnAvantSimple.args = {
  dark: false,
  title: 'Titre de la mise en avant',
  button: undefined,
  icon: '',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol',
}

export const MiseEnAvant = (args) => ({
  components: {
    DsfrCallout,
    VIcon,
  },

  data () {
    return {
      ...args,
      button: args.button && {
        ...args.button,
        onClick: args.onClick,
      },
    }
  },

  template: `
    <DsfrCallout
      :title="title"
      :content="content"
      :button="button"
      :icon="icon"
    />
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
MiseEnAvant.args = {
  dark: false,
  title: 'Titre de la mise en avant',
  button: {
    label: 'Label bouton',
  },
  icon: 'ri-information-line',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol',
}
