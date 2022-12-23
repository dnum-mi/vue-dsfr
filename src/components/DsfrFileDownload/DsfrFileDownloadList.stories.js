import DsfrFileDownloadList from './DsfrFileDownloadList.vue'

export default {
  component: DsfrFileDownloadList,
  title: 'Composants/Téléchargement de Fichier - DsfrFileDownloadList',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    files: {
      control: 'object',
      description: 'Tableau d\'objets contenant les propriétés "title", "format", "size" et "href" propres au composant DsfrFileDownload',
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

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
ListeDeTelechargements.args = {
  dark: false,
  files: [
    {
      title: 'Télécharger document 1',
      format: 'PNG',
      size: '250 Mo',
      href: '#',
    },
    {
      title: 'Télécharger document 2',
      format: 'GIF',
      size: '107 Ko',
      href: '#',
    },
    {
      title: 'Télécharger document 3',
      format: 'ZIP',
      size: '1,5 Go',
      href: '#',
    },
  ],
  title: 'Titre facultatif',
}
