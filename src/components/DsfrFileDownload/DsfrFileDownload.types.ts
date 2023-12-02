export type DsfrFileDownloadProps = {
  title?: string
  format?: string
  size?: string
  href?: string
  download?: string
}

export type DsfrFileDownloadListProps = {
  files: DsfrFileDownloadProps[]
  title: string
}
