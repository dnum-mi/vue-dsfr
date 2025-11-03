import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, userEvent, within } from 'storybook/test'
import { ref, watch } from 'vue'

import DsfrLanguageSelector from './DsfrLanguageSelector.vue'

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/selecteur-de-langue)
 */
const meta = {
  component: DsfrLanguageSelector,
  title: 'Composants/DsfrLanguageSelector',
  argTypes: {
    id: {
      control: 'text',
      description:
        '(Facultatif) `id` à donner pour la liste des langues (sera mis sur la balise `div` parente de la balise `ul`)',
    },
    languages: {
      control: 'object',
      description:
        'Tableau d’objets des langues proposées par le sélecteur : chaque élément doit être un objet avec un code ISO `codeIso` et un `label`',
    },
    currentLanguage: {
      control: 'text',
      description:
        'Code ISO du language courant (doit correspondre au `codeIso` d\'un des objets de la props `languages`',
    },
    title: {
      control: 'text',
      description: 'Titre accessible du sélecteur de langue',
    },
    onSelect: {
      action: 'select',
    },
  },
} satisfies Meta<typeof DsfrLanguageSelector>

export default meta

type Story = StoryObj<typeof meta>

export const SelecteurDeLangue: Story = {
  name: 'Sélecteur de langue',
  render: (args) => ({
    components: { DsfrLanguageSelector },
    setup () {
      const currentLanguage = ref(args.currentLanguage)
      watch(() => args.currentLanguage, (val) => {
        currentLanguage.value = val
      })

      return { ...args, currentLanguage, onSelect: args.onSelect }
    },
    template: `
      <DsfrLanguageSelector
        :id="id"
        :languages="languages"
        :current-language="currentLanguage"
        @select="currentLanguage = $event.codeIso; onSelect($event)"
      />
    `,
  }),
  args: {
    id: 'translate-1',
    currentLanguage: 'fr',
    languages: [
      { label: 'Français', codeIso: 'fr' },
      { label: 'English', codeIso: 'en' },
      { label: 'Deutsch', codeIso: 'de' },
      { label: 'Dutch', codeIso: 'nl' },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const languageSelectorFR = canvas.getByText('FR')
    expect(languageSelectorFR).toBeVisible()
    await userEvent.click(languageSelectorFR)
    const languageSelectorEN = canvas.getByText('EN - English')
    await userEvent.click(languageSelectorEN)
    const languageSelectorSelectedEN = canvas.getByText('EN')
    expect(languageSelectorSelectedEN).toBeVisible()
  },
}
