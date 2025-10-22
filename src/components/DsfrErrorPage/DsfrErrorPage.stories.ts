import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrErrorPage from './DsfrErrorPage.vue'

const meta = {
  component: DsfrErrorPage,
  title: 'Composants/DsfrErrorPage',
  argTypes: {
    title: {
      control: 'text',
      description: 'Conséquence de l\'erreur rencontrée.',
    },
    subtitle: {
      control: 'text',
      description: 'Code d\'erreur HTTP à l\'origine de l\'erreur rencontrée.',
    },
    description: {
      control: 'text',
      description:
        'Description de l\'erreur et formule d\'excuses à l\'utilisateur.',
    },
    help: {
      control: 'text',
      description:
        'Accompagnement de l\'utilisateur qui se retrouve confronté à l\'erreur.',
    },
    buttons: {
      control: 'object',
      description:
        'Tableau d\'objets contenant les props des boutons d\'actions sur la page.',
    },
  },
} satisfies Meta<typeof DsfrErrorPage>

export default meta

type Story = StoryObj<typeof meta>

export const PageErreur404: Story = {
  args: {
    title: 'Page non trouvée, ne paniquez pas',
    subtitle: 'Erreur 404 !',
    description: 'La page que vous recherchez n’existe pas ou l’url est erronée.',
    help: 'Bonne chance !',
    buttons: [
      {
        label: 'Page d\'accueil',
      },
      {
        label: 'Contactez-nous',
        secondary: true,
      },
    ],
  },
  render: (args) => ({
    components: { DsfrErrorPage },
    setup () {
      return { args }
    },
    template: `
  <DsfrErrorPage
    :title="args.title"
    :subtitle="args.subtitle"
    :description="args.description"
    :help="args.help"
    :buttons="args.buttons"
  />
  `,
  }),
}
