import DsfrCard from './DsfrCard.vue'

export default {
  component: DsfrCard,
  title: 'Basic/Carte (Card)',
  argTypes: {
    dark: { control: 'boolean' },
    noArrow: { control: 'boolean' },
    altImg: { control: 'text' },
    detail: { control: 'text' },
    description: { control: 'text' },
    imgSrc: { control: 'text' },
    link: { control: 'text' },
    title: { control: 'text' },
    horizontal: { control: 'boolean' },
  },
}

export const Card = (args) => ({
  components: { DsfrCard },
  data () {
    return args
  },
  template: `
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrCard
      :style="\`max-width: \${horizontal ? 600 : 400}px\`"
      :alt-img="altImg"
      :detail="detail"
      :description="description"
      :img-src="imgSrc"
      :link="link"
      :title="title"
      :horizontal="horizontal"
      :no-arrow="noArrow"
    />
  </div>
  `,
})
Card.args = {
  dark: false,
  altImg: '',
  detail: 'Détails sur la carte en question',
  description: 'Description sommaire de la carte',
  imgSrc: 'https://placekitten.com/300/200',
  link: 'https://www.systeme-de-design.gouv.fr/',
  title: 'Qu’est-ce que le Pass Culture et comment l’obtenir ?',
  noArrow: false,
  horizontal: false,
}
