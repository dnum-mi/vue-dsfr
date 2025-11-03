import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, within } from 'storybook/test'

import DsfrBreadcrumb from './DsfrBreadcrumb.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/fil-d-ariane)
 */
const meta = {
  component: DsfrBreadcrumb,
  title: 'Composants/DsfrBreadcrumb',
  argTypes: {
    links: {
      control: 'object',
      description:
        'Tableau d\'objets, chaque objet contiendra 2 propriétés : `to` avec le lien et `text` avec le texte à afficher',
    },
    breadcrumbId: {
      control: 'text',
      description:
        'Id de la balise `div` à l\'intérieur de la balise `nav` du fil d\'Ariane',
    },
    navigationLabel: {
      control: 'text',
      description: 'Label affiché sur la balise `nav` du fil d\'Ariane',
    },
    showBreadcrumbLabel: {
      control: 'text',
      description: 'Label du bouton d\'affichage du fil d\'Ariane',
    },
  },
} satisfies Meta<typeof DsfrBreadcrumb>

export default meta

type Story = StoryObj<typeof meta>

const secondLinkText = 'Lien deux'
const currentPageText = 'Lien 3 avec plein de texte et patati et patata'

const links = [
  {
    to: '/lien-1',
    text: 'Lien 1',
  },
  {
    to: '/lien-2',
    text: secondLinkText,
  },
  {
    text: currentPageText,
  },
]

export const FilDAriane: Story = {
  args: {
    links,
  },
  render: (args) => ({
    components: { DsfrBreadcrumb },
    setup () {
      return { args }
    },
    template: `
      <DsfrBreadcrumb
        :links="args.links"
      />
    `,
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const breadcrumb1 = canvas.getByText(args.links?.at(0)?.text as string)
    expect(breadcrumb1).toBeVisible()
    expect(breadcrumb1).toHaveProperty('href')
    expect(breadcrumb1).not.toHaveAttribute('aria-current', 'page')
    const breadcrumb2 = canvas.getByText(args.links?.at(1)?.text as string)
    expect(breadcrumb2).toBeVisible()
    expect(breadcrumb2).toHaveAttribute('href')
    expect(breadcrumb2.href).toContain(args.links?.at(1)?.to)
    expect(breadcrumb2).not.toHaveAttribute('aria-current', 'page')
    const breadcrumb3 = canvas.getByText(args.links?.at(2)?.text as string)
    expect(breadcrumb3).toBeVisible()
    expect(breadcrumb3).not.toHaveAttribute('href')
    expect(breadcrumb3).toHaveAttribute('aria-current', 'page')
  },
}
