import { render } from '@testing-library/vue'

import VIcon from '../VIcon/VIcon.vue'

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
      {
        name: 'Bluesky',
        type: 'bluesky',
        href: 'https://bsky.app',
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
    const blueskyIcon = container.querySelector('.fr-btn--bluesky')

    // Then
    expect(liElts).toHaveLength(3)
    expect(facebookIcon).toBeInTheDocument()
    expect(twitterIcon).toBeInTheDocument()
    expect(blueskyIcon).toBeInTheDocument()
  })
})
