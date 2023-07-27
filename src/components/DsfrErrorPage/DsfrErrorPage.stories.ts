import DsfrErrorPage from './DsfrErrorPage.vue'

export default {
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
      description: 'Description de l\'erreur et formule d\'excuses à l\'utilisateur.',
    },
    help: {
      control: 'text',
      description: 'Accompagnement de l\'utilisateur qui se retrouve confronté à l\'erreur.',
    },
    buttons: {
      control: 'object',
      description: 'Tableau d\'objets contenant les props des boutons d\'actions sur la page.',
    },
  }
}

export const PageErreur404 = (args) => ({
  components: { DsfrErrorPage },
  data () {
    return args
  },
  template: `
  <DsfrErrorPage
    :title="title"
    :subtitle="subtitle"
    :description="description"
    :help="help"
    :buttons="buttons"
  />
  `,

})

PageErreur404.args = {
  title: "Page non trouvée, ne paniquez pas",
  subtitle: "Erreur 404 !",
  description: "La page que vous recherchez n'existe pas ou l'url est erronée.",
  help: "Bonne chance !",
  buttons: [{
    label: 'Page d\'accueil',
    link: 'https://www.systeme-de-design.gouv.fr/',
  },
  {
    label: 'Contactez-nous',
    secondary: true,
    link: 'https://www.systeme-de-design.gouv.fr/',
  },],
}
