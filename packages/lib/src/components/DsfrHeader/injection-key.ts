import type { InjectionKey } from 'vue'

type RegisterNavigationLink = () => () => void

export const registerNavigationLinkKey: InjectionKey<RegisterNavigationLink> = Symbol('header')
