declare const _default: import("vue").DefineComponent<{
    header: {
        type: StringConstructor;
        default: string;
    };
    headerAttrs: {
        type: ObjectConstructor;
        default: () => {};
    };
    icon: {
        type: ObjectConstructor;
        default: any;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    header: {
        type: StringConstructor;
        default: string;
    };
    headerAttrs: {
        type: ObjectConstructor;
        default: () => {};
    };
    icon: {
        type: ObjectConstructor;
        default: any;
    };
}>>, {
    header: string;
    icon: Record<string, any>;
    headerAttrs: Record<string, any>;
}>;
export default _default;
