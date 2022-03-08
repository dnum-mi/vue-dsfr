import '@gouvfr/dsfr/dist/component/modal/modal.module.js';
declare const _default: import("vue").DefineComponent<Readonly<import("vue").ComponentPropsOptions<{
    [x: string]: unknown;
}>>, unknown, {
    closeIfEscape: ($event: any) => void;
    isTrapActive: Function;
}, {
    role(): "dialog" | "alertdialog";
}, {
    startListeningToEscape(): void;
    stopListeningToEscape(): void;
    close(): Promise<void>;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<readonly string[] | import("vue").ExtractPropTypes<Readonly<import("vue").ComponentObjectPropsOptions<{
    [x: string]: unknown;
}>>>> & {
    onClose?: (...args: any[]) => any;
}, {
    [x: number]: string;
} | {}>;
export default _default;
