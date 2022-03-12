declare const _default: import('vue').DefineComponent<{
    id: {
        type: StringConstructor;
        default: () => any;
    };
    to: {
        type: (ObjectConstructor | StringConstructor)[];
        required: true;
    };
    text: {
        type: StringConstructor;
        required: true;
    };
}, unknown, unknown, {
    isExternal(): any;
    linkComponent(): 'nuxt-link' | 'router-link';
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'toggle-id'[], 'toggle-id', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    to: {
        type: (ObjectConstructor | StringConstructor)[];
        required: true;
    };
    text: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    'onToggle-id'?: (id: string) => void;
}, {
    id: string;
    to: import('vue-router').RouteLocationRaw;
    text: string;
}>
export default _default
