import DsfrVideo from './DsfrVideo.vue'

export default {
  component: DsfrVideo,
  title: 'Composants/Vidéo - DsfrVideo',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.',
    },
    src: {
      control: 'text',
      description: 'Spécifie le chemin menant à l\'image dans le but de l\'afficher.',
    },
    legend: {
      control: 'text',
      description: 'Texte court accompagnant un contenu. Elle peut-être descriptive, interprétative, informative.',
    },
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
      description: 'Permet de moduler les dimensions du contenu entre trois tailles prédéfinies. Une chaîne de caractères différente de \'large\' ou \'small\' affichera le contenu en format medium par défaut.',
    },
    transcriptionUrl: {
      control: 'text',
      description: 'Chemin menant à une transcription littérale du contenu proposé',
    },
    transcriptionLabel: {
      control: 'text',
      description: 'Texte accompagnant le contenu d\'une description brève.',
    },
    ratio: {
      control: 'text',
      description: 'Permet d’alterner entre les différents ratio possibles pour le contenu ("32x9", "16x9", "3x2", "4x3", "1x1", "3x4", "2x3") la chaine de caractères changera la classe associée, "16x9" par défaut',
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
      :transcription-url="transcriptionUrl"
      :transcription-label="transcriptionLabel"
      :ratio="ratio"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})

Video.args = {
  dark: false,
  size: 'medium',
  src: 'https://www.youtube.com/embed/HyirpmPL43I',
  legend: 'Vidéo traitant du Service National Universel',
  transcriptionUrl: '',
  transcriptionLabel: 'Label de la transcription',
  ratio: '16x9',
}
