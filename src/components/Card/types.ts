import { HTMLAttributes } from "react";
import { SpaceProps } from "styled-system";

export interface CardRibbonProps {
  text: string;
}

export interface CardHeaderProps {
  icon: string;
  coin: string;
  upDown: string;
  num: string;
  greenColor: boolean;
  whiteCoin: boolean;
}

export type CardTheme = {
  background: string;
  boxShadow: string;
  boxShadowActive: string;
  boxShadowSuccess: string;
  boxShadowWarning: string;
  cardHeaderBackground: string;
  dropShadow: string;
};

export interface CardProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  isSuccess?: boolean;
  isWarning?: boolean;
  isDisabled?: boolean;
  ribbon?: React.ReactNode;
  active: boolean;
}
