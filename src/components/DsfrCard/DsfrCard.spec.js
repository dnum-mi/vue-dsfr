import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/vue'

import { createRouter, createWebHistory } from 'vue-router'

import DsfrCard from './DsfrCard.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: { template: '<div />' },
    },
    {
      path: '/path',
      name: 'One',
      component: { template: '<div />' },
    },
  ],
})

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrCard', () => {
  it('should render a nice card', async () => {
    // Given
    const detail = 'Détail'
    const link = '/path'
    const title = 'Qu’est-ce que le Pass Culture et comment l’obtenir ?'
    const description = `La carte donne des aperçus cliquables d’une page de contenu
    à l’utilisateur. Elle fait généralement partie d'une collection ou liste d’aperçus
    de contenu similaires. La carte n’est jamais présentée de manière isolée.`
    const imgSrc = 'https://placekitten.com/300/200'
    const altImg = 'Alternative text for image'

    // When

    const { getByText, getByTestId } = render(DsfrCard, {
      global: {
        plugins: [router],
        components: {
          VIcon,
        },
      },
      props: {
        altImg,
        detail,
        title,
        description,
        imgSrc,
        link,
      },
    })

    await router.isReady()

    const linkEl = getByTestId('fr-card')

    await fireEvent.click(linkEl)

    // Then
    expect(getByText(detail)).toHaveClass('fr-card__detail')
    expect(getByTestId('card-link')).toHaveClass('fr-card__link')
    expect(getByTestId('card-link')).toHaveAttribute('href', link)
    expect(getByTestId('fr-card')).toHaveClass('fr-card')
    expect(getByTestId('card-img')).toHaveAttribute('src', imgSrc)
    expect(getByTestId('card-img')).toHaveAttribute('alt', altImg)
  })
})
