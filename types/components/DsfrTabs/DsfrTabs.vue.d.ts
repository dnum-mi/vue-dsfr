declare const _default: import('vue').DefineComponent<{
    tabListName: {
        type: StringConstructor;
        required: true;
    };
    tabTitles: {
        type: ArrayConstructor;
        required: true;
    };
    tabContents: {
        type: ArrayConstructor;
        default: () => any[];
    };
    initialSelectedIndex: {
        type: NumberConstructor;
        required: false;
    };
}, unknown, {
    getRandomId: any;
    selectedIndex: number;
    generatedIds: {};
    asc: boolean;
}, {}, {
    isSelected(idx: any): boolean;
    getIdFromIndex(idx: any): any;
    selectIndex(idx: any): Promise<void>;
    selectPrevious(): Promise<void>;
    selectNext(): Promise<void>;
    selectFirst(): Promise<void>;
    selectLast(): Promise<void>;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'select-tab'[], 'select-tab', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    tabListName: {
        type: StringConstructor;
        required: true;
    };
    tabTitles: {
        type: ArrayConstructor;
        required: true;
    };
    tabContents: {
        type: ArrayConstructor;
        default: () => any[];
    };
    initialSelectedIndex: {
        type: NumberConstructor;
        required: false;
    };
}>> & {
    'onSelect-tab'?: (...args: any[]) => any;
}, {
    tabListName: string;
    tabContents?: string[];
    tabTitles: string[];
    initialSelectedIndex: number;
}>
export default _default
