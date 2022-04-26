export interface NavigationMenuLink {
  id?: string;
  to: import('vue-router').RouteLocationRaw;
  text: string;
}

export interface NavigationMenu {
  title: string;
  links: NavigationMenuLink[];
}

export interface NavigationMegaMenu {
  id?: string;
  title: string;
  description?: string;
  link?: NavigationMenuLink;
  menus: NavigationMenu[];
}

type NavigationItem = NavigationMenuLink | NavigationMenu | NavigationMegaMenu

declare const _default: import('vue').DefineComponent<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    navItems: {
        type: ArrayConstructor;
        default: () => NavigationItem[];
    };
}, unknown, {
    expandedMenuId: string;
}, {}, {
    toggle(id: string): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    navItems: {
        type: ArrayConstructor;
        default: () => NavigationItem[];
    };
}>>, {
    id: string;
    label: string;
    navItems: NavigationItem[];
}>
export default _default
