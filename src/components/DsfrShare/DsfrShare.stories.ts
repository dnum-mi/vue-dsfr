import DsfrShare from './DsfrShare.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/partage)
 */
export default {
  component: DsfrShare,
  title: 'Composants/DsfrShare',
  argTypes: {
    title: {
      control: 'text',
      description: 'Titre du bloc partage',
    },
    networks: {
      control: 'object',
      description: 'Liste des réseaux sociaux',
    },
    mail: {
      control: 'object',
      description: 'Objet contenant deux propriétés `to` (lien à mettre dans le href et qui doit commencer par `mailto:`) et le `label` associé',
    },
    copyLabel: {
      control: 'text',
      description: 'Texte à afficher au survol de l’icône de partage (contenu de l’attribut `titre` du `<button>)',
    },
  },
}

export const Partage = (args) => ({
  components: {
    DsfrShare,
  },
  data () {
    return {
      ...args,
    }
  },

  template: `
  <DsfrShare
    :title="title"
    :networks="networks"
    :mail="mail"
    :copy-label="copyLabel"
  />
  `,

})
Partage.args = {
  copyLabel: 'Copier dans le presse-papier',
  mail: {
    to: 'mailto:user@example.com?subject=Sujet&body=Corps du courriel',
    label: 'Envoyer un mail',
  },
  networks: [
    {
      name: 'facebook',
      label: 'Partager sur Facebook',
      url: 'https://www.facebook.com/sharer.php?u=[À MODIFIER - url de la page]',
    },
    {
      name: 'twitter',
      label: 'Partager sur Twitter',
      url: 'https://twitter.com/intent/tweet?url=[À MODIFIER - url de la page]&text=[À MODIFIER - titre ou texte descriptif de la page]&via=[À MODIFIER - via]&hashtags=[À MODIFIER - hashtags]',
    },
    {
      name: 'linkedin',
      label: 'Partager sur LinkedIn',
      url: 'https://www.linkedin.com/shareArticle?url=[À MODIFIER - url de la page]&title=[À MODIFIER - titre ou texte descriptif de la page]',
    },
  ],
  title: 'Partages',
}
