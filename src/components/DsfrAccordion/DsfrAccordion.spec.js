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
        expandedId: undefined,
      },
      slots: {
        default: content,
      },
    })

    const titleEl = getByText(title)
    const contentEl = getByText(content)

    expect(contentEl).toHaveClass('fr-collapse')
    expect(titleEl.parentNode).toHaveClass('fr-accordion__btn')
    expect(titleEl.parentNode.parentNode).toHaveClass('fr-accordion__title')
    expect(titleEl.parentNode.parentNode.parentNode).toHaveClass('fr-accordion')

    await fireEvent.click(titleEl)
    // need to wait RAF
    await (new Promise(resolve => setTimeout(resolve, 100)))

    expect(contentEl).toHaveClass('fr-collapse--expanded')
  })
})
