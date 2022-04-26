import DsfrPicture from './DsfrPicture.vue'

export default {
  component: DsfrPicture,
  title: 'Composants/Image - DsfrPicture',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.',
    },
    alt: {
      control: 'text',
      description: 'Présente une alternative textuelle au contenu et optimise le référencement. Si l’image est illustrative, n’apportant  pas d’éléments de compréhension supplémentaires par rapport au texte dans lequel elle se trouve, l’attribut alt doit être vide',
    },
    title: {
      control: 'text',
      description: 'Contenu de l’attribut `title` de l’image',
    },
    src: {
      control: 'text',
      description: 'Spécifie le chemin menant à l’image dans le but de l’afficher.',
    },
    legend: {
      control: 'text',
      description: 'Texte court accompagnant un contenu. Elle peut-être descriptive, interprétative, informative.',
    },
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
      description: 'Permet de moduler les dimensions du contenu entre trois tailles prédéfinies. Une chaîne de caractères différente de "large" ou "small" affichera le contenu en format medium par défaut.',
    },
  },
}

export const Image = (args) => ({
  components: { DsfrPicture },
  data () {
    return args
  },
  template: `
    <DsfrPicture
      :src="src"
      :alt="alt"
      :title="title"
      :legend="legend"
      :size="size"
      style="max-width: 500px"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
Image.args = {
  dark: false,
  size: 'medium',
  src: 'https://placekitten.com/300/200',
  alt: '',
  title: 'Photographie d’un chaton',
  legend: 'Photographie d’un chaton',
}

export const ImageSvg = (args) => ({
  components: { DsfrPicture },
  data () {
    return args
  },
  template: `
    <DsfrPicture
      :legend="legend"
      :size="size"
      style="max-width: 500px"
    >
      <svg version="1.1" id="Layer_1" style="enable-background:new 0 0 122.88 106.42; width: 200px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 106.42"  xml:space="preserve">
        <g>
          <polygon class="st0" points="75.63,0 61.44,24.58 47.25,0 0,0 61.44,106.42 122.88,0 75.63,0"/>
          <polygon class="st1" points="75.63,0 61.44,24.58 47.25,0 24.58,0 61.44,63.85 98.3,0 75.63,0"/>
        </g>
      </svg>
    </DsfrPicture>
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
ImageSvg.args = {
  dark: false,
  size: 'medium',
  legend: 'Vue in Gotham',
}
