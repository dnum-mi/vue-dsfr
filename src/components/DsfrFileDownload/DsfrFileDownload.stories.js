import DsfrFileDownload from './DsfrFileDownload.vue'

export default {
  component: DsfrFileDownload,
  title: 'Composants/Téléchargement de Fichier - DsfrFileDownload',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
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
      :block="block"
      :description="description"
      :title="title"
    />
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
TelechargementDeFichier.args = {
  dark: false,
  format: 'PDF',
  size: '250 Go',
  href: 'src/assets/icone-marianne-seule.png',
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
      :block="block"
      :description="description"
      :title="title"
    />
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
BlocDeTelechargement.args = {
  dark: false,
  format: 'JPEG',
  size: '1.2 To',
  href: 'src/assets/icone-marianne-seule.png',
  description: 'Description du téléchargement',
  title: 'Titre du téléchargement',
  block: true,
}
