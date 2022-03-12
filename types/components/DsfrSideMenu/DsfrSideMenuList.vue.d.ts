import { SideMenuItem } from './DsfrSideMenu.vue'

declare const _default: import('vue').DefineComponent<{
    id: {
        type: StringConstructor;
        required: true;
    };
    collapsable: BooleanConstructor;
    expanded: BooleanConstructor;
    menuItems: {
        type: ArrayConstructor;
        default: () => any[];
    };
}, unknown, unknown, {}, {
    isExternalLink(to: any): boolean;
    is(to: any): 'a' | 'nuxt-link' | 'router-link';
    linkProps(to: any): {
        [x: string]: any;
    };
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'toggle-expand'[], 'toggle-expand', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        required: true;
    };
    collapsable: BooleanConstructor;
    expanded: BooleanConstructor;
    menuItems: {
        type: ArrayConstructor;
        default: () => any[];
    };
}>> & {
    'onToggle-expand'?: (...args: any[]) => any;
}, {
    expanded: boolean;
    menuItems: SideMenuItem[];
    collapsable: boolean;
}>
export default _default
