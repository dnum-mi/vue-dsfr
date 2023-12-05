export type DsfrShareProps = {
  title?: string
  copyLabel?: string
  mail?: { label: string, to: string }
  networks?: { name: string, label: string, url: string }[]
}
