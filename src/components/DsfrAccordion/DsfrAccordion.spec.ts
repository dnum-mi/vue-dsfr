import { render } from '@testing-library/vue'
import VIcon from '../VIcon/VIcon.vue'
// import '@gouvfr/dsfr/dist/core/core.module.js'

import { ref } from 'vue'
import DsfrAccordion from './DsfrAccordion.vue'
import { registerTabKey } from './injection-key'

describe('DsfrAccordion', () => {
  it('should render a simple accordion', async () => {
    const title = 'Intitulé de l’accordéon'
    const content = 'Contenu de l’accordéon'

    const { getByText } = render(DsfrAccordion, {
      global: {
        components: {
          VIcon,
        },
        provide: {
          [registerTabKey as symbol]: () => ({
            isActive: ref(false),
            expand: () => {},
          }),
        },
      },
      props: {
        title,
        id: 'accordion-1',
      },
      slots: {
        default: content,
      },
    })

    const titleEl = getByText(title)
    const contentEl = getByText(content)

    expect(contentEl).toHaveClass('fr-collapse')
    expect(contentEl).toHaveAttribute('id', 'accordion-1')
    expect(titleEl).toHaveClass('fr-accordion__btn')
    expect(titleEl.parentNode).toHaveClass('fr-accordion__title')
    expect(titleEl.parentNode.parentNode).toHaveClass('fr-accordion')
  })
})
