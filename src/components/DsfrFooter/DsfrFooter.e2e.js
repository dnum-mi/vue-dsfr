import { mount } from '@cypress/vue'
import DsfrFooter from './DsfrFooter.vue'
import VIcon from '../../icons.js'
import '../../main.css'

describe('DsfrFooter', () => {
  it('should mount DsfrFooter', () => {
    mount(DsfrFooter, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        beforeMandatoryLinks: [{ label: 'Before', to: '/before' }],
        afterMandatoryLinks: [{ label: 'After', to: '/after' }],
        a11yCompliance: 'partiellement conforme',
        logoText: ['Pyramides', 'Babyloniennes'],
        legalLink: '/mentions-legales',
        personalDataLink: '/donnees-personnelles',
        cookiesLink: '/cookies',
        a11yComplianceLink: '/a11y-conformite',
        descText: 'Description',
        homeLink: '/',
        categoryName1: 'Nom de la categorie 1',
        linkList1: [
          { label: 'Lien 1.1', to: '/lien1/1' },
          { label: 'Lien 1.2', to: '/lien1/2' },
        ],
        categoryName2: 'Nom de la categorie 2',
        linkList2: [
          { label: 'Lien 2.1', to: '/lien2/1' },
          { label: 'Lien 2.2', to: '/lien 2/2' },
        ],
        partners: {
          mainPartner: {
            name: 'Partenaire principal',
            href: 'https://www.youtube.com',
            logo: 'https://placekitten.com/150/150',
            alt: 'Partenaire principal',
          },
          subPartners: [
            {
              name: 'Partenaire secondaire 1',
              href: 'https://www.youtube.com',
              logo: 'https://placekitten.com/145/151',
              alt: 'Partenaire secondaire 1',
            },
            {
              name: 'Partenaire secondaire 2',
              href: 'https://www.youtube.com',
              logo: 'https://placekitten.com/150/152',
              alt: 'Partenaire secondaire 2',
            },
          ],
        },
      },
    })
      .get('.fr-footer')
      .should('be.visible')
  })
})
