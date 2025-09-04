import DsfrFollow from './DsfrFollow.vue'
import DsfrSocialNetworks from './DsfrSocialNetworks.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux)
 */
export default {
  title: 'Composants/DsfrSocialNetworks',
  tags: ['réseaux sociaux'],
  name: '',
  component: DsfrSocialNetworks,
  argTypes: {
    networks: {
      control: 'object',
      description:
        'Liste des différents réseaux sociaux ; doit avoir 3 props : `name`, `type` (forcément parmi les valeurs suivantes : `\'facebook\'`, `\'twitter-x\'`, `\'youtube\'`, `\'linkedin\'`, `\'instagram\'`)  et `url`',
    },
    titleTag: {
      control: 'text',
      description:
        'Permet de choisir la balise contenant le titre du composant (h3 par défaut)',
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
      name: 'Facebook',
      type: 'facebook',
      href: 'https://www.facebook.com',
    },
    {
      name: 'X (anciennement Twitter)',
      type: 'twitter-x',
      href: 'https://www.x.com',
    },
    {
      name: 'Youtube',
      type: 'youtube',
      href: 'https://www.youtube.com',
    },
    {
      name: 'Linkedin',
      type: 'linkedin',
      href: 'https://www.linkedin.com',
    },
    {
      name: 'Instagram',
      type: 'instagram',
      href: 'https://www.instagram.com',
    },
  ],
}
