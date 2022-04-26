declare const _default: import('vue').DefineComponent<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    hint: {
        type: StringConstructor;
        default: string;
    };
    error: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
      type: StringConstructor;
      default: string;
    }
}, unknown, unknown, {}, {
  onChange: (event: InputEvent) => void
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    hint: {
        type: StringConstructor;
        default: string;
    };
    error: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
      type: StringConstructor;
      default: string;
    }
}>> & {
  onChange: (event: InputEvent) => void;
  'onUpdate:modelValue'?: (inputValue: string | string[]) => void;
}, {
    error: string;
    id: string;
    label: string;
    hint: string;
    modelValue: string;
}>
export default _default
