declare const _default: import('vue').DefineComponent<Readonly<import('vue').ComponentPropsOptions<{
    opened: {
        type: BooleanConstructor;
        default: boolean;
    };
    isAlert: {
        type: BooleanConstructor;
        default: boolean;
    };
    actions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    origin: {
        type: ObjectConstructor;
        default: () => ({ focus: () => void });
    };
    title: {
        type: StringConstructor;
        required: true;
    };
}>>, unknown, {
    closeIfEscape: ($event: KeyboardEvent) => void;
    isTrapActive: Function;
}, {
    role(): 'dialog' | 'alertdialog';
}, {
    startListeningToEscape(): void;
    stopListeningToEscape(): void;
    close(): Promise<void>;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'toggle-id'[], 'toggle-id', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    opened: {
        type: BooleanConstructor;
        default: boolean;
    };
    isAlert: {
        type: BooleanConstructor;
        default: boolean;
    };
    actions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    origin: {
        type: ObjectConstructor;
        default: () => ({ focus: () => void });
    };
    title: {
        type: StringConstructor;
        required: true;
    };
}>> & {
    onClose?: () => void;
}, {
    opened?: boolean;
    isAlert?: boolean;
    actions?: Array<any>;
    origin?: { focus: () => void };
    title: string;
}>
export default _default
