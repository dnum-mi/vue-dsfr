import DsfrSkipLinks from './DsfrSkipLinks.vue'
import '../../main.css'

const SkipLinksWrapper = {
  components: {
    DsfrSkipLinks,
  },

  data () {
    return {
      links: [
        {
          id: 'content',
          text: 'Accéder au contenu',
        },
      ],
    }
  },

  template: `
    <DsfrSkipLinks
        :links="links"
    />
    <main id="content" tabindex="0">
      <h2>Qu'est-ce que le Lorem Ipsum?</h2>
      <p>Le <strong>Lorem Ipsum</strong> est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
    </main>
  `,
}

describe('DsfrSkipLinks', () => {
  it('should mount a skip link and let main element take the focus', () => {
    cy.mount(SkipLinksWrapper)
      .get('a')
      .contains('Accéder au contenu')
      .click({ force: true })

    cy.get('main#content')
      .should('have.focus')
  })
})
