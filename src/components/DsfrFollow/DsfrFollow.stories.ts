import DsfrFollow from './DsfrFollow.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/lettre-d-information-et-reseaux-sociaux)
 */
export default {
  title: 'Composants/DsfrFollow',
  name: '',
  component: DsfrFollow,

  argTypes: {
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

})
Suivre.args = {
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
