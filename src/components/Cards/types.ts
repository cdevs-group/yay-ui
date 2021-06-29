import { ReactNode } from "react";
import { BetPosition } from "../Card/types";

export interface CardBalanceProps {
  right?: boolean;
  title: string;
  text: string;
  children?: ReactNode;
}
export interface CardFlipProps {
  isFlipped: boolean;
  children: Array<ReactNode>;
}
export interface ValueProps {
  vector: string;
  value: string;
  texts?: string;
}
export interface CardProductProp {
  title: string;
  img: string;
  bg: string;
  closed?: boolean;
  href?: string;
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
  maxWidth?: string;
}

export interface ArrowProps {
  center?: boolean;
}

export interface TextCardsProps {
  text: { text1?: string; title1?: string; text2?: string; title2?: string };
}

export interface CardButtonsProps {
  handleTurn: (e: any) => void;
  confirm: boolean;
  choise?: null | string;
  pool: string;
}

export interface TabsProps {
  handlePercentChange: (sliderPercent: number) => void;
  disabledTab?: boolean;
}

export interface SetPositionCardProps {
  onBack: (e: any) => void;
  children: ReactNode;
  inputValue: string;
  onUserInput: (input: string) => void;
  showFieldWarning: boolean;
  inputProps: { disabled: boolean };
  handlePercentChange: (sliderPercent: number) => void;
  disabledTab: boolean;
  texts?: string;
  inputText?: string;
}
export interface Itexts {
  payout?: string;
  entered?: string;
  prize?: string;
  setPosition?: string;
  commit?: string;
}
export interface ITextsButtons {
  entered?: string;
  prize?: string;
  enter?: string;
}

export interface ButtonsBlockRops {
  pool: string;
  hasEnteredUp: boolean;
  hasEnteredDown: boolean;
  handleSetPosition: (newPosition: BetPosition) => void;
  disabledButton: boolean;
  ethButton?: string;
  btcButton?: string;
  texts?: ITextsButtons;
}
export interface TopContentProps {
  children: ReactNode;
  rightContent: string;
  texts?: string;
}
export interface LaterCardProps {
  time: number;
  rightContent: string;
  color: string;
}

export interface ImageProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  maxWidth?: string;
}
