import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { ref } from 'vue'

import DsfrTags from './DsfrTags.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tag)
 */
const meta = {
  component: DsfrTags,
  title: 'Composants/DsfrTags',
  tags: ['chip'],
  argTypes: {
    label: {
      control: 'text',
      description: '**Texte** du tag',
    },
    disabled: {
      control: 'boolean',
      description: 'Indique si le tag est **inactivé**',
    },
    selected: {
      control: 'boolean',
      description: 'Indique si le tag est **selectionné**',
    },
    icon: {
      control: 'text',
      description:
        '**Nom de l’icône** (tel que sur le site [RemixIcon](https://remixicon.com), exemple: `"ri-checkbox-circle-line"`) à afficher à côté du texte du bouton.\n\n Par défaut, l’icône est',
    },
    iconOnly: {
      control: 'boolean',
      description:
        'Indique si l’icône doit apparaître seule (le `label` sera dans l’attribut `aria-label` de l’icône)',
    },
    link: {
      control: 'text',
      description:
        'URL complète pour un lien externe, ou chaîne de caractère ou objet à donner à `to` de `RouterLink` pour un lien interne',
    },
    small: {
      control: 'boolean',
      description: 'Indique si le tag doit être petit',
    },
    tagName: {
      control: 'text',
      description: `Balise ou composant à utiliser (e.g. : \`"p"\`, \`"button"\`, \`"strong"\`, \`"em"\`).
- \`"p"\` par défaut
- si \`link\` est indiqué, le défaut est \`"a"\` si le lien est externe et \`"RouterLink"\`  si le lien est interne
- si \`disabled\` est à \`true\` et qu’il n’y a pas de lien, le défaut est \`"button".\`
      `,
    },
    tags: {
      control: 'object',
      description:
        'Tableau d\'objets à passer à `DsfrTags` (avec un « s »), chaque objet pourra contenir toutes les props à passer à `DsfrTag` (sans « s »)',
    },
  },
} as Meta<typeof DsfrTags>

export default meta
type Story = StoryObj<typeof meta>

const tags = [
  [
    { label: 'Tag sans icône' },
    { label: 'Tag avec icône', icon: 'ri-arrow-right-line' },
  ],
  [
    { label: 'Petit tag sans icône', small: true },
    { label: 'Petit tag avec icône', icon: 'ri-arrow-right-line', small: true },
  ],
  [
    { label: 'Tag cliquable sans icône', link: 'https://storybook.vue-ds.fr' },
    {
      label: 'Tag cliquable avec icône',
      icon: 'ri-arrow-right-line',
      link: 'https://storybook.vue-ds.fr',
    },
  ],
  [
    {
      label: 'Petit tag cliquable sans icône',
      small: true,
      link: 'https://storybook.vue-ds.fr',
    },
    {
      label: 'Petit tag cliquable avec icône',
      icon: 'ri-arrow-right-line',
      small: true,
      link: 'https://storybook.vue-ds.fr',
    },
  ],
  [
    { label: 'Tag sélectionné sans icône', tagName: 'button', selected: true },
    {
      label: 'Tag sélectionné avec icône',
      icon: 'ri-arrow-right-line',
      tagName: 'button',
      selected: true,
    },
  ],
  [
    { label: 'Tag fermable 1', class: 'fr-tag--dismiss', tagName: 'button' },
    { label: 'Tag fermable 2', class: 'fr-tag--dismiss', tagName: 'button' },
    { label: 'Tag fermable 3', class: 'fr-tag--dismiss', tagName: 'button' },
  ],
]

export const GroupeDEtiquettes: Story = {
  name: 'Groupe d\'étiquettes avec contrôles',
  args: {
    tags: tags[0],
  },
  render: (args) => ({
    components: { DsfrTags },
    setup () {
      return { args }
    },
    template: `
      <DsfrTags :tags="args.tags" />
    `,
  }),
}

export const EtiquettesSimples: Story = {
  args: {
    tags: tags[0],
  },
  render: (args) => ({
    components: { DsfrTags },
    setup () {
      return { args }
    },
    template: `
      <DsfrTags :tags="args.tags" />
    `,
  }),
}

export const EtiquettesSimplesPetites: Story = {
  args: {
    tags: tags[1],
  },
  render: (args) => ({
    components: { DsfrTags },
    setup () {
      return { args }
    },
    template: `
      <DsfrTags :tags="args.tags" />
    `,
  }),
}

export const EtiquettesCliquables: Story = {
  args: {
    tags: tags[2],
  },
  render: (args) => ({
    components: { DsfrTags },
    setup () {
      return { args }
    },
    template: `
      <DsfrTags :tags="args.tags" />
    `,
  }),
}

export const EtiquettesCliquablesPetites: Story = {
  args: {
    tags: tags[3],
  },
  render: (args) => ({
    components: { DsfrTags },
    setup () {
      return { args }
    },
    template: `
      <DsfrTags :tags="args.tags" />
    `,
  }),
}

export const EtiquettesSelectionnables: Story = {
  args: {
    tags: tags[4],
  },
  render: (args) => ({
    components: { DsfrTags },
    setup () {
      const tagsRef = ref<any[]>(
        args.tags.map((tag: any, idx) => ({
          ...tag,
          onClick: () => {
            const clickedTag = tagsRef.value[idx]
            clickedTag.selected = !clickedTag.selected
          },
        })),
      )

      return {
        tags: tagsRef,
      }
    },
    template: `
      <DsfrTags :tags="tags" />
    `,
  }),
}

export const EtiquettesFermables: Story = {
  args: {
    tags: tags[5],
  },
  render: (args) => ({
    components: { DsfrTags },
    setup () {
      const tagsRef = ref<any[]>([])
      const closedTags = ref<any[]>([])

      let addClickHandlers: (tagsList: any[]) => any[]

      const resetTags = () => {
        // mettre tous les éléments de closedTags dans tagsRef
        tagsRef.value = addClickHandlers(closedTags.value)
        // et réinitialiser closedTags à tableau vide
        closedTags.value = []
      }

      addClickHandlers = (tagsList: any[]) => {
        return tagsList.map((tag, idx) => ({
          ...tag,
          onClick: () => {
            // Récupérer le tag sur lequel on vient de cliquer
            const clickedTag = tagsRef.value[idx]
            // Le retirer du tableau tagsRef.value : recréer un nouveau tableau SANS l'élément
            const newTags = tagsRef.value.filter((_tag, i) => i !== idx)
            tagsRef.value = addClickHandlers(newTags)
            // L'ajouter dans closedTags
            closedTags.value = [...closedTags.value, clickedTag]

            // Si tagsRef.value n'a plus d'éléments,
            if (tagsRef.value.length === 0) {
              // attendre 1 seconde, et réinitialiser les étiquettes de la story
              setTimeout(resetTags, 1000)
            }
          },
        }))
      }

      tagsRef.value = addClickHandlers(args.tags)

      return {
        tags: tagsRef,
      }
    },
    template: `
      <DsfrTags :tags="tags" />
    `,
  }),
}
