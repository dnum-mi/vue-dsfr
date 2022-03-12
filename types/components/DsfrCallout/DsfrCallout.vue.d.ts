declare const _default: import('vue').DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    button: {
        type: ObjectConstructor;
        default: () => any;
        required: false;
    };
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    button: {
        type: ObjectConstructor;
        default: () => any;
        required: false;
    };
}>>, {
    button: Record<string, any>;
    content: string;
    title: string;
    icon: string;
}>
export default _default
