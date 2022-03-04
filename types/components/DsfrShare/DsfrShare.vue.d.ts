declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    copyLabel: {
        type: StringConstructor;
        default: string;
    };
    mail: {
        type: ObjectConstructor;
        default: () => any;
    };
    networks: {
        type: ArrayConstructor;
        default: () => any[];
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    copyLabel: {
        type: StringConstructor;
        default: string;
    };
    mail: {
        type: ObjectConstructor;
        default: () => any;
    };
    networks: {
        type: ArrayConstructor;
        default: () => any[];
    };
}>>, {
    title: string;
    networks: unknown[];
    copyLabel: string;
    mail: Record<string, any>;
}>;
export default _default;
