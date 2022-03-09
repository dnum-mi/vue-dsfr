declare const _default: import("vue").DefineComponent<{
    selected: BooleanConstructor;
    panelId: {
        type: StringConstructor;
        required: true;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    tabId: {
        type: StringConstructor;
        required: true;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "next" | "first" | "last" | "previous")[], "click" | "next" | "first" | "last" | "previous", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    selected: BooleanConstructor;
    panelId: {
        type: StringConstructor;
        required: true;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    tabId: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    onClick?: (...args: any[]) => any;
    onNext?: (...args: any[]) => any;
    onFirst?: (...args: any[]) => any;
    onLast?: (...args: any[]) => any;
    onPrevious?: (...args: any[]) => any;
}, {
    icon: string;
    selected: boolean;
}>;
export default _default;
