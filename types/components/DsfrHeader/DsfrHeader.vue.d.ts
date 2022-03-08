declare const _default: import("vue").DefineComponent<{
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
        default: () => any;
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
    linkComponent(): "nuxt-link" | "router-link";
    isWithSlotOperator(): any;
}, {
    hideModal(): void;
    showMenu(): void;
    showSearchModal(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("search" | "update:modelValue")[], "search" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
        default: () => any;
    };
    showSearch: BooleanConstructor;
    logoText: {
        type: (StringConstructor | ArrayConstructor)[];
        default: () => string;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onSearch?: (...args: any[]) => any;
}, {
    placeholder: string;
    quickLinks: unknown[];
    modelValue: string;
    logoText: string | unknown[];
    serviceTitle: string;
    serviceDescription: string;
    homeTo: string;
    showSearch: boolean;
}>;
export default _default;
