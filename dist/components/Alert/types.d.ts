import { MouseEvent, ReactNode } from "react";
export declare type AlertTheme = {
    background: string;
};
export declare const variants: {
    readonly COLLECTION: "collection";
    readonly SUCCESS: "success";
    readonly WINNING: "winning";
    readonly INFO: "info";
    readonly ERROR: "error";
};
export declare type Variants = typeof variants[keyof typeof variants];
export interface AlertProps {
    variant?: Variants;
    title?: string;
    children?: ReactNode;
    onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
}
