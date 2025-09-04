import { setup } from '@storybook/vue3'

import DsfrModal from '../DsfrModal/DsfrModal.vue'
import VIcon from '../VIcon/VIcon.vue'

import DsfrTranscription from './DsfrTranscription.vue'

setup((app) => {
  app.component('DsfrModal', DsfrModal)
  app.component('VIcon', VIcon)
})

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/transcription)
 */
export default {
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
}

export const Transcription = (args) => ({
  components: { DsfrTranscription, DsfrModal },
  data () {
    return args
  },
  template: `
    <DsfrTranscription
      :title="title"
      :content="content"
    />
  `,
})
Transcription.args = {
  title: 'Chats hiver',
  content: 'Des chatons jouant dans la neige',
}
