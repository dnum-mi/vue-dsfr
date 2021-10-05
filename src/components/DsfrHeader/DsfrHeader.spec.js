import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/vue'

import DsfrHeader from './DsfrHeader.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrHeader', () => {
  it('should render DsfrHeader with a logo', () => {
    // Given
    const logoText = 'Gouvernement'
    const serviceTitle = 'Nom du service'
    const serviceDescription = 'Description du service'

    // When
    const { getByText } = render(DsfrHeader, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        serviceTitle,
        serviceDescription,
      },
    })
    const logo = getByText(logoText)

    // Then
    expect(logo).toHaveClass('fr-logo')
  })

  it('should render DsfrHeader with a logo and quicklinks', async () => {
    // Given
    const logoText = ['République', 'Française']
    const serviceTitle = 'Nom du service'
    const serviceDescription = 'Description du service'
    const showSearch = true
    const quickLinks = [
      { label: 'Lien1', path: '/path1', icon: '' },
      { label: 'Lien2', path: '/path2', icon: 'ri-notification-3-line' },
      { label: 'Lien3', path: '/path3', icon: 'ri-phone-line', iconRight: true },
    ]

    // When
    const { getByTestId } = render(DsfrHeader, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        logoText,
        serviceTitle,
        serviceDescription,
        quickLinks,
        showSearch,
      },
    })
    const logo = getByTestId('header-logo')
    const openMenuBtn = getByTestId('open-menu-btn')
    const closeModalBtn = getByTestId('close-modal-btn')

    await fireEvent.click(openMenuBtn)
    await fireEvent.click(closeModalBtn)

    // Then
    expect(logo).toHaveClass('fr-logo')
  })
})
