declare const _default: import('vue').DefineComponent<{
    id: {
        type: StringConstructor;
        default: () => any;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    link: {
        type: ObjectConstructor;
        default: () => {
            to: string;
            text: string;
        };
    };
    menus: {
        type: ArrayConstructor;
        default: () => any[];
    };
    expandedId: {
        type: StringConstructor;
        default: any;
    };
}, unknown, unknown, {
    expanded(): boolean;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'toggle-id'[], 'toggle-id', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => any;
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    link: {
        type: ObjectConstructor;
        default: () => {
            to: string;
            text: string;
        };
    };
    menus: {
        type: ArrayConstructor;
        default: () => any[];
    };
    expandedId: {
        type: StringConstructor;
        default: any;
    };
}>> & {
    'onToggle-id'?: (...args: any[]) => any;
}, {
    link: Record<string, any>;
    description: string;
    id: string;
    expandedId: string;
    menus: unknown[];
}>
export default _default
