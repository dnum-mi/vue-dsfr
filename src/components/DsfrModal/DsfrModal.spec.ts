import { mount } from '@vue/test-utils'

import DsfrModal from './DsfrModal.vue'

describe('DsfrModal', () => { // Skipped because of this issue: https://github.com/focus-trap/focus-trap-react/issues/785
  it('should render close button with correct aria-controls and emit "close" on click', async () => {
    const content = 'Contenu de la modale'
    const title = 'Titre de la modale'
    const modalId = 'test-modal'

    const wrapper = mount(DsfrModal, {
      props: {
        opened: true,
        title,
        modalId,
      },
      slots: {
        default: content,
      },
    })

    const closeBtn = wrapper.find('button.fr-btn--close')
    expect(closeBtn.attributes('aria-controls')).toBe(`dialog-${modalId}`)

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

  it('should render modal with role="alertdialog" when isAlert is true even without actions', async () => {
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
    expect(modal.attributes('role')).toBe('alertdialog')
  })

  it('should render modal with correct aria attributes', async () => {
    const content = 'Contenu de la modale'
    const title = 'Titre de la modale'
    const modalId = 'test-modal'

    const wrapper = mount(DsfrModal, {
      props: {
        opened: true,
        title,
        modalId,
      },
      slots: {
        default: content,
      },
    })

    const modal = wrapper.find('dialog.fr-modal')
    expect(modal.attributes('id')).toBe(`dialog-${modalId}`)
    expect(modal.attributes('aria-modal')).toBe('true')
    expect(modal.attributes('aria-labelledby')).toBe(modalId)
    expect(modal.attributes('aria-describedby')).toBe(`${modalId}-description`)
  })

  it('should render the title with the correct id for aria-labelledby', async () => {
    const title = 'Titre de la modale'
    const modalId = 'test-modal'

    const wrapper = mount(DsfrModal, {
      props: {
        opened: true,
        title,
        modalId,
      },
      slots: {
        default: 'contenu',
      },
    })

    const heading = wrapper.find(`#${modalId}`)
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toContain(title)
  })

  it('should render the title as an h1 by default', async () => {
    const title = 'Titre de la modale'
    const modalId = 'test-modal'

    const wrapper = mount(DsfrModal, {
      props: {
        opened: true,
        title,
        modalId,
      },
      slots: {
        default: 'contenu',
      },
    })

    const heading = wrapper.find(`#${modalId}`)
    expect(heading.element.tagName).toBe('H1')
  })

  it('should render the title with the tag given by titleTag', async () => {
    const title = 'Titre de la modale'
    const modalId = 'test-modal'

    const wrapper = mount(DsfrModal, {
      props: {
        opened: true,
        title,
        titleTag: 'h2',
        modalId,
      },
      slots: {
        default: 'contenu',
      },
    })

    const heading = wrapper.find(`#${modalId}`)
    expect(heading.element.tagName).toBe('H2')
  })

  it('should render the description wrapper with the correct id for aria-describedby', async () => {
    const content = 'Description de la modale'
    const modalId = 'test-modal'

    const wrapper = mount(DsfrModal, {
      props: {
        opened: true,
        title: 'Titre',
        modalId,
      },
      slots: {
        default: content,
      },
    })

    const descriptionEl = wrapper.find(`#${modalId}-description`)
    expect(descriptionEl.exists()).toBe(true)
    expect(descriptionEl.text()).toContain(content)
  })
})
