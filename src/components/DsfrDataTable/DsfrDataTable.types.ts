export type DsfrDataTableProps = {
  title: string
  headersRow: string[]
  contentRows: string[]
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
