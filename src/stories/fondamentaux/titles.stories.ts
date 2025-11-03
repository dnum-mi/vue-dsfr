import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Fondamentaux/1. Titres',
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const render = () => ({
  template: `
    <div style="background-color: var(--grey-1000-50); padding: 1rem;">
      <h1>Titre h1</h1>
      <h2>Titre h2</h2>
      <h3>Titre h3</h3>
      <h4>Titre h4</h4>
      <h5>Titre h5</h5>
      <h6>Titre h6</h6>
    </div>
  `,
})

export const TitresHn: Story = {
  render,
}

export const TitresAlternatifs: Story = {
  render: () => ({
    template: `
      <div style="padding: 1rem;">
        <div class="fr-display--xl">Titre xl</div>
        <div class="fr-display--lg">Titre lg</div>
        <div class="fr-display--md">Titre md</div>
        <div class="fr-display--sm">Titre sm</div>
        <div class="fr-display--xs">Titre xs</div>
      </div>
    `,
  }),
}
