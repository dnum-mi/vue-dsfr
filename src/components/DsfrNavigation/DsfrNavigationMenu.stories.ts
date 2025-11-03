import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { fn } from 'storybook/test'
import { ref } from 'vue'

import DsfrNavigation from './DsfrNavigation.vue'
import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMenu from './DsfrNavigationMenu.vue'

const meta = {
  component: DsfrNavigationMenu,
  title: 'Composants/DsfrNavigationMenu',
  argTypes: {
    id: {
      control: 'text',
      description:
        '(Optionnel) Valeur de l’attribut `id` de ce sous-menu. *N.B. : Il est recommandé de ne pas le donner, la bibliothèque lui en donnera un pseudo-aléatoire*.',
    },
    onToggleId: fn(),
    links: {
      control: 'object',
      description:
        'Tableau contenant les liens du menu de navigation. Chaque objet de ce tableau contiendra les props d’un lien direct <a href="/?path=/docs/composants-dsfrnavigationmenulink--docs">DsfrNavigationMenuLink</a> de navigation (`to` et `text`)',
    },
    title: {
      control: 'text',
      description: 'Intitulé du menu',
    },
    active: {
      control: 'boolean',
      description:
        '(Optionnel) Est-ce que le menu doit être actif ou non (met l’attribut `aria-current` à la valeur `true`). Par défaut, il est inactif.',
    },
    expandedId: {
      control: 'text',
      description:
        'Indique l’id de l’élément "ouvert" ou "déplié" dans le menu. Permet au composant de savoir s’il doit être déplié (si `expandedId` est identique à son `id`) ou non (si `expandedId` est différent de son `id`)',
    },
  },
  render: (args) => ({
    components: {
      DsfrNavigation,
      DsfrNavigationItem,
      DsfrNavigationMenu,
    },
    setup () {
      const expandedMenuId = ref(args.expandedId)

      function toggle (id: string) {
        if (id === expandedMenuId.value) {
          expandedMenuId.value = undefined
        } else {
          expandedMenuId.value = id
        }
        args.onToggleId(id)
      }

      return {
        args,
        expandedMenuId,
        toggle,
      }
    },
    template: `
    <DsfrNavigation>
      <DsfrNavigationItem>
        <DsfrNavigationMenu
          :title="args.title"
          :links="args.links"
          :expanded-id="expandedMenuId"
          @toggle-id="toggle"
        />
      </DsfrNavigationItem>
    </DsfrNavigation>
  `,
  }),
} satisfies Meta<typeof DsfrNavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

export const SousMenu: Story = {
  name: 'Sous-menu',
  args: {
    title: 'Nom de menu original',
    links: [
      {
        text: 'Valeur 1',
        to: '#val1',
      },
      {
        text: 'Valeur 2',
        to: '#val2',
      },
      {
        text: 'Valeur 3',
        to: '#val3',
      },
    ],
    onToggleId: fn(),
  },
}
