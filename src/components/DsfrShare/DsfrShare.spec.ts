import { render } from '@testing-library/vue'

import DsfrShare from './DsfrShare.vue'

describe('DsfrShare', () => {
  it('should render a DsfrShare component', () => {
    const title = 'Titre du partage'
    const copyLabel = 'Label de la copie dans le presse-papier'
    const mail = {
      to: 'mailto:?subject=[À MODIFIER - objet du mail]&body=[À MODIFIER - titre ou texte descriptif de la page] [À MODIFIER - url de la page]',
      label: 'Partager par mail personnalisé',
    }
    const networks = [
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
        name: 'linkedIn',
        label: 'Partager sur LinkedIn',
        url: 'https://www.linkedin.com/shareArticle?url=[À MODIFIER - url de la page]&title=[À MODIFIER - titre ou texte descriptif de la page]',
      },
    ]

    const { getByText } = render(DsfrShare, {
      props: {
        copyLabel,
        mail,
        networks,
        title,
      },
    })

    getByText(title)

    for (const network of networks) {
      const link = getByText(network.label)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      expect(link).toHaveAttribute('title', `${network.label} - nouvelle fenêtre`)
    }

    const mailToLinkElement = getByText(mail.label)
    expect(mailToLinkElement).toHaveAttribute('title', mail.label)
    expect(mailToLinkElement).toHaveAttribute('href', mail.to)

    const copyButtonElement = getByText(copyLabel)
    expect(copyButtonElement).toHaveAttribute('title', copyLabel)
  })
})
