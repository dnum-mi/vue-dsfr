declare const _default: import("vue").DefineComponent<{
    newsletterData: {
        type: ObjectConstructor;
        default: () => any;
    };
    networks: {
        type: ArrayConstructor;
        default: () => any[];
        validator: (networks: unknown) => any;
    };
}, unknown, unknown, {
    hasNetworks(): any;
    hasNewsletter(): boolean;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    newsletterData: {
        type: ObjectConstructor;
        default: () => any;
    };
    networks: {
        type: ArrayConstructor;
        default: () => any[];
        validator: (networks: unknown) => any;
    };
}>>, {
    networks: unknown[];
    newsletterData: Record<string, any>;
}>;
export default _default;
