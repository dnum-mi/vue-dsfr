import DsfrSocialNetworks from './DsfrSocialNetworks.vue'
import DsfrFollow from './DsfrFollow.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/lettre-d-information-et-reseaux-sociaux)
 */
export default {
  title: 'Composants/DsfrSocialNetworks',
  name: '',
  component: DsfrSocialNetworks,
  argTypes: {
    networks: {
      control: 'object',
      description: 'Liste des différents réseaux sociaux ; doit avoir 2 props : `name` (forcément parmi les valeurs suivantes : `\'facebook\'`, `\'twitter\'`, `\'youtube\'`, `\'linkedin\'`, `\'instagram\'`)  et `url`',
    },
    titleTag: {
      control: 'text',
      description: 'Permet de choisir la balise contenant le titre du composant (h3 par défaut)',
    },
  },
}

export const ReseauxSociaux = (args) => ({
  components: { DsfrSocialNetworks, DsfrFollow },
  data () {
    return {
      ...args,
    }
  },
  template: `
    <DsfrFollow>
      <div class="fr-col-12">
        <DsfrSocialNetworks
          :networks="networks"
          :is="titleTag"
        />
      </div>
    </DsfrFollow>
  `,

})
ReseauxSociaux.args = {
  titleTag: undefined,
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
}
