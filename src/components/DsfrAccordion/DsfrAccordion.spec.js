import { fireEvent, render } from '@testing-library/vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'
// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrAccordion from './DsfrAccordion.vue'

describe('DsfrAccordion', () => {
  it('should render a simple accordion', async () => {
    const title = 'Intitulé de l’accordéon'
    const content = 'Contenu de l’accordéon'

    const { getByText } = render(DsfrAccordion, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        title,
        id: '1',
        expandedId: '1',
      },
      slots: {
        default: content,
      },
    })

    const titleEl = getByText(title)
    const contentEl = getByText(content)

    await fireEvent.click(titleEl)

    expect(titleEl.parentNode).toHaveClass('fr-accordion__btn')
    expect(titleEl.parentNode.parentNode).toHaveClass('fr-accordion__title')
    expect(titleEl.parentNode.parentNode.parentNode).toHaveClass('fr-accordion')
    expect(contentEl).toHaveClass('fr-collapse--expanded')
    expect(contentEl).toHaveClass('fr-collapse')
  })
})
