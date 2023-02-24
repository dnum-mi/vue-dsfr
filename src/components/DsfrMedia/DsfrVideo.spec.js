import { render } from '@testing-library/vue'
import { OhVueIcon as VIcon } from 'oh-vue-icons'

import DsfrVideo from './DsfrVideo.vue'
import DsfrModal from '../DsfrModal/DsfrModal.vue'

describe('DsfrVideo', () => {
  it('should render a div with a small video with transcription', () => {
    // Given
    const size = 'small'
    const format4x3 = false
    const src = 'https://www.youtube.com/embed/HyirpmPL43I'
    const legend = 'Vidéo de ouf'

    // When
    const { container, getByText } = render(DsfrVideo, {
      global: {
        components: {
          VIcon,
          DsfrModal,
        },
      },
      props: {
        size,
        format4x3,
        src,
        legend,
      },
    })

    const wrapperEl = container.querySelector('.fr-content-media')
    const captionEl = getByText(legend)

    // Then
    expect(wrapperEl).toHaveClass('fr-content-media--sm')
    expect(wrapperEl).not.toHaveClass('fr-content-media--lg')
    expect(captionEl).toHaveClass('fr-content-media__caption')
  })

  it('should render a div with a video without transcription', () => {
    // Given
    const src = 'https://www.youtube.com/embed/HyirpmPL43I'
    const legend = 'Vidéo de ouf'

    // When
    const { container, getByText } = render(DsfrVideo, {
      global: {
        components: {
          VIcon,
          DsfrModal,
        },
      },
      props: {
        src,
        legend,
      },
    })

    const wrapperEl = container.querySelector('.fr-content-media')
    const responsiveEl = container.querySelector('.fr-responsive-vid')
    const captionEl = getByText(legend)
    const contentMediaEl = container.querySelector('.fr-content-media__transcription')
    const iframeEl = container.querySelector('.fr-responsive-vid__player')

    // Then
    expect(contentMediaEl).toBeNull()
    expect(responsiveEl).toHaveClass('fr-ratio-16x9')
    expect(wrapperEl).not.toHaveClass('fr-content-media--sm')
    expect(wrapperEl).not.toHaveClass('fr-content-media--lg')
    expect(captionEl).toHaveClass('fr-content-media__caption')
    expect(iframeEl).toHaveAttribute('src', src)
  })
})
