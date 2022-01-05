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
    format4x3: {
      control: 'boolean',
      description: 'Permet d\'abandonner le format 16x9 par défaut de la video afin de basculer sur un format 4x3',
    },
  },
}

export const Video = (args) => ({
  components: { DsfrVideo },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); padding: 1rem;">
    <DsfrVideo
      :src="src"
      :legend="legend"
      :size="size"
      :transcription-url="transcriptionUrl"
      :transcription-label="transcriptionLabel"
      :format4x3="format4x3"
    />
  </div>
  `,
})

Video.args = {
  dark: false,
  size: 'medium',
  src: 'https://www.youtube.com/embed/HyirpmPL43I',
  legend: 'Vidéo traitant du Service National Universel',
  transcriptionUrl: '',
  transcriptionLabel: 'Label de la transcription',
  format4x3: false,
}
