import '@gouvfr/dsfr/dist/component/navigation/navigation.module.js';
declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: () => any;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    navItems: {
        type: ArrayConstructor;
        default: () => any[];
    };
}, unknown, {
    expandedMenuId: any;
}, {}, {
    toggle(id: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => any;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    navItems: {
        type: ArrayConstructor;
        default: () => any[];
    };
}>>, {
    id: string;
    label: string;
    navItems: unknown[];
}>;
export default _default;
