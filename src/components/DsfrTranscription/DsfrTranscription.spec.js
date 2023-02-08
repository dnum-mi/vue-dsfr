import { render } from '@testing-library/vue'

import { OhVueIcon as VIcon } from 'oh-vue-icons'

import DsfrTranscription from './DsfrTranscription.vue'
import DsfrModal from '../DsfrModal/DsfrModal.vue'

describe('DsfrTranscription', () => {
  it('should render a transcription', () => {
    // Given
    const title = 'Titre de la transcription'
    const content = 'Contenu de la transcription'

    // When
    const { getAllByText } = render(DsfrTranscription, {
      global: {
        components: {
          VIcon,
          DsfrModal,
        },
      },
      props: {
        title,
        content,
      },
    })

    const titleEl = getAllByText(title)
    const contentEl = getAllByText(content)

    // Then
    expect(titleEl[0]).toBeInTheDocument()
    expect(contentEl[0]).toBeInTheDocument()
  })
})
