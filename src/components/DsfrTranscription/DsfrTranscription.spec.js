import { render } from '@testing-library/vue'

import DsfrTranscription from './DsfrTranscription.vue'

describe('DsfrTranscription', () => {
  it('should render a transcription', () => {
    // Given
    const title = 'Titre de la transcription'
    const content = 'Contenu de la transcription'

    // When
    const { getByText } = render(DsfrTranscription, {
      props: {
        title,
        content,
      },
    })

    const titleEl = getByText(title)
    const contentEl = getByText(content)

    // Then
    expect(titleEl).toBeInTheDocument()
    expect(contentEl).toBeInTheDocument()
  })
})
