import DsfrFileDownloadList from './DsfrFileDownloadList.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/telechargement-de-fichier)
 */
export default {
  component: DsfrFileDownloadList,
  title: 'Composants/DsfrFileDownloadList',
  argTypes: {
    files: {
      control: 'object',
      description: 'Tableau d\'objets contenant les propriétés "title", "format", "size", "href" et "download" propres au composant DsfrFileDownload',
    },
    title: {
      control: 'string',
      description: 'Chaîne de caractères optionnelle permettant d\'ajouter un titre à la liste des liens de téléchargement',
    },
  },
}

export const ListeDeTelechargements = (args, { argTypes }) => ({
  components: {
    DsfrFileDownloadList,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrFileDownloadList
      :files="files"
      :title="title"
    />
  `,

})
ListeDeTelechargements.args = {
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
}
