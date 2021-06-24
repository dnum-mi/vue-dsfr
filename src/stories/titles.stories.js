import { defineComponent } from 'vue'

const TitlesWrapper = defineComponent({
  template: '<div><slot/></div>',
})

export default {
  component: TitlesWrapper,
  title: 'Basic/Titres',
  argTypes: {
    dark: { control: 'boolean' },
  },
}

export const Titles = (args) => ({
  components: { TitlesWrapper },
  template: `
  <TitlesWrapper>
    <h1>Titre h1</h1>
    <h2>Titre h2</h2>
    <h3>Titre h3</h3>
    <h4>Titre h4</h4>
    <h5>Titre h5</h5>
    <h6>Titre h6</h6>
  </TitlesWrapper>
  `,
})
