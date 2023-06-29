import { OhVueIcon as VIcon } from 'oh-vue-icons'
import { render } from '@testing-library/vue'

// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrCallout from './DsfrCallout.vue'

describe('DsfrCallout', () => {
  it('should display a callout without a button', () => {
    const title = 'Titre de la mise en avant'
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol'

    const { getByText } = render(DsfrCallout, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        title,
        content,
      },
    })

    const titleEl = getByText(title)
    const contentEl = getByText(content)

    expect(titleEl).toHaveClass('fr-callout__title')
    expect(contentEl).toHaveClass('fr-callout__text')
  })
})
