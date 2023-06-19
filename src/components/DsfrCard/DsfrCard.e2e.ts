import { OhVueIcon as VIcon } from 'oh-vue-icons'
import DsfrCard from './DsfrCard.vue'
import '../../main.css'

const RouterLink = {
  props: {
    to: {
      type: String,
      default: '',
    },
  },
  template: `
    <a :href="to">
      <slot />
    </a>
  `,
}

// app.use(createRouter({ history: createWebHistory(''), routes: [] }))

describe('DsfrCard', () => {
  it('should mount DsfrCard', () => {
    const imgSrc = 'https://placekitten.com/500/300'
    const link = 'https://www.systeme-de-design.gouv.fr/'
    const title = 'Le GROS titre'
    const description = 'La GROSSE description'
    const detail = 'LE détail'

    cy.mount(DsfrCard, {
      global: {
        components: {
          RouterLink,
          VIcon,
        },
      },
      props: {
        imgSrc,
        link,
        title,
        description,
        detail,
      },
    })
      .get('.fr-card')
      .should('be.visible')
      .get('.fr-card__body')
      .should('be.visible')
      .get('.fr-card__title')
      .should('be.visible')
      .get('.fr-card__link')
      .should('be.visible')
      .should('have.attr', 'href', link)
      .should('contain', title)
      .get('.fr-card__desc')
      .should('be.visible')
      .should('contain', description)
      .get('.fr-card__detail')
      .should('be.visible')
      .should('contain', detail)
      .get('.fr-card__img')
      .should('be.visible')
      .get('img')
      .should('have.attr', 'src', imgSrc)
  })
})
