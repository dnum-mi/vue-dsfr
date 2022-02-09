import OhVueIcon from 'oh-vue-icons/dist/v3/icon.es'

import { RiInformationLine } from 'oh-vue-icons/icons'

import DsfrCallout from './DsfrCallout.vue'

OhVueIcon.add(RiInformationLine)

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
    onClick: {
      action: 'Clicked',
    },
  },
}

export const MiseEnAvantSimple = (args) => ({
  components: {
    DsfrCallout,
    VIcon: OhVueIcon,
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
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrCallout
        :title="title"
        :content="content"
        :button="button"
        :icon="icon"
      />
    </div>
  `,
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
    VIcon: OhVueIcon,
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
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
      <DsfrCallout
        :title="title"
        :content="content"
        :button="button"
        :icon="icon"
      />
    </div>
  `,
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
