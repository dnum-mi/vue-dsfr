type ButtonProps = {
    disabled: boolean;
    label: string;
    secondary: boolean;
    tertiary: boolean;
    icon: string;
    iconRight: boolean;
    iconOnly: boolean;
}

declare const _default: import('vue').DefineComponent<{
    buttons: {
        type: ArrayConstructor;
        default: () => ButtonProps[];
    };
    inline: BooleanConstructor;
    size: {
        type: StringConstructor;
        validator: (val: string) => boolean;
        default: undefined;
    };
    reverse: BooleanConstructor;
    align: {
        type: StringConstructor;
        validator: (val: string) => boolean;
        default: undefined;
    };
}, unknown, unknown, {
    sm(): boolean;
    md(): boolean;
    lg(): boolean;
    center(): boolean;
    right(): boolean;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    buttons: {
        type: ArrayConstructor;
        default: () => ButtonProps[];
    };
    inline: BooleanConstructor;
    size: {
        type: StringConstructor;
        validator: (val: string) => boolean;
        default: any;
    };
    reverse: BooleanConstructor;
    align: {
        type: StringConstructor;
        validator: (val: string) => boolean;
        default: any;
    };
}>>, {
    reverse: boolean;
    inline: boolean;
    buttons: Array<ButtonProps>;
    size: string;
    align: string;
}>
export default _default
