import { ReactNode } from "react";
import { LayoutProps, PositionProps } from "styled-system";
import { LangType } from "../../widgets/Menu/types";

export interface LanguagesProps {
  currentLang?: string;
  langs?: LangType[];
  setLang?: (lang: LangType) => void;
}

export const variants = {
  MENU: "menu",
  BEHIND: "behind",
  CENTER_BEHIND: "center-behind",
  VISIBLE: "visible",
} as const;

export type Variant = typeof variants[keyof typeof variants];
export interface DropDownProps extends PositionProps, LayoutProps {
  icon: ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
  children: ReactNode;
  variant?: Variant;
  plusMarginTop?: number;
}
