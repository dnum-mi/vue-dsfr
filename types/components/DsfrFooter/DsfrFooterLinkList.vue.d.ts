declare const _default: import("vue").DefineComponent<{
    categoryName: {
        type: StringConstructor;
        default: string;
    };
    links: {
        type: ArrayConstructor;
        default: () => any[];
    };
}, unknown, unknown, {
    linkComponent(): "nuxt-link" | "router-link";
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    categoryName: {
        type: StringConstructor;
        default: string;
    };
    links: {
        type: ArrayConstructor;
        default: () => any[];
    };
}>>, {
    links: unknown[];
    categoryName: string;
}>;
export default _default;
