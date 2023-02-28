declare const _default: import('vue').DefineComponent<{
    active: BooleanConstructor;
    to: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {
    isExternalLink(): boolean;
    is(): 'a' | 'RouterLink';
    linkProps(): { href: string; } | { to: import('vue-router').RouteLocationRaw };
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'toggle-expand'[], 'toggle-expand', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    active: BooleanConstructor;
    to: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    'onToggle-expand'?: (id: string) => void;
}, {
    active: boolean;
    to: string;
}>
export default _default
