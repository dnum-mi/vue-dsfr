import { render } from '@testing-library/vue'
import DsfrSkipLinks from './DsfrSkipLinks.vue'

describe('DsfrSkipLinks', () => {
  it('should render skip links', () => {
    const id2 = 'id2'
    const text2 = 'Texte du deuxième lien'

    const links = [
      {
        id: '1',
        text: 'Texte 1',
      },
      {
        id: id2,
        text: text2,
      },
      {
        id: '3',
        text: 'Texte 3',
      },
    ]

    const { container, getByRole } = render(DsfrSkipLinks, {
      props: {
        links,
      },
    })

    const navEl = getByRole('navigation')

    expect(navEl.tagName).toBe('NAV')
    expect(navEl.parentElement).toHaveClass('fr-skiplinks')
    expect(navEl.firstElementChild).toHaveClass('fr-skiplinks__list')

    expect(container.querySelectorAll('li')).toHaveLength(3)
    expect(container.querySelectorAll('a')).toHaveLength(3)
    expect(container.querySelectorAll('a')[1].href).toContain(`#${id2}`)
    expect(container.querySelectorAll('a')[1].innerHTML).toBe(text2)

    for (const link of container.querySelectorAll('a')) {
      expect(link).toHaveClass('fr-link')
    }
  })
})
