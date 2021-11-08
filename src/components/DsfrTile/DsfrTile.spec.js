import { render } from '@testing-library/vue'

import DsfrTile from './DsfrTile.vue'

describe('DsfrTile', () => {
  it('should display a tile', () => {
    const title = 'Titre de la tuile'
    const imgSrc = 'https://placekitten.com/80/80'
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol'

    const { getByText } = render(DsfrTile, {
      props: {
        title,
        imgSrc,
        description,
        to: 'https://placekitten.com/80/80',
      },
    })

    const titleEl = getByText(title)
    const descriptionEl = getByText(description)

    expect(titleEl.parentNode.parentNode.parentNode).not.toHaveClass('fr-tile--horizontal')
    expect(descriptionEl).toHaveClass('fr-tile__desc')
  })

  it('should display a tile', () => {
    const title = 'Titre de la tuile'
    const imgSrc = 'https://placekitten.com/80/80'
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol'
    const horizontal = true

    const { getByText } = render(DsfrTile, {
      props: {
        title,
        imgSrc,
        description,
        horizontal,
        to: 'https://placekitten.com/80/80',
      },
    })

    const titleEl = getByText(title)
    const descriptionEl = getByText(description)

    expect(titleEl.parentNode.parentNode.parentNode).toHaveClass('fr-tile--horizontal')
    expect(descriptionEl).toHaveClass('fr-tile__desc')
  })
})
