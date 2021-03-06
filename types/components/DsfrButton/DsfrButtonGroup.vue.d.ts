export interface Button {
  disabled?: boolean,
  label: string,
  secondary?: boolean,
  icon?: string,
  iconRight?: boolean,
  iconOnly?: boolean,
}

declare const _default: import('vue').DefineComponent<{
    buttons: {
        type: ArrayConstructor;
        default: () => any[];
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
}, unknown, unknown, {
    sm(): boolean;
    md(): boolean;
    lg(): boolean;
    center(): boolean;
    right(): boolean;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    buttons: {
        type: ArrayConstructor;
        default: () => any[];
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
    buttons: Button[];
    size: string;
    align: string;
}>
export default _default
