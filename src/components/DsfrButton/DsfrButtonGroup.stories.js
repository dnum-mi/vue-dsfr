import { OhVueIcon as VIcon, addIcons } from 'oh-vue-icons'

import { RiCheckboxCircleLine } from 'oh-vue-icons/icons/ri/index.js'

import DsfrButtonGroup from './DsfrButtonGroup.vue'

addIcons(RiCheckboxCircleLine)

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/groupe-de-boutons)
 */
export default {
  component: DsfrButtonGroup,
  title: 'Composants/DsfrButtonGroup',
  argTypes: {
    buttons: {
      control: 'object',
      description: 'Tableau d’objets, chaque objet contiendra les props à passer à DsfrButton',
    },
    inline: {
      control: 'boolean',
      deprecated: true,
      description: '**Déprécié:** Indique si le groupe de boutons doit toujours apparaître en empilement horizontal. *Utiliser `inlineLayoutWhen` à la place.*',
    },
    inlineLayoutWhen: {
      control: 'radio',
      options: ['never', 'always', 'small', 'medium', 'large'],
      description: 'Indique si le groupe de boutons doit apparaître en empilement horizontal (toujours, ou seulement sur les tailles de vue spécifiées)',
    },
    reverse: {
      control: 'boolean',
      description: 'Indique si l’ordre des boutons doit être inversé par rapport au DOM.\n\n *N.B. : Ne fonctionne que si `align` est à `right`*',
    },
    iconRight: {
      control: 'boolean',
      description: 'Inverse la position des icônes par rapport au texte.\n\n *N.B. : Ne fonctionne que si la prop n\'est pas définie sur chaque bouton*',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Indique la taille du groupe de bouton',
    },
    align: {
      control: 'radio',
      options: ['default', 'center', 'right'],
      description: 'Indique l\'alignement du groupe de boutons',
    },
    onClick: { action: 'clicked' },
  },
}

export const GroupeDeBoutons = (args) => ({
  components: {
    DsfrButtonGroup,
    VIcon,
  },
  data () {
    return {
      ...args,
      buttons: args.buttons.map(btn => ({ ...btn, onClick: args.onClick })),
    }
  },
  template: `
    <DsfrButtonGroup
      :buttons="buttons"
      :size="size"
      :align="align"
      :inline="inline"
      :inline-layout-when="inlineLayoutWhen"
      :icon-right="iconRight"
      :reverse="reverse"
    />
  `,

})
GroupeDeBoutons.args = {
  align: 'center',
  inlineLayoutWhen: 'never',
  reverse: false,
  iconRight: false,
  size: 'medium',
  inline: undefined,
  buttons: [
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
    },
    {
      label: 'Label 4',
      secondary: true,
      icon: 'ri-checkbox-circle-line',
    },
  ],
}
