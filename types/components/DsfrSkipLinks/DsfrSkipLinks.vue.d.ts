interface SkipLink {
  id: string;
  text: string;
}

declare const _default: import('vue').DefineComponent<{
    links: {
        type: ArrayConstructor;
        required: true;
    };
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    links: {
        type: ArrayConstructor;
        required: true;
    };
}>>, {
  links: SkipLink[];
}>
export default _default
