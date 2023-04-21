import { fireEvent, render } from '@testing-library/vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'
// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrAccordion from './DsfrAccordion.vue'

describe('DsfrAccordion', () => {
  it('should render a simple accordion', async () => {
    const title = 'Intitulé de l’accordéon'
    const content = 'Contenu de l’accordéon'

    const { getByText, emitted } = render(DsfrAccordion, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        title,
        id: 'accordion-1',
        expandedId: undefined,
      },
      slots: {
        default: content,
      },
    })

    const titleEl = getByText(title)
    const contentEl = getByText(content)

    expect(contentEl).toHaveClass('fr-collapse')
    expect(contentEl).toHaveAttribute('id', 'accordion-1')
    expect(titleEl.parentNode).toHaveClass('fr-accordion__btn')
    expect(titleEl.parentNode.parentNode).toHaveClass('fr-accordion__title')
    expect(titleEl.parentNode.parentNode.parentNode).toHaveClass('fr-accordion')

    await fireEvent.click(titleEl.parentNode)

    expect(emitted()).toHaveProperty('expand')
    expect(emitted().expand).toStrictEqual([['accordion-1']])

    // Cannot test expandedId because Component is not wrapped in a listening Vue instance
  })
})
