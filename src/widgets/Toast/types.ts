import { ReactNode } from "react";

export const types = {
  COLLECTION: "collection",
  SUCCESS: "success",
  WINNING: "winning",
  INFO: "info",
  ERROR: "error",
};

export type Types = typeof types[keyof typeof types];

export interface Toast {
  id: string;
  type: Types;
  title: string;
  description?: ReactNode;
  icon?: ReactNode;
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
  style?: Partial<CSSStyleDeclaration>;
  icon?: ReactNode;
}
