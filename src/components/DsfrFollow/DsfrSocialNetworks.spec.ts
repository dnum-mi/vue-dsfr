import VIcon from '../VIcon/VIcon.vue'
import { render } from '@testing-library/vue'

import DsfrSocialNetworks from './DsfrSocialNetworks.vue'

describe('DsfrSocialNetworks', () => {
  it('should mount DsfrSocialNetworks with right content', () => {
    // Given
    const networks = [
      {
        name: 'Facebook',
        type: 'facebook',
        href: 'https://www.facebook.com',
      },
      {
        name: 'X (anciennement Twitter)',
        type: 'twitter-x',
        href: 'https://www.twitter.com',
      },
    ]

    // When
    const { container } = render(DsfrSocialNetworks, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        networks,
      },
    })
    const liElts = container.querySelectorAll('.fr-btn')
    const facebookIcon = container.querySelector('.fr-btn--facebook')
    const twitterIcon = container.querySelector('.fr-btn--twitter-x')

    // Then
    expect(liElts).toHaveLength(2)
    expect(facebookIcon).toBeInTheDocument()
    expect(twitterIcon).toBeInTheDocument()
  })
})
