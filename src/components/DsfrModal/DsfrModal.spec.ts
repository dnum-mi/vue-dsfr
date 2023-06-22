import { mount } from '@vue/test-utils'

import { OhVueIcon as VIcon } from 'oh-vue-icons'

import DsfrModal from './DsfrModal.vue'

describe.skip('DsfrModal', () => { // Skipped because of this issue: https://github.com/focus-trap/focus-trap-react/issues/785
  it('should render modal and emit "close" on click on close button', async () => {
    const content = 'Contenu de la modale'
    const title = 'Titre de la modale'

    const wrapper = mount(DsfrModal, {
      global: {
        components: {
          VIcon,
        },
      },
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
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        opened: true,
        title,
      },
      slots: {
        default: content,
      },
    })

    const modalContentEl = wrapper.find('.fr-modal__content').element
    const modalEl = wrapper.find('[role="dialog"]').element
    // const labelledByTitleEl = wrapper.find('.fr-modal')

    // expect(modalEl).toBe(labelledByTitleEl)
    expect(modalEl).toBeInstanceOf(Element)
    expect(modalEl).toContainHTML(title)
    expect(modalContentEl).toContainHTML(content)
  })

  it('should render modal and emit "close" on click on escape', async () => {
    const content = 'Contenu de la modale'
    const title = 'Titre de la modale'

    const wrapper = mount(DsfrModal, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        opened: true,
        title,
      },
      slots: {
        default: content,
      },
    })

    expect(wrapper.emitted().close).not.toBeTruthy()

    // await wrapper.find('#test-button').element.focus()
    await wrapper.trigger('keydown.esc')

    expect(wrapper.emitted().keydown).toBeTruthy()
    // expect(wrapper.emitted().close).toBeTruthy()
  })

  it('should render modal with role alertdialog', async () => {
    const content = 'Contenu de la modale'
    const title = 'Titre de la modale'

    const wrapper = mount(DsfrModal, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        opened: true,
        title,
        isAlert: true,
      },
      slots: {
        default: content,
      },
    })

    const dialog = wrapper.find('[role="alertdialog"]')
    expect(dialog.element).toHaveClass('fr-modal--opened')
  })
})
