import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/vue'

import VIcon from '../VIcon/VIcon.vue'

import DsfrCallout from './DsfrCallout.vue'

describe('DsfrCallout', () => {
  it('should display a callout', () => {
    const title = 'Titre de la mise en avant'
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol'
    const accent = 'orange-terre-battue'
    const icon = 'fr-icon-alarm-warning-line'
    const button = { label: 'label bouton' }

    const { getByText, container } = render(DsfrCallout, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        title,
        content,
        accent,
        icon,
        button,
      },
    })

    const calloutEl = container.querySelector('.fr-callout')
    const titleEl = getByText(title)
    const contentEl = getByText(content)
    const buttonEl = container.querySelector('.fr-btn')

    expect(calloutEl?.className).toContain(`fr-callout--${accent}`)
    expect(calloutEl?.className).toContain(icon)
    expect(titleEl.className).toContain('fr-callout__title')
    expect(contentEl.className).toContain('fr-callout__text')
    expect(buttonEl?.innerHTML).toContain(button.label)
  })
})
