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
        default: string | undefined;
    };
    serviceDescription: {
        type: StringConstructor;
        default: string | undefined;
    };
    homeTo: {
        type: StringConstructor;
        default: string;
    };
    logoText: {
      type: (StringConstructor | ArrayConstructor)[];
      default: () => string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    operatorImgAlt: {
      type: StringConstructor,
      default: string,
    },
    operatorImgSrc: {
      type: StringConstructor,
      default: string | undefined,
    },
    operatorImgStyle: {
      type: Object,
      default: () => Record<string, string> | undefined,
    },
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    quickLinks: {
        type: ArrayConstructor;
        default: () => HeaderMenuLink[];
    };
    searchLabel: {
      type: StringConstructor;
      default: string;
    };
    showSearch: BooleanConstructor;
}, unknown, {
    menuOpened: boolean;
    searchModalOpened: boolean;
    modalOpened: boolean;
}, {
    isWithSlotOperator(): boolean;
}, {
    hideModal(): void;
    showMenu(): void;
    showSearchModal(): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ('search' | 'update:modelValue')[], 'search' | 'update:modelValue', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    serviceTitle: {
        type: StringConstructor;
        default: string | undefined;
    };
    serviceDescription: {
        type: StringConstructor;
        default: string | undefined;
    };
    homeTo: {
        type: StringConstructor;
        default: string;
    };
    logoText: {
        type: (StringConstructor | ArrayConstructor)[];
        default: () => string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    operatorImgAlt: {
        type: StringConstructor,
        default: string,
    },
    operatorImgSrc: {
        type: StringConstructor,
        default: string | undefined,
    },
    operatorImgStyle: {
        type: ObjectConstructor,
        default: () => Record<string, string> | undefined,
    },
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    quickLinks: {
        type: ArrayConstructor;
        default: () => HeaderMenuLink[];
    };
    searchLabel: {
        type: StringConstructor;
        default: string;
    };
    showSearch: BooleanConstructor;
}>> & {
    'onUpdate:modelValue'?: (search: string) => void;
    onSearch?: (search: string) => void;
}, {
    serviceTitle: string;
    serviceDescription: string;
    homeTo: string;
    logoText: string | string[];
    modelValue: string | undefined;
    placeholder: string;
    quickLinks: HeaderMenuLink[];
    showSearch: boolean;
    operatorImgAlt: string;
    operatorImgSrc: string;
    operatorImgStyle: Record;
    serviceDescription: string;
    homeTo: string;
    logoText: string | string[];
    modelValue: string | undefined;
    placeholder: string;
    quickLinks: HeaderMenuLink[];
    showSearch: boolean;
    operatorImgAlt: string;
    operatorImgSrc: string;
    operatorImgStyle: Record;
}>
export default _default
