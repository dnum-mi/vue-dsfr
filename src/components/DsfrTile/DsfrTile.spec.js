import { render } from '@testing-library/vue'
import { createRouter, createWebHistory } from 'vue-router'

import DsfrTile from './DsfrTile.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'One',
      component: { template: '<div />' },
    },
  ],
})

describe('DsfrTile', () => {
  it('should display a vertical tile', async () => {
    const title = 'Titre de la tuile'
    const imgSrc = 'https://placekitten.com/80/80'
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol'

    const { getByText } = render(DsfrTile, {
      global: {
        plugins: [router],
      },
      props: {
        title,
        imgSrc,
        description,
        to: 'https://placekitten.com/80/80',
      },
    })

    await router.isReady()

    const titleEl = getByText(title)
    const descriptionEl = getByText(description)

    expect(titleEl.parentElement.parentElement.parentElement).not.toHaveClass('fr-tile--horizontal')
    expect(descriptionEl).toHaveClass('fr-tile__desc')
  })

  it('should display a horizontal tile', async () => {
    const title = 'Titre de la tuile'
    const imgSrc = 'https://placekitten.com/80/80'
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol'
    const horizontal = true

    const { getByText } = render(DsfrTile, {
      global: {
        plugins: [router],
      },
      props: {
        title,
        imgSrc,
        description,
        horizontal,
        to: 'https://placekitten.com/80/80',
      },
    })

    await router.isReady()

    const titleEl = getByText(title)
    const descriptionEl = getByText(description)

    expect(titleEl.parentNode.parentNode.parentNode).toHaveClass('fr-tile--horizontal')
    expect(descriptionEl).toHaveClass('fr-tile__desc')
  })
})
