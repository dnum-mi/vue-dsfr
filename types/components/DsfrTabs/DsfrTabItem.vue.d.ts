declare const _default: import('vue').DefineComponent<{
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
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ('click' | 'next' | 'first' | 'last' | 'previous')[], 'click' | 'next' | 'first' | 'last' | 'previous', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
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
    onClick?: (event: MouseEvent) => any;
    onNext?: () => void;
    onFirst?: () => void;
    onLast?: () => void;
    onPrevious?: () => void;
}, {
    icon: string;
    selected: boolean;
    panelId: string;
    tabId: string;
}>
export default _default
