import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrFileDownload from './DsfrFileDownload.vue'

/**
 * [Voir quand l\'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/telechargement-de-fichier)
 */
const meta = {
  component: DsfrFileDownload,
  title: 'Composants/DsfrFileDownload',
  argTypes: {
    title: {
      control: 'text',
      description: 'Titre du lien de téléchargement',
    },
    format: {
      control: 'text',
      description: 'Format du fichier (à afficher pour l\'utilisateur)',
    },
    size: {
      control: 'text',
      description:
        'Taille du fichier (à afficher pour l\'utilisateur avec son unité) ',
    },
    href: {
      control: 'text',
      description: 'Chemin vers la ressource à télécharger',
    },
    download: {
      control: 'text',
      description: 'Nom de la ressource à télécharger',
    },
  },
} satisfies Meta<typeof DsfrFileDownload>

export default meta

type Story = StoryObj<typeof meta>

export const LienDeTelechargement: Story = {
  args: {
    format: 'PDF',
    size: '250 Go',
    href: 'src/assets/icone-marianne-seule.png',
    download: 'marianne.png',
    title: 'Titre du téléchargement',
  },
  render: (args) => ({
    components: {
      DsfrFileDownload,
    },
    setup () {
      return { args }
    },
    template: `
      <DsfrFileDownload
        :format="args.format"
        :size="args.size"
        :href="args.href"
        :download="args.download"
        :title="args.title"
      />
    `,
  }),
}
