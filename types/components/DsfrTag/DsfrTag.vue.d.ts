export interface TagProps {
    label?: string;
    link?: string;
    tagName?: string;
    icon?: string;
    small?: boolean;
    disabled?: boolean;
    selected?: boolean;
    iconOnly?: boolean;
}

declare const _default: import('vue').DefineComponent<{
    label: {
        type: StringConstructor;
        default: any;
    };
    link: {
        type: StringConstructor;
        default: any;
    };
    tagName: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    selected: BooleanConstructor;
    disabled: BooleanConstructor;
    iconOnly: BooleanConstructor;
    small: BooleanConstructor;
}, unknown, unknown, {
    is(): any;
    isExternalLink(): any;
    linkComponent(): 'nuxt-link' | 'router-link';
    to(): any;
    href(): any;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    label: {
        type: StringConstructor;
        default: any;
    };
    link: {
        type: StringConstructor;
        default: any;
    };
    tagName: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    selected: BooleanConstructor;
    disabled: BooleanConstructor;
    iconOnly: BooleanConstructor;
    small: BooleanConstructor;
}>>, {
    link: string;
    small: boolean;
    label: string;
    tagName: string;
    disabled: boolean;
    icon: string;
    selected: boolean;
    iconOnly: boolean;
}>
export default _default
