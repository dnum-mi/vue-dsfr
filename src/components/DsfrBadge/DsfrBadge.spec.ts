import { render } from '@testing-library/vue'
// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrBadge from './DsfrBadge.vue'

describe('DsfrBadge', () => {
  it('should render a success badge', async () => {
    const label = 'Succès'
    const type = 'success'

    const { getByText } = render(DsfrBadge, {
      props: {
        label,
        type,
      },
    })

    const badge = getByText(label).parentElement

    expect(badge).toHaveClass('fr-badge')
    expect(badge).not.toHaveClass('fr-badge--sm')
    expect(badge).toHaveClass(`fr-badge--${type}`)
  })

  it('should render a small error badge', async () => {
    const label = 'Error'
    const type = 'error'

    const { getByText } = render(DsfrBadge, {
      props: {
        label,
        type,
        small: true,
      },
    })

    const badge = getByText(label).parentElement

    expect(badge).toHaveClass('fr-badge')
    expect(badge).toHaveClass('fr-badge--sm')
    expect(badge).toHaveClass(`fr-badge--${type}`)
  })

  it('should render a standard badge without color accent', async () => {
    const label = 'Standard'

    const { getByText } = render(DsfrBadge, {
      props: {
        label,
        type: 'standard',
      },
    })

    const badge = getByText(label).parentElement

    expect(badge).toHaveClass('fr-badge')
    expect(badge).not.toHaveClass('fr-badge--standard')
  })

  it('should render a standard badge with a color accent', async () => {
    const label = 'Standard glycine'
    const colorAccent = 'purple-glycine'

    const { getByText } = render(DsfrBadge, {
      props: {
        label,
        type: 'standard',
        colorAccent,
      },
    })

    const badge = getByText(label).parentElement

    expect(badge).toHaveClass('fr-badge')
    expect(badge).toHaveClass(`fr-badge--${colorAccent}`)
    expect(badge).not.toHaveClass('fr-badge--standard')
  })
})
