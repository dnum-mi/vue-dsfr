import { render } from '@testing-library/vue'

import { DsfrButton, VIcon } from '@gouvminint/vue-dsfr'

import ReloadPrompt from './ReloadPrompt.vue'

vi.mock('virtual:pwa-register/vue', () => {
  return {
    useRegisterSW () {
      return {
        offlineReady: true,
        needRefresh: false,
        updateServiceWorker: vi.fn(),
      }
    },
  }
})

describe('reloadPrompt', () => {
  it('should render ReloadPrompt with right content', async () => {
    // Given

    // When
    const { container, getByRole } = render(ReloadPrompt, {
      global: {
        components: {
          DsfrButton,
          VIcon,
        },
      },
      props: {
        offlineReady: true,
      },
    })

    const navEl = getByRole('alert')
    const buttons = container.querySelectorAll('button')

    // Then
    expect(navEl.tagName).toBe('DIV')
    expect(buttons).toHaveLength(1)
    expect(navEl).toHaveClass('new-content-wrapper')
  })

  it('should render ReloadPrompt with need refresh', async () => {
    // Given

    // When
    const { container, getAllByRole } = render(ReloadPrompt, {
      global: {
        components: {
          DsfrButton,
          VIcon,
        },
      },
      props: {
        needRefresh: true,
      },
    })

    const navEl = getAllByRole('alert')[0]
    const buttons = container.querySelectorAll('button')

    // Then
    expect(navEl.tagName).toBe('DIV')
    expect(buttons).toHaveLength(2)
    expect(navEl).toHaveClass('new-content-wrapper')
  })
})
