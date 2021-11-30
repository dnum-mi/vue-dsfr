import { fireEvent, render } from '@testing-library/vue'

import DsfrAccordion from './DsfrAccordion.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

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
      },
      slots: {
        default: content,
      },
    })

    const titleEl = getByText(title)
    const contentEl = getByText(content)

    expect(contentEl).not.toHaveClass('fr-collapse--expanded')

    await fireEvent.click(titleEl)

    expect(titleEl.parentNode).toHaveClass('fr-accordion__btn')
    expect(titleEl.parentNode.parentNode).toHaveClass('fr-accordion__title')
    expect(titleEl.parentNode.parentNode.parentNode).toHaveClass('fr-accordion')
    expect(contentEl).toHaveClass('fr-collapse--expanded')
    expect(contentEl).toHaveClass('fr-collapse')
  })
})
