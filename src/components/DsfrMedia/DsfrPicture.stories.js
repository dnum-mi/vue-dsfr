import DsfrPicture from './DsfrPicture.vue'

export default {
  component: DsfrPicture,
  title: 'Composants/DsfrPicture',
  argTypes: {

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
    ratio: {
      control: 'text',
      description: 'Permet d’alterner entre les différents ratio possibles pour le contenu ("32x9", "16x9", "3x2", "4x3", "1x1", "3x4", "2x3") la chaine de caractères changera la classe associée, "16x9" par défaut',
    },
  },
}

export const ImageSrc = (args) => ({
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
      :ratio="ratio"
      style="max-width: 500px"
    />
  `,

})
ImageSrc.args = {
  size: 'medium',
  src: 'https://placekitten.com/300/200',
  alt: '',
  title: 'Photographie d’un chaton',
  legend: 'Photographie d’un chaton',
  ratio: '16x9',
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
      :ratio="ratio"
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

})
ImageSvg.args = {
  size: 'medium',
  legend: 'Vue in Gotham',
  ratio: '16x9',
}
