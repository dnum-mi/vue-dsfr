import { render } from '@testing-library/vue'
import { createRouter, createWebHistory } from 'vue-router'

import DsfrTiles from './DsfrTiles.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: { template: '<div />' },
    },
    {
      path: '/one',
      name: 'One',
      component: { template: '<div />' },
    },
    {
      path: '/two',
      name: 'Two',
      component: { template: '<div />' },
    },
  ],
})

describe('DsfrTiles', () => {
  it('should display two vertical tiles', async () => {
    const title1 = 'Titre de la tuile 1'
    const title2 = 'Titre de la tuile 2'
    const imgSrc1 = 'https://placekitten.com/80/81'
    const imgSrc2 = 'https://placekitten.com/80/82'
    const description1 = 'Description 1'
    const description2 = 'Description 2'

    const tiles = [
      {
        title: title1,
        imgSrc: imgSrc1,
        description: description1,
        containerClass: 'container-class-1',
        to: '/one',
      },
      {
        title: title2,
        imgSrc: imgSrc2,
        description: description2,
        containerClass: 'container-class-2',
        to: '/two',
      },
    ]

    const { getByText } = render(DsfrTiles, {
      global: {
        plugins: [router],
      },
      props: {
        tiles,
      },
    })

    await router.isReady()

    const titleEl = getByText(title1)
    const descriptionEl = getByText(description1)

    expect(titleEl.parentNode.parentNode.parentNode).not.toHaveClass('fr-tile--horizontal')
    expect(descriptionEl).toHaveClass('fr-tile__desc')
  })

  it('should display 2 horizontal tiles', async () => {
    const title1 = 'Titre de la tuile 1'
    const title2 = 'Titre de la tuile 2'
    const imgSrc1 = 'https://placekitten.com/80/81'
    const imgSrc2 = 'https://placekitten.com/80/82'
    const description1 = 'Description 1'
    const description2 = 'Description 2'
    const horizontal = true

    const tiles = [
      {
        title: title1,
        imgSrc: imgSrc1,
        description: description1,
        to: '/one',
      },
      {
        title: title2,
        imgSrc: imgSrc2,
        description: description2,
        to: '/two',
      },
    ]

    const { getByText } = render(DsfrTiles, {
      global: {
        plugins: [router],
      },
      props: {
        tiles,
        horizontal,
      },
    })

    await router.isReady()

    const titleEl = getByText(title1)
    const descriptionEl = getByText(description2)

    expect(titleEl.parentNode.parentNode.parentNode).toHaveClass('fr-tile--horizontal')
    expect(descriptionEl).toHaveClass('fr-tile__desc')
  })
  it('should display 1 disabled and 1 enabled tile', async () => {
    const title1 = 'Titre de la tuile 1'
    const title2 = 'Titre de la tuile 2'
    const imgSrc1 = 'https://placekitten.com/80/81'
    const imgSrc2 = 'https://placekitten.com/80/82'
    const description1 = 'Description 1'
    const description2 = 'Description 2'

    const tiles = [
      {
        title: title1,
        imgSrc: imgSrc1,
        description: description1,
        disabled: true,
        to: '/one',
      },
      {
        title: title2,
        imgSrc: imgSrc2,
        description: description2,
        to: '/two',
      },
    ]

    const { getByText } = render(DsfrTiles, {
      global: {
        plugins: [router],
      },
      props: {
        tiles,
      },
    })

    await router.isReady()

    const titleEl1 = getByText(title1)
    const titleEl2 = getByText(title2)
    expect(titleEl1.parentNode.parentNode.parentNode).toHaveClass('fr-tile--disabled')
    expect(titleEl2.parentNode.parentNode.parentNode).not.toHaveClass('fr-tile--disabled')
  })
})
