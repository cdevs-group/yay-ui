import { ReactNode } from "react";
import { BetPosition } from "../Card/types";

export interface CardBalanceProps {
  right?: boolean;
  children?: ReactNode;
  account: string;
  texts: {
    title: string;
    text: string;
    connect?: string;
  };
}
export interface ImageProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  maxWidth?: string;
}
export interface ArrowProps {
  center?: boolean;
}

export interface TextCardsProps {
  texts?: {
    text1?: string;
    title1?: string;
    text2?: string;
    title2?: string;
    connect?: string;
  };
  account: string;
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
