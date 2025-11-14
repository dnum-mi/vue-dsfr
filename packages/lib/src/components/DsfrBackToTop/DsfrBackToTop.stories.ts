import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrBackToTop from './DsfrBackToTop.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/retour-en-haut-de-page/)
 */
const meta = {
  component: DsfrBackToTop,
  title: 'Composants/DsfrBackToTop',
  argTypes: {
    label: {
      control: 'text',
      description: 'Titre (texte)',
    },
    position: {
      options: ['left', 'right'],
      control: 'select',
      description:
        '(Optionnel) **Position** de la fleche îcone : `left` (à gauche), `right` (à droite)',
    },
  },
} satisfies Meta<typeof DsfrBackToTop>

export default meta

export const BackToTop: StoryObj<typeof meta> = {
  args: {
    position: 'left',
    label: 'Haut de page',
  },
  render: (args) => ({
    components: {
      DsfrBackToTop,
    },
    setup () {
      return { args }
    },
    template: `
      <DsfrBackToTop v-bind="args" />
    `,
  }),
}

export const TousLesBacktoTop: StoryObj<typeof meta> = {
  render: () => ({
    components: {
      DsfrBackToTop,
    },
    template: `
      <div>
        <p>
          <DsfrBackToTop label="Haut de page" position="left"/>
        </p>
        <p>
          <DsfrBackToTop label="Haut de page" position="right"/>
        </p>
        <p>
          <DsfrBackToTop label="Haut" position="right"/>
        </p>
      </div>
    `,
  }),
}
