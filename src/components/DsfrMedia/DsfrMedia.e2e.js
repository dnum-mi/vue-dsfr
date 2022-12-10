import DsfrPicture from './DsfrPicture.vue'
import DsfrVideo from './DsfrVideo.vue'
import '../../main.css'

let size = 'medium'
let src = 'https://placekitten.com/300/200'
const alt = ''
let legend = 'Photographie d’un chaton'

describe('DsfrPicture', () => {
  it('should mount DsfrPicture', () => {
    cy.mount(DsfrPicture, {
      props: {
        size,
        src,
        alt,
        legend,
      },

    })
      .get('figure')
      .should('be.visible')
    cy.get('.fr-content-media__img')
      .find('.fr-responsive-img')
      .should('have.attr', 'src', src)
      .should('have.attr', 'alt', alt)
    cy.get('.fr-content-media__caption')
      .should('contain', legend)
  })
})

legend = 'Vidéo traitant du Service National Universel'
size = 'small'
src = 'https://www.youtube.com/embed/HyirpmPL43I'

describe('DsfrVideo', () => {
  it('should mount DsfrVideo', () => {
    cy.mount(DsfrVideo, {
      props: {
        size,
        src,
        legend,
      },

    })
    cy.get('.fr-content-media')
      .should('be.visible')
      .should('have.class', 'fr-content-media--sm')
      .find('.fr-responsive-vid')
      .should('have.class', 'fr-ratio-16x9')
    cy.get('.fr-content-media__caption')
      .should('contain', legend)
  })
})
