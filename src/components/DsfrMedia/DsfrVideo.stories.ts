import { expect, within } from '@storybook/test'
import { setup } from '@storybook/vue3'

import DsfrModal from '../DsfrModal/DsfrModal.vue'
import VIcon from '../VIcon/VIcon.vue'

import DsfrVideo from './DsfrVideo.vue'

setup((app) => {
  app.component('DsfrModal', DsfrModal)
  app.component('VIcon', VIcon)
})

const delay = (timeout = 100) =>
  new Promise((resolve) => setTimeout(resolve, timeout))

export default {
  component: DsfrVideo,
  title: 'Composants/DsfrVideo',
  argTypes: {
    src: {
      control: 'text',
      description:
        'Spécifie le chemin menant à l\'image dans le but de l\'afficher.',
    },
    legend: {
      control: 'text',
      description:
        'Texte court accompagnant un contenu. Elle peut-être descriptive, interprétative, informative.',
    },
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
      description:
        'Permet de moduler les dimensions du contenu entre trois tailles prédéfinies. Une chaîne de caractères différente de \'large\' ou \'small\' affichera le contenu en format medium par défaut.',
    },
    transcriptionTitle: {
      control: 'text',
      description: 'Titre de la vidéo faisant l\'objet de la transcription',
    },
    transcriptionContent: {
      control: 'text',
      description: 'Contenu de la vidéo faisant l\'objet de la transcription',
    },
    ratio: {
      control: 'text',
      description:
        'Permet d’alterner entre les différents ratio possibles pour le contenu ("32x9", "16x9", "3x2", "4x3", "1x1", "3x4", "2x3") la chaine de caractères changera la classe associée, "16x9" par défaut',
    },
    expandTranscription: {
      control: 'event',
      description: 'Event d\'ouverture de la modale contenant la transcription',
    },
  },
}

export const Video = (args) => ({
  components: { DsfrVideo },
  data () {
    return args
  },
  template: `
    <DsfrVideo
      :src="src"
      :legend="legend"
      :size="size"
      :transcriptionTitle="transcriptionTitle"
      :transcriptionContent="transcriptionContent"
      :ratio="ratio"
    />
  `,
})
Video.args = {
  size: 'medium',
  src: 'https://www.youtube.com/embed/HyirpmPL43I',
  legend: 'Vidéo traitant du Service National Universel',
  transcriptionTitle: 'Titre de la transcription',
  transcriptionContent: 'Contenu de la transcription',
  ratio: '16x9',
}
Video.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const caption = canvas.getByText(Video.args.legend)
  const transcriptionContent = canvas.getByText(Video.args.transcriptionContent)
  const button = canvas.getByRole('button')
  expect(transcriptionContent).not.toBeVisible()
  expect(caption).toHaveClass('fr-content-media__caption')
  button.click()
  await delay(500)
  expect(transcriptionContent).toBeVisible()
}
