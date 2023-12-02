export type Page = { href?: string, label: string, title: string }

export type DsfrPaginationProps = {
  pages: Page[]
  currentPage?: number
  firstPageTitle?: string
  lastPageTitle?: string
  nextPageTitle?: string
  prevPageTitle?: string
  truncLimit?: number,
}
