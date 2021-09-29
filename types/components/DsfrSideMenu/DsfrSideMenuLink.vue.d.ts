declare const _default: import("vue").DefineComponent<{
    active: BooleanConstructor;
    to: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {
    isExternalLink(): any;
    is(): "a" | "nuxt-link" | "router-link";
    linkProps(): {
        [x: string]: any;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "toggle-expand"[], "toggle-expand", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    active: BooleanConstructor;
    to: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onToggle-expand"?: (...args: any[]) => any;
}, {
    active: boolean;
    to: string;
}>;
export default _default;
