import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { fn } from 'storybook/test'
import { ref } from 'vue'

import DsfrNavigation from './DsfrNavigation.vue'
import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMegaMenu from './DsfrNavigationMegaMenu.vue'

const meta = {
  component: DsfrNavigationMegaMenu,
  title: 'Composants/DsfrNavigationMegaMenu',
  argTypes: {
    title: {
      control: 'text',
      description: 'Intitulé du menu',
    },
    description: {
      control: 'text',
      description: 'Description au méga menu',
    },
    link: {
      control: 'object',
      description:
        'Permet de définir un lien vers une page associée. C’est un objet qui contiendra les props attendues par <a href="/?path=/docs/composants-dsfrnavigationmenulink--docs">DsfrNavigationMenuLink</a>',
    },
    menus: {
      control: 'object',
      description:
        'Liste des catégories au sein du méga menu via un tableau. Chaque objet de ce tableau contiendra les props attendues par <a href="/?path=/docs/composants-dsfrnavigationmegamenucategory--docs">DsfrNavigationMegaMenuCategory</a>',
    },
    expandedId: {
      control: 'text',
      description:
        'Indique l’id de l’élément "ouvert" ou "déplié" dans le menu. Permet au composant de savoir s’il doit être déplié (si `expandedId` est identique à son `id`) ou non (si `expandedId` est différent de son `id`)',
    },
    id: {
      control: 'text',
      description:
        '(Optionnel) Valeur de l’attribut `id` de ce sous-menu. *N.B. : Il est recommandé de ne pas le donner, la bibliothèque lui en donnera un pseudo-aléatoire*.',
    },
    active: {
      control: 'boolean',
      description:
        '(Optionnel) Est-ce que le menu doit être actif ou non (met l’attribut `aria-current` à la valeur `true`). Par défaut, il est inactif.',
    },
    onToggleId: fn(),
  },
  render: (args) => ({
    components: {
      DsfrNavigationMegaMenu,
      DsfrNavigation,
      DsfrNavigationItem,
    },
    setup () {
      const expandedId = ref(args.expandedId)

      function toggle (id: string) {
        if (id === expandedId.value) {
          expandedId.value = undefined
        } else {
          expandedId.value = id
        }
        args.onToggleId(id)
      }

      return {
        args,
        expandedId,
        toggle,
      }
    },
    template: `
    <DsfrNavigation>
      <DsfrNavigationItem>
        <DsfrNavigationMegaMenu
          :title="args.title"
          :description="args.description"
          :link="args.link"
          :menus="args.menus"
          :expanded-id="expandedId"
          @toggle-id="toggle"
        />
      </DsfrNavigationItem>
    </DsfrNavigation>
  `,
  }),
} satisfies Meta<typeof DsfrNavigationMegaMenu>

export default meta
type Story = StoryObj<typeof meta>

export const MegaMenu: Story = {
  name: 'Mega menu',
  args: {
    title: 'Titre de MEGA MENU',
    expandedId: undefined,
    description: 'Un charmant MEGA MENU',
    onToggleId: fn(),
    link: {
      to: '#',
      text: 'Aller à la rubrique du MEGA MENU',
    },
    menus: [
      {
        title: 'Nom de catégorie 1',
        links: [
          {
            text: 'Lien 1',
            to: '#',
          },
          {
            text: 'Lien 2',
            to: '#',
          },
          {
            text: 'Lien 3',
            to: '#',
          },
          {
            text: 'Lien 4',
            to: '#',
          },
          {
            text: 'Lien 5',
            to: '#',
          },
        ],
      },
      {
        title: 'Nom de catégorie 2',
        links: [
          {
            text: 'Lien 1',
            to: '#',
          },
          {
            text: 'Lien 2',
            to: '#',
          },
          {
            text: 'Lien 3',
            to: '#',
          },
          {
            text: 'Lien 4',
            to: '#',
          },
          {
            text: 'Lien 5',
            to: '#',
          },
        ],
      },
      {
        title: 'Nom de catégorie 3',
        links: [
          {
            text: 'Lien 1',
            to: '#',
          },
          {
            text: 'Lien 2',
            to: '#',
          },
          {
            text: 'Lien 3',
            to: '#',
          },
          {
            text: 'Lien 4',
            to: '#',
          },
          {
            text: 'Lien 5',
            to: '#',
          },
        ],
      },
    ],
  },
}
