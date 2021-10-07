import { ReactNode } from "react";
import { SpaceProps } from "styled-system";

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
}

export interface ToastContainerProps {
  toasts: Toast[];
  stackSpacing?: number;
  ttl?: number;
  onRemove: (id: string) => void;
  propsWrapper?: SpaceProps;
}

export interface ToastProps {
  toast: Toast;
  onRemove: ToastContainerProps["onRemove"];
  ttl: number;
  style?: Partial<CSSStyleDeclaration>;
}
