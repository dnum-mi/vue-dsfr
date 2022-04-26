interface SimpleSideMenuItem {
  active: boolean;
  to: import('vue-router').RouteLocationRaw;
  text: string;
  expanded: boolean;
}

interface SideMenuItemWithChildren {
  id: string;
  active: boolean;
  menuItems: (SimpleSideMenuItem | SideMenuItemWithChildren)[];
  text: string;
}

export type SideMenuItem = SimpleSideMenuItem | SideMenuItemWithChildren;

declare const _default: import('vue').DefineComponent<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    buttonLabel: {
        type: StringConstructor;
        default: string;
    };
    headingTitle: {
        type: StringConstructor;
        default: string;
    };
    menuItems: {
      type: ObjectConstructor;
      default: () => undefined;
    };
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    buttonLabel: {
        type: StringConstructor;
        default: string;
    };
    headingTitle: {
        type: StringConstructor;
        default: string;
    };
    menuItems: {
      type: ObjectConstructor;
      default: () => undefined;
    };
}>>, {
    id?: string;
    headingTitle: string;
    buttonLabel: string;
    menuItems: SideMenuItem[];
}>
export default _default
