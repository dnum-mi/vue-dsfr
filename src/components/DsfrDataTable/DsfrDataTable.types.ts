export type DsfrDataTableProps = {
  title: string
  main: string[]
  headersRow: (string | { key: string, label: string })[]
  rows: (string | { id: string | number, content: string | number | boolean | bigint })[][]
  headersColumn?: string[]
  selectableRows?: string[]
  topActionsRow?: string[]
  bottomActionsRow?: string[]
  verticalBorders?: boolean
  bottomCaption?: boolean
  noCaption?: boolean
  pagination?: boolean
  currentPage?: number
  resultsPerPage?: number
}
