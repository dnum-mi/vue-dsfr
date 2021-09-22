import { render } from '@testing-library/vue'

import DsfrFollow, { brandIcons } from './DsfrFollow.vue'

const VIcon = { name: 'v-icon', props: ['name'], template: '<div :class="name"></div>' }

describe('DsfrFollow', () => {
  it('should mount DsfrFollow with right content', () => {
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
    const { container } = render(DsfrFollow, {
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
    const facebookIcon = container.querySelector('.' + brandIcons.facebook)
    const twitterIcon = container.querySelector('.' + brandIcons.twitter)

    // Then
    expect(liElts).toHaveLength(2)
    expect(facebookIcon).toBeInTheDocument()
    expect(twitterIcon).toBeInTheDocument()
  })
})
