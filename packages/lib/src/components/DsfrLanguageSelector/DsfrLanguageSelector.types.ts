export type DsfrLanguageSelectorElement = {
  codeIso: string
  label: string
}

export type DsfrLanguageSelectorProps = {
  id?: string
  languages: DsfrLanguageSelectorElement[]
  currentLanguage?: string
  title?: string
}
