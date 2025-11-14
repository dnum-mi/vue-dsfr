import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrFileDownloadList from './DsfrFileDownloadList.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/telechargement-de-fichier)
 */
const meta = {
  component: DsfrFileDownloadList,
  title: 'Composants/DsfrFileDownloadList',
  argTypes: {
    files: {
      control: 'object',
      description:
        'Tableau d\'objets contenant les propriétés "title", "format", "size", "href" et "download" propres au composant DsfrFileDownload',
    },
    title: {
      control: 'string',
      description:
        'Chaîne de caractères optionnelle permettant d\'ajouter un titre à la liste des liens de téléchargement',
    },
  },
} as Meta<typeof DsfrFileDownloadList>

export default meta
type Story = StoryObj<typeof meta>

export const ListeDeTelechargements: Story = {
  args: {
    files: [
      {
        title: 'Télécharger document 1',
        format: 'PNG',
        size: '250 Mo',
        href: '#',
        download: 'document1.md',
      },
      {
        title: 'Télécharger document 2',
        format: 'GIF',
        size: '107 Ko',
        href: '#',
        download: 'document2.md',
      },
      {
        title: 'Télécharger document 3',
        format: 'ZIP',
        size: '1,5 Go',
        href: '#',
        download: 'document3.md',
      },
    ],
    title: 'Titre facultatif',
  },
  render: (args) => ({
    components: { DsfrFileDownloadList },
    setup () {
      return { args }
    },
    template: `
      <DsfrFileDownloadList
        :files="args.files"
        :title="args.title"
      />
    `,
  }),
}
