import type { Meta } from '@storybook/vue3'

import DsfrTag from './DsfrTag.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)
 */
const meta = {
  component: DsfrTag,
  title: 'Composants/DsfrTag',
  tags: ['chip'],
  argTypes: {
    class: {
      control: 'text',
      description: 'Classe CSS (facultative) pour utiliser les icônes du DSFR',
      table: {
        category: 'Attributs',
      },
    },
    label: {
      control: 'text',
      description: '**Texte** du tag',
    },
    disabled: {
      control: 'boolean',
      description: 'Indique si le tag est **inactivé**',
    },
    selected: {
      control: 'boolean',
      description: 'Indique si le tag est **selectionné**',
      table: {
        category: 'PROPS',
      },
    },
    selectable: {
      control: 'boolean',
      description: 'Indique si le tag est **selectionnable**',
    },
    icon: {
      control: 'text',
      description:
        '**Nom de l’icône** (tel que sur le site [RemixIcon](https://remixicon.com), exemple: `"ri-checkbox-circle-line"`) à afficher à côté du texte du bouton.\n\n Par défaut, l’icône est',
    },
    iconOnly: {
      control: 'boolean',
      description:
        'Indique si l’icône doit apparaître seule (le `label` sera dans l’`aria-label` de l’icône)',
    },
    link: {
      control: 'text',
      description:
        'URL complète pour un lien externe, ou chaîne de caractère ou objet à donner à `to` de `RouterLink` pour un lien interne',
    },
    small: {
      control: 'boolean',
      description: 'Indique si le tag doit être petit',
    },
    tagName: {
      control: 'text',
      description: `Balise ou composant à utiliser (e.g. : \`"p"\`, \`"button"\`, \`"strong"\`, \`"em"\`).
- \`"p"\` par défaut
- si \`link\` est indiqué, le défaut est \`"a"\` si le lien est externe et \`"RouterLink"\`  si le lien est interne
- si \`disabled\` est à \`true\` et qu'il n'y a pas de lien, le défaut est \`"button".\`
      `,
    },
  },
} satisfies Meta<typeof DsfrTag>

export default meta

export const Etiquette = {
  render: (args: typeof meta.args) => ({
    components: { DsfrTag },

    setup () {
      return args
    },

    template: `
    <DsfrTag
      :label="label"
      :icon="icon"
      :tag-name="tagName"
      :icon-only="iconOnly"
      :disabled="disabled"
      :selected="selected"
      :selectable="selectable"
      :small="small"
      @select="selected = !selected"

    />
  `,
  }),
  args: {
    label: 'Étiquette',
    icon: 'ri-arrow-right-line',
    iconOnly: false,
    disabled: false,
    small: false,
    selected: false,
    selectable: true,
    tagName: 'button',
  },
}
