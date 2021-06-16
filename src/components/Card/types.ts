import { ReactNode } from "react";

export interface CardHeaderProps {
  icon?: ReactNode;
  coin: string;
  upDown?: string;
  num?: string;
  greenColor?: boolean;
  whiteCoin?: boolean;
  svg?: ReactNode;
  negative?: boolean;
}

export interface CardProps {
  children?: ReactNode;
  active?: boolean;
}

export interface CardTheme {
  background: string;
  boxShadow: string;
  boxShadowActive: string;
  boxShadowSuccess: string;
  boxShadowWarning: string;
  cardHeaderBackground: string;
  dropShadow: string;
}
