import DsfrFollow from './DsfrFollow.vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'
import '../../main.css'

describe('DsfrFollow', () => {
  it('should mount DsfrFollow', () => {
    const networks = [
      {
        name: 'facebook',
        href: 'https://www.facebook.com',
      },
      {
        name: 'twitter',
        href: 'https://www.twitter.com',
      },
      {
        name: 'youtube',
        href: 'https://www.youtube.com',
      },
      {
        name: 'linkedin',
        href: 'https://www.linkedin.com',
      },
      {
        name: 'instagram',
        href: 'https://www.instagram.com',
      },
    ]
    cy.mount(DsfrFollow, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        networks,
      },
    })
    cy.get('.fr-follow')
      .should('be.visible')
      .find('.fr-container')
      .should('be.visible')
      .find('.fr-grid-row')
      .should('be.visible')
      .find('.fr-col-12')
      .should('be.visible')
      .find('.fr-follow__social')
      .should('be.visible')
      .find('li:first-child .fr-btn')
      .should('be.visible')
      .should('have.attr', 'title', networks[0].name)
      .should('have.attr', 'href', networks[0].href)

    cy.get('.fr-follow__social')
      .find('li:nth-child(2) .fr-btn')
      .should('be.visible')
      .should('have.attr', 'title', networks[1].name)
      .should('have.attr', 'href', networks[1].href)

    cy.get('.fr-follow__social')
      .find('li:nth-child(3) .fr-btn')
      .should('be.visible')
      .should('have.attr', 'title', networks[2].name)
      .should('have.attr', 'href', networks[2].href)

    cy.get('.fr-follow__social')
      .find('li:nth-child(4) .fr-btn')
      .should('be.visible')
      .should('have.attr', 'title', networks[3].name)
      .should('have.attr', 'href', networks[3].href)

    cy.get('.fr-follow__social')
      .find('li:nth-child(5) .fr-btn')
      .should('be.visible')
      .should('have.attr', 'title', networks[4].name)
      .should('have.attr', 'href', networks[4].href)
  })
})
