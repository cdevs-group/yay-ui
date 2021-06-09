import { HTMLAttributes } from "react";
import { SpaceProps } from "styled-system";
import { Colors } from "../../theme/types";

export interface CardRibbonProps {
  text: string;
}

export interface TimerProps {
  min: string;
  sec: string;
  ms: string;
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
}
