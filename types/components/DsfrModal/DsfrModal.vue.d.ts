declare const _default: import('vue').DefineComponent<{
    opened: BooleanConstructor;
    actions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    isAlert: BooleanConstructor;
    origin: {
        type: ObjectConstructor;
        default: () => {
            focus(): void;
        };
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
}, unknown, {
    closeIfEscape: ($event: any) => void;
}, {
    role(): 'dialog' | 'alertdialog';
}, {
    startListeningToEscape(): void;
    stopListeningToEscape(): void;
    close(): Promise<void>;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'close'[], 'close', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    opened: BooleanConstructor;
    actions: {
        type: ArrayConstructor;
        default: () => any[];
    };
    isAlert: BooleanConstructor;
    origin: {
        type: ObjectConstructor;
        default: () => {
            focus(): void;
        };
    };
    title: {
        type: StringConstructor;
        required: true;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
}>> & {
    onClose?: (...args: any[]) => any;
}, {
    origin: Record<string, any>;
    icon: string;
    actions: unknown[];
    opened: boolean;
    isAlert: boolean;
}>
export default _default
