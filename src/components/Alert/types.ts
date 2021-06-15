import { ReactNode } from "react";

export type AlertTheme = {
  background: string;
};

export const variants = {
  COLLECTION: "collection",
  SUCCESS: "success",
  WINNING: "winning",
} as const;

export type Variants = typeof variants[keyof typeof variants];

export interface AlertProps {
  variant?: Variants;
  title: string;
  value?:string;
  subtitle?:string;
  children?: ReactNode;
  isLoad?:boolean;
  onClick?: () => void;
  showAlert?:boolean
}
