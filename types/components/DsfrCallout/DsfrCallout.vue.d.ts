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
    titleTag: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
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
    titleTag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    button: Record<string, any>;
    content: string;
    title: string;
    icon: string;
    titleTag: string;
}>
export default _default
