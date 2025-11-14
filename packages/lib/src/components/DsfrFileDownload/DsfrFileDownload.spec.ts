import { render } from '@testing-library/vue'

import DsfrFileDownload from './DsfrFileDownload.vue'

describe('DsfrFileDownload', () => {
  it('should render a download link', async () => {
    const title = 'Téléchargement du fichier 1'
    const format = 'JPEG'
    const size = '205 Ko'
    const href = '#'
    const download = 'document.txt'

    const { getByText } = render(DsfrFileDownload, {
      props: {
        title,
        format,
        size,
        href,
        download,
      },
    })

    const downloadTitle = getByText(title)

    expect((downloadTitle)).toHaveClass('fr-link--download')
  })
})
