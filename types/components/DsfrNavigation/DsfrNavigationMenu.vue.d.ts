import '@gouvfr/dsfr/dist/component/navigation/navigation.module.js';
declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: () => any;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    links: {
        type: ArrayConstructor;
        default: () => any[];
    };
    expandedId: {
        type: StringConstructor;
        default: any;
    };
}, unknown, unknown, {
    expanded(): boolean;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "toggle-id"[], "toggle-id", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => any;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    links: {
        type: ArrayConstructor;
        default: () => any[];
    };
    expandedId: {
        type: StringConstructor;
        default: any;
    };
}>> & {
    "onToggle-id"?: (...args: any[]) => any;
}, {
    id: string;
    links: unknown[];
    expandedId: string;
}>;
export default _default;
