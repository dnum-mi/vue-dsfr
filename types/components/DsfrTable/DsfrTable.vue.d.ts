interface CustomTableHeader {
  text: string;
  headerAttrs: object;
}

interface CustomTableRow {
  text: string;
  rowAttrs: object;
}

export type TableHeader = string | CustomTableHeader
type TableRow = string | CustomTableRow

declare const _default: import('vue').DefineComponent<{
    title: {
        type: StringConstructor;
        default: any;
    };
    headers: {
        type: ArrayConstructor;
        default: () => TableHeader[];
    };
    rows: {
        type: (ObjectConstructor | ArrayConstructor)[];
        default: () => (string | number)[];
    };
    noCaption: BooleanConstructor;
}, unknown, unknown, {
    isWithContent(): boolean;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    headers: {
        type: ArrayConstructor;
        default: () => TableHeader[];
    };
    rows: {
        type: (ObjectConstructor | ArrayConstructor)[];
        default: () => (TableRow)[];
    };
    noCaption: BooleanConstructor;
}>>, {
    title: string;
    headers: TableHeader[];
    rows: TableRow[];
    noCaption: boolean;
}>
export default _default
