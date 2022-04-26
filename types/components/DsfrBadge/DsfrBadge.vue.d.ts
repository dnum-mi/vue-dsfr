declare const _default: import('vue').DefineComponent<{
  label: {
    type: StringConstructor;
    default(): string;
  };
  type: {
    type: StringConstructor;
    default(): undefined;
    validator: () => boolean
  };
  noIcon: {
    type: BooleanConstructor,
    default: false
  };
  small: {
    type: BooleanConstructor,
    default: false
  };
  ellipsis: {
    type: BooleanConstructor,
    default: false
  };
}, unknown, {}, {}, {
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'close'[], 'close', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
  label: {
    type: StringConstructor;
    default(): string;
  };
  type: {
    type: StringConstructor;
    default(): undefined;
    validator: () => boolean
  };
  noIcon: {
    type: BooleanConstructor,
    default: false
  };
  small: {
    type: BooleanConstructor,
    default: false
  };
  ellipsis: {
    type: BooleanConstructor,
    default: false
  };
}>>, {
  label: string;
  type: 'success' | 'error' | 'warning' | 'info' | 'new';
  noIcon: boolean;
  small: boolean;
  ellipsis: boolean;
}>
export default _default
