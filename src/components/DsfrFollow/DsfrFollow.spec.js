import { render } from '@testing-library/vue'

import DsfrSocialNetworks from './DsfrSocialNetworks.vue'

const VIcon = { name: 'v-icon', props: ['name'], template: '<div :class="name"></div>' }

describe('DsfrSocialNetworks', () => {
  it('should mount DsfrSocialNetworks with right content', () => {
    // Given
    const networks = [
      {
        name: 'facebook',
        href: 'https://www.facebook.com',
      },
      {
        name: 'twitter',
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
    const liElts = container.querySelectorAll('.fr-link')
    const facebookIcon = container.querySelector('.fr-link--facebook')
    const twitterIcon = container.querySelector('.fr-link--twitter')

    // Then
    expect(liElts).toHaveLength(2)
    expect(facebookIcon).toBeInTheDocument()
    expect(twitterIcon).toBeInTheDocument()
  })
})