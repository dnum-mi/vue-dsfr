import type { InjectionKey, Ref } from 'vue'

type RegisterTab = (title: Ref<string>) => {
  isActive: Ref<boolean>
  expand: () => void
}

export const registerTabKey: InjectionKey<RegisterTab> = Symbol('accordions')
