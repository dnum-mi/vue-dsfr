import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrConnect from './DsfrConnect.vue'

/**
 * Regroupe les boutons d'authentification déléguée : **FranceConnect**, **FranceConnect+** et **ProConnect**.
 *
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/bouton-franceconnect)
 */
const meta = {
  component: DsfrConnect,
  title: 'Composants/DsfrConnect',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'plus', 'pro'],
      mapping: { '': undefined },
      description:
        'Variante du bouton : `\'plus\'` pour FranceConnect+, `\'pro\'` pour ProConnect. Sans valeur, affiche FranceConnect standard.',
    },
    lang: {
      control: 'select',
      options: ['fr', 'en', 'es', 'de'],
      description:
        'Langue utilisée pour le texte du lien d’aide. Toute valeur non reconnue revient à `\'fr\'`.',
    },
  },
} satisfies Meta<typeof DsfrConnect>

export default meta
type Story = StoryObj<typeof meta>

export const BoutonFranceConnect: Story = {
  name: 'FranceConnect (défaut)',
  args: {
    lang: 'fr',
  },
}

export const BoutonFranceConnectPlus: Story = {
  name: 'FranceConnect+',
  args: {
    variant: 'plus',
    lang: 'fr',
  },
}

export const BoutonProConnect: Story = {
  name: 'ProConnect',
  args: {
    variant: 'pro',
    lang: 'fr',
  },
}

export const BoutonFranceConnectEn: Story = {
  name: 'FranceConnect (anglais)',
  args: {
    lang: 'en',
  },
}

export const BoutonFranceConnectPlusEs: Story = {
  name: 'FranceConnect+ (espagnol)',
  args: {
    variant: 'plus',
    lang: 'es',
  },
}

export const BoutonProConnectDe: Story = {
  name: 'ProConnect (allemand)',
  args: {
    variant: 'pro',
    lang: 'de',
  },
}
