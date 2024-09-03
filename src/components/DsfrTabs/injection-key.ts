import type { InjectionKey, Ref } from 'vue'

type RegisterTab = (title: Ref<string>) => {
  isVisible: Ref<boolean>
  asc?: Ref<boolean>
}

export const registerTabKey: InjectionKey<RegisterTab> = Symbol('tabs')
