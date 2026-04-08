import { mount } from '@vue/test-utils'

import DsfrModal from './DsfrModal.vue'

describe('DsfrModal', () => { // Skipped because of this issue: https://github.com/focus-trap/focus-trap-react/issues/785
  it('should render modal and emit "close" on click on close button', async () => {
    const content = 'Contenu de la modale'
    const title = 'Titre de la modale'

    const wrapper = mount(DsfrModal, {
      props: {
        opened: true,
        title,
      },
      slots: {
        default: content,
      },
    })

    const closeBtn = wrapper.find('button.fr-btn--close')

    expect(wrapper.emitted().close).not.toBeTruthy()

    await closeBtn.trigger('click')

    await new Promise((resolve) => setTimeout(resolve, 300))

    expect(wrapper.emitted().close).toBeTruthy()
  })

  it('should render modal', async () => {
    const content = 'Contenu de la modale'
    const title = 'Titre de la modale'

    const wrapper = mount(DsfrModal, {
      props: {
        opened: true,
        title,
      },
      slots: {
        default: content,
      },
    })

    const modalContentEl = wrapper.find('.fr-modal__content').element
    const modalEl = wrapper.find('.fr-modal').element

    expect(modalEl).toBeInstanceOf(Element)
    expect(modalEl).toContainHTML(title)
    expect(modalContentEl).toContainHTML(content)
  })

  it('should render modal and emit "close" on click on escape', async () => {
    const content = 'Contenu de la modale'
    const title = 'Titre de la modale'

    const wrapper = mount(DsfrModal, {
      props: {
        opened: true,
        title,
      },
      slots: {
        default: content,
      },
    })

    expect(wrapper.emitted().close).not.toBeTruthy()

    await wrapper.trigger('keydown.esc')

    expect(wrapper.emitted().keydown).toBeTruthy()
  })

  it('should render modal without role', async () => {
    const content = 'Contenu de la modale'
    const title = 'Titre de la modale'

    const wrapper = mount(DsfrModal, {
      props: {
        opened: true,
        title,
        isAlert: false,
      },
      slots: {
        default: content,
      },
    })

    const modal = wrapper.find('dialog.fr-modal')
    expect(modal.attributes('role')).toBeUndefined()
  })

  it('should render modal with role="alertdialog" when isAlert is true and actions are provided', async () => {
    const content = 'Contenu de la modale'
    const title = 'Titre de la modale'

    const wrapper = mount(DsfrModal, {
      props: {
        opened: true,
        title,
        isAlert: true,
        actions: [{ label: 'Action 1' }],
      },
      slots: {
        default: content,
      },
    })

    const modal = wrapper.find('dialog.fr-modal')
    expect(modal.attributes('role')).toBe('alertdialog')
  })
  it('should render modal with role="alert" when isAlert is true and no action provided', async () => {
    const content = 'Contenu de la modale'
    const title = 'Titre de la modale'

    const wrapper = mount(DsfrModal, {
      props: {
        opened: true,
        title,
        isAlert: true,
        actions: [],
      },
      slots: {
        default: content,
      },
    })

    const modal = wrapper.find('dialog.fr-modal')
    expect(modal.attributes('role')).toBe('alert')
  })
})
