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
    block: {
      control: 'boolean',
      description: 'Permet de basculer le lien de téléchargement en mode block',
    },
    description: {
      control: 'text',
      description: 'Une description associée au lien disponible en mode block',
    },
  },
}

export const TelechargementDeFichier = (args) => ({
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
      :block="block"
      :description="description"
      :title="title"
    />
  `,

})
TelechargementDeFichier.args = {
  format: 'PDF',
  size: '250 Go',
  href: 'src/assets/icone-marianne-seule.png',
  download: 'marianne.png',
  block: false,
  description: 'Description du téléchargement',
  title: 'Titre du téléchargement',
}

export const BlocDeTelechargement = (args) => ({
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
      :block="block"
      :description="description"
      :title="title"
    />
  `,

})
BlocDeTelechargement.args = {
  format: 'JPEG',
  size: '1.2 To',
  href: 'src/assets/icone-marianne-seule.png',
  download: 'marianne.png',
  description: 'Description du téléchargement',
  title: 'Titre du téléchargement',
  block: true,
}
