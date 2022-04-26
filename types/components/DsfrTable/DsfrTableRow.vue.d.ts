interface RowData {
  component?: string;
  cellAttrs?: object;
}

type Row = string | RowData

declare const _default: import('vue').DefineComponent<{
    rowData: {
        type: ArrayConstructor;
        default: () => Row[];
    };
    rowAttrs: {
        type: ObjectConstructor;
        default: () => object;
    };
}, unknown, unknown, {
    isWithContent(): boolean;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    rowData: {
        type: ArrayConstructor;
        default: () => Row[];
    };
    rowAttrs: {
        type: ObjectConstructor;
        default: () => object;
    };
}>>, {
    rowData: Row[];
    rowAttrs: object;
}>
export default _default
