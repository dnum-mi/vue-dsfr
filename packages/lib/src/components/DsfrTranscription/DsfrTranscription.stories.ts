import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { setup } from '@storybook/vue3-vite'

import DsfrModal from '../DsfrModal/DsfrModal.vue'
import VIcon from '../VIcon/VIcon.vue'

import DsfrTranscription from './DsfrTranscription.vue'

setup((app) => {
  app.component('DsfrModal', DsfrModal)
  app.component('VIcon', VIcon)
})

const meta = {
  component: DsfrTranscription,
  title: 'Composants/DsfrTranscription',
  argTypes: {
    title: {
      control: 'text',
      description:
        'Titre du contenu sur lequel porte la transcription à destination des technologies d\'assistance',
    },
    content: {
      control: 'text',
      description: 'Transcription du contenu de la vidéo',
    },
  },
} satisfies Meta<typeof DsfrTranscription>

export default meta

type Story = StoryObj<typeof meta>

/**
 * [Voir quand l'utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription)
 */

export const Transcription: Story = {
  render: (args) => ({
    components: { DsfrTranscription, DsfrModal },

    setup () {
      return args
    },

    template: `
    <DsfrTranscription
      :id
      :title
      :content
    />
  `,
  }),
  args: {
    title: 'Chats hiver',
    content: 'Des chatons jouant dans la neige',
    id: '123',
  },
}
