import { InputHTMLAttributes, ReactNode, ReactText } from "react";
import { BetPosition, Itexts, ValueRowText } from "../Card/types";

export interface ItextExpired {
  prize?: string;
  closed?: string;
  locked?: string;
  payout?: string;
  last?: string;
  entered?: string;
}

export interface IProps {
  roundEpoch: string;
  time: number;
  payoutWin: string;
  payoutLose: string;
  handleSetPosition: (newPosition: BetPosition) => void;
  pool: string;
  hasEnteredUp: boolean;
  hasEnteredDown: boolean;
  disabledButton: boolean;
  disabledTimer?: boolean;
  ethButton: string;
  btcButton: string;
  textRow?: ValueRowText;
  textsButtons?: Itexts;
}

export interface ExpireCardBTCProps {
  closedBTC: string;
  lockedBTC: string;
  closedETH: string;
  lockedETH: string;
  prize: string;
  percentBTC?: string;
  percentETH?: string;
  btcLider: boolean;
  texts?: ItextExpired;
}

export interface SetPositionCardProps {
  onBack: (e: any) => void;
  children: ReactNode;
  inputValue: ReactText;
  onUserInput: (input: string) => void;
  showFieldWarning?: boolean;
  inputProps?:
    | Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "placeholder" | "onChange">
    | { disabled: boolean };
  handlePercentChange: (sliderPercent: number) => void;
  disabledTab?: boolean;
  texts?: string;
  inputTexts?: {
    currency?: string;
    commit?: string;
  };
  textsButtons?: Itexts;
}

export interface BalanceBlockProps {
  btc?: boolean;
  value: string;
}
