import DsfrFollow from './DsfrFollow.vue'

export default {
  title: 'Composants/Lettres d’information et réseaux/Lettre d’info + Réseaux - DsfrFollow',
  name: '',
  component: DsfrFollow,

  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    networks: {
      control: 'object',
      description: 'Liste des différents réseaux sociaux ; doit avoir 2 props : `name` (forcément parmi les valeurs suivantes : `\'facebook\'`, `\'twitter\'`, `\'youtube\'`, `\'linkedin\'`, `\'instagram\'`)  et `url`',
    },
    newsletterData: {
      control: 'object',
      description: 'Objet contenant en propriété les props attendues par DsfrSocialNetworks',
    },
  },
}

export const Suivre = (args) => ({
  components: { DsfrFollow },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrFollow
      :networks="networks"
      :newsletter-data="newsletterData"
    />
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
Suivre.args = {
  dark: false,
  networks: [
    {
      name: 'facebook',
      href: 'https://www.facebook.com',
    },
    {
      name: 'twitter',
      href: 'https://www.twitter.com',
    },
    {
      name: 'youtube',
      href: 'https://www.youtube.com',
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com',
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com',
    },
  ],
  newsletterData: {
    title: 'Titre de la lettre d’informations',
    description: 'Description de la lettre d’informations',
    email: '',
    labelEmail: 'Label du champ adresse électronique',
    placeholder: 'james.bond@mi6.gov.uk',
    hintText: 'Mise en garde concernant l’abonnement à la lettre d’information',
    buttonText: 'S’abonner',
    buttonTitle: 'Titre du bouton (valeur de l’attribut `title` de la balise `button`)',
  },
}
