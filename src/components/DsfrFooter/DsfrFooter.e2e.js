import DsfrFooter from './DsfrFooter.vue'
import DsfrFooterLinkList from './DsfrFooterLinkList.vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'
import '../../main.css'

const data = {
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
    title: 'Nos partenaires',
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

}
const ecosystemLinks = [{
  label: 'legifrance.gouv.fr',
  href: 'https://legifrance.gouv.fr',
},
{
  label: 'gouvernement.fr',
  href: 'https://gouvernement.fr',
},
{
  label: 'service-public.fr',
  href: 'https://service-public.fr',
},
{
  label: 'data.gouv.fr',
  href: 'https://data.gouv.fr',
},
]
const a11yCompliance = 'partiellement conforme'
const allLinks = [
  ...data.beforeMandatoryLinks,
  {
    label: `Accessibilité : ${a11yCompliance}`,
    to: '/a11y-conformite',
  },
  {
    label: 'Mentions légales',
    to: '/mentions-legales',
  },
  {
    label: 'Données personnelles',
    to: '/donnees-personnelles',
  },
  {
    label: 'Gestion des cookies',
    to: '/cookies',
  },
  ...data.afterMandatoryLinks,
]

const DsfrFooterWrapper = {
  components: { VIcon, DsfrFooter, DsfrFooterLinkList },

  data () {
    return data
  },

  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
    <DsfrFooter
      :a11y-compliance="a11yCompliance"
      :before-mandatory-links="beforeMandatoryLinks"
      :after-mandatory-links="afterMandatoryLinks"
      :ecosystem-links="ecosystemLinks"
      :logo-text="logoText"
      :legal-link="legalLink"
      :personal-data-link="personalDataLink"
      :cookies-link="cookiesLink"
      :a11y-compliance-link="a11yComplianceLink"
      :desc-text="descText"
      :home-link="homeLink"
      :partners="partners"
    >
      <template v-slot:footer-link-lists>
        <DsfrFooterLinkList
          class="fr-col-6"
          :category-name="categoryName1"
          :links="linkList1"
        />
        <DsfrFooterLinkList
          class="fr-col-6"
          :category-name="categoryName2"
          :links="linkList2"
        />
      </template>
      <template v-slot:description>
        <p>
          Un moteur de recherche qui respecte votre vie privée
          <a href="http://www.duckduckgo.com" class="fr-external-link">
            ici
            <VIcon name="ri-external-link-line" />
          </a>
        </p>
      </template>
    </DsfrFooter>
  </div>`,
}

describe('DsfrFooter', () => {
  it('should mount DsfrFooter', () => {
    cy.mount(DsfrFooterWrapper, {
      global: {
        components: {
          VIcon,
          DsfrFooter,
          DsfrFooterLinkList,
        },
      },
    })
      .get('.fr-footer')
      .should('be.visible')
      .find('.fr-footer__top')
      .should('be.visible')
      .find('.fr-container')
      .should('be.visible')
      .find('.fr-grid-row')
      .should('be.visible')
      .find('.fr-col-6')
      .should('be.visible')
      .should('contain', data.categoryName1)
      .should('contain', data.linkList1[0].label)
      .should('contain', data.linkList1[1].label)
      .should('contain', data.categoryName2)
      .should('contain', data.linkList2[0].label)
      .should('contain', data.linkList2[1].label)
      .get('.fr-footer__body')
      .should('be.visible')
      .find('.fr-footer__brand')
      .should('be.visible')
      .find('RouterLink')
      .should('have.attr', 'to', data.homeLink)
      .find('.fr-logo')
      .should('be.visible')
      .should('contain', data.logoText[0])
      .should('contain', data.logoText[1])
      .get('.fr-footer__content')
      .find('.fr-footer__content-desc')
      .should('contain', 'Un moteur de recherche qui respecte votre vie privée')
    let i = 1
    for (const ecosystemLink of ecosystemLinks) {
      cy.get('.fr-footer__content-list')
        .find(`li:nth-child(${i})`)
        .should('contain', ecosystemLink.label)
        .find('.fr-footer__content-link')
        .should('have.attr', 'href', ecosystemLink.href)
      i++
    }
    cy.get('.fr-footer__partners')
      .find('.fr-footer__partners-title')
      .should('contain', data.partners.title)
    cy.get('.fr-footer__partners-logos')
      .find('.fr-footer__partners-main')
      .find('.fr-footer__partners-link')
      .should('have.attr', 'href', data.partners.mainPartner.href)
      .find('.fr-footer__logo')
      .should('have.attr', 'src', data.partners.mainPartner.logo)
      .should('have.attr', 'alt', data.partners.mainPartner.name)
    i = 1
    for (const subPartner of data.partners.subPartners) {
      cy.get('.fr-footer__partners-sub')
        .find(`li:nth-child(${i})`)
        .find('.fr-footer__partners-link')
        .should('have.attr', 'href', subPartner.href)
        .find('.fr-footer__logo')
        .should('have.attr', 'src', subPartner.logo)
        .should('have.attr', 'alt', subPartner.name)
      i++
    }
    i = 1
    for (const link of allLinks) {
      cy.get(`li:nth-child(${i}) .fr-footer__bottom-link`)
        .should('have.attr', 'to', link.to)
        .should('contain', link.label)
      i++
    }
    cy.get('.fr-footer__bottom-copy')
      .should('be.visible')
  })
})
