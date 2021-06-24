import { defineComponent } from 'vue'

const TitlesWrapper = defineComponent({
  template: '<div><slot/></div>',
})

export default {
  component: TitlesWrapper,
  title: 'Basic/Titres alternatifs',
  argTypes: {
    dark: { control: 'boolean' },
  },
}

export const Titles = (args) => ({
  components: { TitlesWrapper },
  template: `
  <TitlesWrapper>
    <div class="fr-display-xl">Titre xl</div>
    <div class="fr-display-lg">Titre lg</div>
    <div class="fr-display-md">Titre md</div>
    <div class="fr-display-sm">Titre sm</div>
    <div class="fr-display-xs">Titre xs</div>
  </TitlesWrapper>
  `,
})
