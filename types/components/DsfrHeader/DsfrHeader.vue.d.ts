interface HeaderMenuLink {
    button?: boolean;
    iconOnly?: boolean;
    iconRight?: boolean;
    icon?: string;
    label: string;
    onClick?: () => void;
    to?: string | import('vue-router').RouteLocationRaw;
    href?: string;
}

declare const _default: import('vue').DefineComponent<{
    serviceTitle: {
        type: StringConstructor;
        default: any;
    };
    serviceDescription: {
        type: StringConstructor;
        default: any;
    };
    homeTo: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    quickLinks: {
        type: ArrayConstructor;
        default: () => HeaderMenuLink[];
    };
    showSearch: BooleanConstructor;
    logoText: {
        type: (StringConstructor | ArrayConstructor)[];
        default: () => string;
    };
}, unknown, {
    menuOpened: boolean;
    searchModalOpened: boolean;
    modalOpened: boolean;
}, {
    linkComponent(): 'nuxt-link' | 'router-link';
    isWithSlotOperator(): boolean;
}, {
    hideModal(): void;
    showMenu(): void;
    showSearchModal(): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ('search' | 'update:modelValue')[], 'search' | 'update:modelValue', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    serviceTitle: {
        type: StringConstructor;
        default: string;
    };
    serviceDescription: {
        type: StringConstructor;
        default: string;
    };
    homeTo: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    quickLinks: {
        type: ArrayConstructor;
        default: () => HeaderMenuLink[];
    };
    showSearch: BooleanConstructor;
    logoText: {
        type: (StringConstructor | ArrayConstructor)[];
        default: () => string;
    };
}>> & {
    'onUpdate:modelValue'?: (search: string) => void;
    onSearch?: (search: string) => void;
}, {
    placeholder?: string;
    quickLinks?: HeaderMenuLink[];
    modelValue?: string;
    logoText?: string | string[];
    serviceTitle: string;
    serviceDescription?: string;
    homeTo?: string;
    showSearch?: boolean;
}>
export default _default
