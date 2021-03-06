import React, { ReactNode } from "react";
export type Handler = (boolean: boolean) => void;

export interface ITextsYourHistory {
  position?: string;
  lose?: string;
  win?: string;
  history?: string;
  textPrice?: string;
  textCanceled?: string;
}
export interface ITextRoundHistory {
  rounds?: string;
  locked?: string;
  prize?: string;
  open?: string;
  closing?: string;
  textPrice?: string;
  up?: string;
  down?: string;
  textCanceled?: string;
}

export interface ITextRoundBTCHistory {
  rounds?: string;
  locked?: string;
  prize?: string;
  open?: string;
  closing?: string;
  textPrice?: string;
  btcPayout?: string;
  ethPayout?: string;
  textCanceled?: string;
}
export interface ITextNoHistory {
  ifYouSure?: string;
  noPredict?: string;
}
export interface ITextsStatistic {
  average?: string | ReactNode;
  best?: string | ReactNode;
  averagePosition?: string | ReactNode;
}

export interface InjectedProps {
  setOpen?: Handler;
  open: boolean;
  children?: ReactNode;
}
export interface bestData {
  average: number;
  round: number;
  win: boolean;
}
export interface bestProps {
  best: Array<bestData>;
  bestNumber?: {
    number: number;
    kef: number;
  };
}
export interface PnlProp {
  open: boolean;
}

export interface ICardAccordeon {
  id: string;
  number: string;
  text: string;
  color: string;
  icon: React.ReactNode;
  content: Array<React.ReactNode>;
  collect?: boolean;
}
export interface Bet {
  id?: string;
  hash?: string;
  amount: number;
  position: BetPosition;
  claimed: boolean;
  claimedHash: string;
  user?: PredictionUser;
  round: any;
}

export interface RoundBtcVsEth {
  id: string;
  epoch: number;
  failed?: boolean;
  startBlock: number;
  startAt: number;
  lockAt: number;
  lockBlock: number;
  lockFirstPrice: number;
  lockSecondPrice: number;
  endBlock: number;
  closeFirstPrice: number;
  closeSecondPrice: number;
  totalBets: number;
  totalAmount: number;
  bullBets: number;
  bearBets: number;
  bearAmount: number;
  bullAmount: number;
  position: BetPosition;
  bets?: Bet[];
}

export interface PredictionUser {
  id: string;
  address: string;
  block: number;
  totalBets: number;
  totalBNB: number;
}
export enum BetPosition {
  BULL = "Bull",
  BEAR = "Bear",
  HOUSE = "House",
}
export interface Round {
  id: string;
  epoch: number;
  failed?: boolean;
  startBlock: number;
  startAt: number;
  lockAt: number;
  lockBlock: number;
  lockPrice: number;
  endBlock: number;
  closePrice: number;
  totalBets: number;
  totalAmount: number;
  bullBets: number;
  bearBets: number;
  bearAmount: number;
  bullAmount: number;
  position: BetPosition;
  bets?: Bet[];
}
