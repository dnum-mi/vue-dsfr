import { mountSuspended } from '@nuxt/test-utils/runtime'

import Apropos from './apropos.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('apropos', () => {
  it('should render a simple title', async () => {
    const title = 'À propos'

    const component = await mountSuspended(Apropos, {
      global: {
        components: {
          VIcon,
        },
      },
    })

    expect(component.find('h1').text()).toBe(title)
    expect(component.find('h1').element).toHaveClass('fr-mt-4w')
  })
})
