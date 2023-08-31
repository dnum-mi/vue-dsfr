import DsfrFileDownload from './DsfrFileDownload.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/telechargement-de-fichier)
 */
export default {
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
      description: 'Taille du fichier (à afficher pour l\'utilisateur avec son unité) ',
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
}

export const LienDeTelechargement = (args) => ({
  components: {
    DsfrFileDownload,
  },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrFileDownload
      :format="format"
      :size="size"
      :href="href"
      :download="download"
      :title="title"
    />
  `,

})
LienDeTelechargement.args = {
  format: 'PDF',
  size: '250 Go',
  href: 'src/assets/icone-marianne-seule.png',
  download: 'marianne.png',
  title: 'Titre du téléchargement',
}
