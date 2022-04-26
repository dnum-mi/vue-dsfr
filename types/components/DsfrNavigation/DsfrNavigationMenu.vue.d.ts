import { NavigationMenuLink } from './DsfrNavigation.vue'

declare const _default: import('vue').DefineComponent<{
    id: {
        type: StringConstructor;
        default: () => any;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    links: {
        type: ArrayConstructor;
        default: () => NavigationMenuLink[];
    };
    expandedId: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {
    expanded(): boolean;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'toggle-id'[], 'toggle-id', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    links: {
        type: ArrayConstructor;
        default: () => NavigationMenuLink[];
    };
    expandedId: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    'onToggle-id'?: (id: string) => void;
}, {
    id: string;
    expandedId: string;
    links: NavigationMenuLink[];
}>
export default _default
