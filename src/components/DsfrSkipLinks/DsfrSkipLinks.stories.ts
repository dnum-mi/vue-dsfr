import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, userEvent, within } from 'storybook/test'

import DsfrSkipLinks from './DsfrSkipLinks.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lien-d-evitement)
 */
const meta = {
  component: DsfrSkipLinks,
  title: 'Composants/DsfrSkipLinks',
  argTypes: {
    links: {
      control: 'object',
      description: `Permet de passer le label du lien et l’id de l’élément html ciblée sous forme de tableau d’objets.
        Chaque objet aura 2 propriétés : \`id\` et \`text\`. <br/> Il est primordial que les éléments ciblés par les
        liens d’évitements puissent recevoir le focus (si ce n’est pas le cas nativement, ajouter \`tabindex="0"\`)`,
    },
  },
} satisfies Meta<typeof DsfrSkipLinks>

export default meta

type Story = StoryObj<typeof meta>

export const LiensDEvitement: Story = {
  render: (args) => ({
    components: {
      DsfrSkipLinks,
    },

    setup () {
      return {
        args,
      }
    },

    template: `
  <DsfrSkipLinks
  :links="args.links"
  />
  <section id="what" tabindex="0">
    <h2>{{ args.title }}</h2>
    <p>Le <strong>Lorem Ipsum</strong> est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
    <p>Le <strong>Lorem Ipsum</strong> est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
    <p>Le <a href="#">Lorem Ipsum</a> est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
  </section>
  <section id="how" tabindex="0">
    <h2>Pourquoi l'utiliser?</h2>
    <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).</p>
    <p>Le <a href="#">Lorem Ipsum</a> est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>
  </section>
  `,
  }),
  args: {
    links: [
      {
        id: 'what',
        text: 'Allons à la question du qu’est-ce ?',
      },
      {
        id: 'how',
        text: 'Allons à la question du pourquoi ?',
      },
    ],
    title: 'Qu’est-ce que le Lorem Ipsum ?',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const title = canvas.getAllByRole('heading', { level: 2 }).at(0) as HTMLHeadingElement
    const lien1 = canvas.getByText('Allons à la question du qu’est-ce ?')
    const lien2 = canvas.getByText('Allons à la question du comment ?')
    expect(lien1).not.toBeVisible()
    expect(lien2).not.toBeVisible()
    title.click()
    await userEvent.tab({ shift: true })
    await userEvent.tab({ shift: true })
    await userEvent.tab({ shift: true })
    await userEvent.tab({ shift: true })
    await userEvent.tab({ shift: true })
    expect(lien2).toHaveFocus()
  },
}
