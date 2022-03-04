declare const _default: import("vue").DefineComponent<{}, {
    props: Readonly<import("vue").ExtractPropTypes<{
        asc: BooleanConstructor;
        selected: BooleanConstructor;
        panelId: {
            type: StringConstructor;
            required: true;
        };
        tabId: {
            type: StringConstructor;
            required: true;
        };
    }>>;
    values: {
        true: string;
        false: string;
    };
    translateValueFrom: import("vue").ComputedRef<any>;
    translateValueTo: import("vue").ComputedRef<any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
export default _default;
