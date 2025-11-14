import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrFollow from './DsfrFollow.vue'
import DsfrSocialNetworks from './DsfrSocialNetworks.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux)
 */
const meta = {
  title: 'Composants/DsfrSocialNetworks',
  tags: ['réseaux sociaux'],
  component: DsfrSocialNetworks,
  argTypes: {
    networks: {
      control: 'object',
      description:
        'Liste des différents réseaux sociaux ; doit avoir 3 props : `name`, `type` (forcément parmi les valeurs suivantes : `\'facebook\'`, `\'twitter-x\'`, `\'youtube\'`, `\'linkedin\'`, `\'instagram\'`)  et `url`',
    },
    titleTag: {
      control: { type: 'select' },
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Permet de choisir la balise contenant le titre du composant (h3 par défaut)',
    },
  },
} satisfies Meta<typeof DsfrSocialNetworks>

export default meta

type Story = StoryObj<typeof meta>

export const ReseauxSociaux: Story = {
  args: {
    titleTag: undefined,
    networks: [
      {
        name: 'Facebook',
        type: 'facebook',
        href: 'https://www.facebook.com',
      },
      {
        name: 'X (anciennement Twitter)',
        type: 'twitter-x',
        href: 'https://www.x.com',
      },
      {
        name: 'Youtube',
        type: 'youtube',
        href: 'https://www.youtube.com',
      },
      {
        name: 'Linkedin',
        type: 'linkedin',
        href: 'https://www.linkedin.com',
      },
      {
        name: 'Instagram',
        type: 'instagram',
        href: 'https://www.instagram.com',
      },
    ],
  },
  render: (args) => ({
    components: { DsfrSocialNetworks, DsfrFollow },
    setup () {
      return { args }
    },
    template: `
    <DsfrFollow>
      <div class="fr-col-12">
        <DsfrSocialNetworks
          :networks="args.networks"
          :is="args.titleTag"
        />
      </div>
    </DsfrFollow>
  `,
  }),
}
