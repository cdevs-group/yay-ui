import { ReactNode } from "react";
export declare const types: {
    COLLECTION: string;
    SUCCESS: string;
    WINNING: string;
    INFO: string;
};
export declare type Types = typeof types[keyof typeof types];
export interface Toast {
    id: string;
    type: Types;
    title: string;
    description?: ReactNode;
}
export interface ToastContainerProps {
    toasts: Toast[];
    stackSpacing?: number;
    ttl?: number;
    onRemove: (id: string) => void;
}
export interface ToastProps {
    toast: Toast;
    onRemove: ToastContainerProps["onRemove"];
    ttl: number;
    style: Partial<CSSStyleDeclaration>;
}
