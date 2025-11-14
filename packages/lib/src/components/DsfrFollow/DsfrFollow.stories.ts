import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, within } from 'storybook/test'

import DsfrFollow from './DsfrFollow.vue'

/**
 * [Voir quand l\'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux)
 */
const meta = {
  title: 'Composants/DsfrFollow',
  name: '',
  component: DsfrFollow,

  argTypes: {
    networks: {
      control: 'object',
      description:
        'Liste des différents réseaux sociaux ; doit avoir 3 props : `name`, `type` (forcément parmi les valeurs suivantes : `\'facebook\'`, `\'twitter-x\'`, `\'youtube\'`, `\'linkedin\'`, `\'instagram\'`)  et `href`',
    },
    newsletterData: {
      control: 'object',
      description:
        'Objet contenant en propriété les props attendues par DsfrNewsLetter',
    },
  },
} satisfies Meta<typeof DsfrFollow>

export default meta

type Story = StoryObj<typeof meta>

export const Suivre: Story = {
  args: {
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
    newsletterData: {
      title: 'Titre de la lettre d\'informations',
      description: 'Description de la lettre d\'informations',
      email: '',
      labelEmail: 'Label du champ adresse électronique',
      placeholder: 'james.bond@mi6.gov.uk',
      hintText: 'Mise en garde concernant l\'abonnement à la lettre d\'information',
      buttonText: 'S\'abonner',
      buttonTitle:
        'Titre du bouton (valeur de l\'attribut `title` de la balise `button`)',
      buttonAction: () => undefined,
      onlyCallout: false,
    },
  },
  render: (args) => ({
    components: { DsfrFollow },
    setup () {
      return { args }
    },
    template: `
    <DsfrFollow
      :networks="args.networks"
      :newsletter-data="args.newsletterData"
    />
  `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByText(Suivre.args.newsletterData.title)
    expect(title).toHaveClass('fr-follow__title')
    const newsletter = title.parentElement?.parentElement
    expect(newsletter).toHaveClass('fr-follow__newsletter')
    const follow = newsletter?.parentElement?.parentElement?.parentElement?.parentElement
    expect(follow).toHaveClass('fr-follow')
    const networks = canvas.getAllByRole('link')
    expect(networks).toHaveLength(5)

    let i = 0
    for (const network of networks) {
      expect(network).toHaveAttribute('title', Suivre.args.networks.at(i)?.name)
      expect(network).toHaveAttribute('href', Suivre.args.networks.at(i)?.href)
      i++
    }
  },
}
