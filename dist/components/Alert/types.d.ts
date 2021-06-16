import { ReactNode } from "react";
export declare type AlertTheme = {
    background: string;
};
export declare const variants: {
    readonly COLLECTION: "collection";
    readonly SUCCESS: "success";
    readonly WINNING: "winning";
};
export declare type Variants = typeof variants[keyof typeof variants];
export interface AlertProps {
    variant?: Variants;
    title: string;
    value?: string;
    subtitle?: string;
    children?: ReactNode;
    isLoad?: boolean;
    onClick?: () => void;
    showAlert?: boolean;
}
