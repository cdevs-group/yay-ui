import { ReactNode } from "react";

export interface CardBalanceProps {
  right?: boolean;
  title: string;
  text: string;
  children?: ReactNode;
}
export interface CardFlipProps {
  isFlipped: boolean;
  children: [ReactNode, ReactNode];
}
export interface ValueProps {
  vector: string;
  value: string;
}
export interface CardProductProp {
  title: string;
  img: string;
  bg: string;
  closed?: boolean;
  position?: string;
}

export interface ArrowProps {
  center?: boolean;
}

export interface TextCardsProps {
  text: { text1: string; title1: string; text2: string; title2: string };
}

export interface CardButtonsProps {
  handleTurn: (e: any) => void;
  confirm: boolean;
  choise?: null | string;
  pool: string;
}

export interface TabsProps {
  handleToggleTabs: (e: any) => void;
  tabValue: number;
  tabsList?: Array<string>;
}

export interface InputProps {
  value: string;
  isWarning?: boolean;
  onChange: (e: any) => void;
  inputProps: { disabled: boolean };
}
export interface SetPositionCardProps {
  onBack: (e: any) => void;
  position: any;
  handleBetMethod: () => void;
  inputValue: string;
  handleInputChange: (e: any) => void;
  showFieldWarning: boolean;
  inputProps: { disabled: boolean };
}

export interface ButtonsBlockRops {
  children: [ReactNode, ReactNode];
  pool: string;
  betMethod: string;
}
export interface TopContentProps {
  children: ReactNode;
  rightContent: string;
}
export interface LaterCardProps {
  time: number;
  rightContent: string;
  color: string;
}
