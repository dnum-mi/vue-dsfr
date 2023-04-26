import { render } from '@testing-library/vue'

import DsfrFileDownloadList from './DsfrFileDownloadList.vue'

describe('DsfrFileDownloadList', () => {
  it('should render a download link block', async () => {
    const title = 'Liste de liens de téléchargement'
    const files = [
      {
        title: 'Télécharger document 1',
        format: 'PNG',
        size: '250 Mo',
        href: '#',
        download: 'document1.md',
      },
      {
        title: 'Télécharger document 2',
        format: 'GIF',
        size: '107 Ko',
        href: '#',
        download: 'document2.md',
      },
      {
        title: 'Télécharger document 3',
        format: 'ZIP',
        size: '1,5 Go',
        href: '#',
        download: 'document3.md',
      },
    ]

    const { container, getByText } = render(DsfrFileDownloadList, {
      props: {
        title,
        files,
      },
    })

    const downloadTitle = getByText(title)
    const links = container.querySelectorAll('li')

    expect((downloadTitle).parentNode).toHaveClass('fr-downloads-group')
    expect(links).toHaveLength(3)
  })
})
