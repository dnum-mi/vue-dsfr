import DsfrSkipLinks from './DsfrSkipLinks.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/lien-d-evitement)
 */
export default {
  component: DsfrSkipLinks,
  title: 'Composants/DsfrSkipLinks',
  argTypes: {
    links: {
      control: 'object',
      description: 'Permet de passer le label du lien et l’id de l’élément html ciblée sous forme de tableau d’objets. Chaque objet aura 2 propriétés : `id` et `text`.',
    },
  },
}

export const LiensDEvitement = (args) => ({
  components: {
    DsfrSkipLinks,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
  <DsfrSkipLinks
  :links="links"
  />
  <h2 id="what">Qu'est-ce que le Lorem Ipsum?</h2>
    <p>Le <strong>Lorem Ipsum</strong> est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
  </div>
  <h2 id="why">Pourquoi l'utiliser?</h2>
  <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).</p>
  </div>
  `,

})

LiensDEvitement.args = {
  links: [
    {
      id: 'what',
      text: 'Allons à la question du pourquoi ?',
    },
    {
      id: 'why',
      text: 'Allons à la question du comment ?',
    },
  ],
}
