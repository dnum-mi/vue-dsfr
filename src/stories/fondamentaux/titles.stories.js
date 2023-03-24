export default {
  title: 'Fondamentaux/1. Titres',
  argTypes: {
  },
}

export const TitresHn = (args) => ({
  data () {
    return args
  },
  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); color: var(--g800); padding: 1rem;">
      <h1>Titre h1</h1>
      <h2>Titre h2</h2>
      <h3>Titre h3</h3>
      <h4>Titre h4</h4>
      <h5>Titre h5</h5>
      <h6>Titre h6</h6>
    </div>
  `,
})
TitresHn.args = {
}

export const TitresAlternatifs = (args) => ({
  data () {
    return args
  },
  template: `
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--grey-1000-50); color: var(--g800); padding: 1rem;">
      <div class="fr-display--xl">Titre xl</div>
      <div class="fr-display--lg">Titre lg</div>
      <div class="fr-display--md">Titre md</div>
      <div class="fr-display--sm">Titre sm</div>
      <div class="fr-display--xs">Titre xs</div>
    </div>
  `,
})
TitresAlternatifs.args = {
}
