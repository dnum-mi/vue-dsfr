import tableStoriesCss from './table.stories.css?raw'

const tableStoriesStyleId = 'vue-dsfr-dsfr-table-stories-styles'

if (typeof document !== 'undefined' && !document.getElementById(tableStoriesStyleId)) {
  const style = document.createElement('style')
  style.id = tableStoriesStyleId
  style.textContent = tableStoriesCss
  document.head.appendChild(style)
}
