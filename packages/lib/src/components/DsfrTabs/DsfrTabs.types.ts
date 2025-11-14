export type DsfrTabItemProps = {
  panelId: string
  tabId: string
  icon?: string
}

export type DsfrTabContentProps = {
  panelId: string
  tabId: string
}

export type DsfrTabsProps = {
  modelValue: number
  tabListName: string
  tabTitles: (Partial<DsfrTabItemProps> & { title: string })[]
  tabContents?: string[]
}
